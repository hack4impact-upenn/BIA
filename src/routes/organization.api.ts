import express from 'express';
import errorHandler from './error';
import { Organization, IOrganization } from '../models/organization.model';
import { v4 as uuidv4 } from 'uuid';
import csv from 'csv-parser';
import multer from 'multer';
import auth from '../middleware/auth';
import fs from 'fs';

const { awsUpload, awsGet } = require('../utils/aws');
import database from 'src/utils/database';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

/* create a new organization*/
router.post('/', async (req, res) => {
  const { organizationName } = req.body;
  const { yearFounded } = req.body;
  const { shortDescription } = req.body;
  const { headquarterCity } = req.body;
  const { contactEmail } = req.body;
  const { website } = req.body;
  const { industryFocus } = req.body;
  const { programTypes } = req.body;

  if (await Organization.findOne({ organizationName })) {
    return errorHandler(res, 'Organization already exists.');
  }

  const newOrganization = new Organization({
    organizationName: organizationName,
    yearFounded: yearFounded,
    shortDescription: shortDescription,
    headquarterCity: headquarterCity,
    pointOfContact: req.body.pointOfContact.hasOwnProperty('title')
      ? {
          name: req.body.pointOfContact.name,
          title: req.body.pointOfContact.title,
          email: req.body.pointOfContact.email,
        }
      : {
          name: req.body.pointOfContact.name,
          email: req.body.pointOfContact.email,
        },
    contactEmail: contactEmail,
    website: website,
    industryFocus: industryFocus,
    programTypes: programTypes,
  });

  if (req.body.logo) {
    var key = `${uuidv4()}_${organizationName}`;
    const data = Buffer.from(
      req.body.logo.replace(/^data:image\/\w+;base64,/, ''),
      'base64'
    );
    var mime = req.body.logo.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);
    if (mime && mime.length > 0) {
      mime = mime[1];
      mime = mime.split('/');
      if (mime && mime.length > 0) {
        key = key + `.${mime[1]}`;
      }
    }
    const type = mime && mime[0] ? mime[0] : 'image';
    const mime1 = mime && mime[1] ? mime[1] : 'jpeg';
    awsUpload(key, data, type, mime1);
    newOrganization.logoURL = key;
  }

  if (req.hasOwnProperty('longDescription')) {
    const { longDescription } = req.body;
    newOrganization.longDescription = longDescription;
  }
  if (req.hasOwnProperty('twitter')) {
    const { twitter } = req.body;
    newOrganization.twitter = twitter;
  }
  if (req.hasOwnProperty('facebook')) {
    const { facebook } = req.body;
    newOrganization.facebook = facebook;
  }
  if (req.hasOwnProperty('instagram')) {
    const { instagram } = req.body;
    newOrganization.instagram = instagram;
  }
  if (req.hasOwnProperty('linkedIn')) {
    const { linkedIn } = req.body;
    newOrganization.linkedIn = linkedIn;
  }
  if (req.hasOwnProperty('innovatorTypes')) {
    const { innovatorTypes } = req.body;
    newOrganization.innovatorTypes = innovatorTypes;
  }
  if (req.hasOwnProperty('businessStages')) {
    const { businessStages } = req.body;
    newOrganization.businessStages = businessStages;
  }
  if (req.hasOwnProperty('signatureProgram')) {
    if (req.body.signatureProgram.hasOwnProperty('imageURL')) {
      newOrganization.signatureProgram.imageURL =
        req.body.signatureProgram.imageURL;
      // awsUpload(req.body.signatureProgram.imageURL);
    }
    newOrganization.signatureProgram.description =
      req.body.signatureProgram.description;
  }

  //awsUpload(logoURL);

  return newOrganization
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => errorHandler(res, e.message));
});

/* fetch organization info */
router.get('/:organizationName', async (req, res) => {
  const { organizationName } = req.params;
  try {
    const org = await Organization.findOne({ organizationName });
    const imageString = org && org.logoURL ? await awsGet(org.logoURL) : '';
    const docs = { ...org, imageString };
    res.status(200).json({ success: true, data: docs });
  } catch {
    res.status(400).json({ success: false, message: 'unknown error' });
  }
});

/* update an individual organization */
router.put('/:organizationName', async (req, res) => {
  const { organizationName } = req.params;
  const organization = await Organization.findOne({ organizationName });

  if (!organization) return errorHandler(res, 'User does not exist.');

  if (req.hasOwnProperty('organizationName')) {
    const { organizationName } = req.body;
    organization.organizationName = organizationName;
  }
  if (req.hasOwnProperty('yearFounded')) {
    const { yearFounded } = req.body;
    organization.yearFounded = yearFounded;
  }
  if (req.hasOwnProperty('shortDescription')) {
    const { shortDescription } = req.body;
    organization.shortDescription = shortDescription;
  }
  if (req.hasOwnProperty('longDescription')) {
    const { longDescription } = req.body;
    organization.longDescription = longDescription;
  }
  if (req.hasOwnProperty('headquarterCity')) {
    const { headquarterCity } = req.body;
    organization.headquarterCity = headquarterCity;
  }
  if (req.hasOwnProperty('pointOfContact')) {
    organization.pointOfContact.name = req.body.pointOfContact.name;
    if (req.body.pointOfContact.hasOwnProperty('image')) {
      organization.pointOfContact.title = req.body.pointOfContact.title;
    }
    organization.pointOfContact.email = req.body.pointOfContact.email;
  }
  if (req.hasOwnProperty('contactEmail')) {
    const { contactEmail } = req.body;
    organization.contactEmail = contactEmail;
  }
  if (req.hasOwnProperty('website')) {
    const { website } = req.body;
    organization.website = website;
  }
  if (req.hasOwnProperty('twitter')) {
    const { twitter } = req.body;
    organization.twitter = twitter;
  }
  if (req.hasOwnProperty('facebook')) {
    const { facebook } = req.body;
    organization.facebook = facebook;
  }
  if (req.hasOwnProperty('instagram')) {
    const { instagram } = req.body;
    organization.instagram = instagram;
  }
  if (req.hasOwnProperty('linkedIn')) {
    const { linkedIn } = req.body;
    organization.linkedIn = linkedIn;
  }
  if (req.hasOwnProperty('innovatorTypes')) {
    const { innovatorTypes } = req.body;
    organization.innovatorTypes = innovatorTypes;
  }
  if (req.hasOwnProperty('businessStages')) {
    const { businessStages } = req.body;
    organization.businessStages = businessStages;
  }
  if (req.hasOwnProperty('industryFocus')) {
    const { industryFocus } = req.body;
    organization.industryFocus = industryFocus;
  }
  if (req.hasOwnProperty('programTypes')) {
    const { programTypes } = req.body;
    organization.programTypes = programTypes;
  }
  if (req.hasOwnProperty('focusArea')) {
    const { focusArea } = req.body;
    organization.focusArea = focusArea;
  }
  if (req.hasOwnProperty('profitStatus')) {
    const { profitStatus } = req.body;
    organization.profitStatus = profitStatus;
  }
  if (req.hasOwnProperty('logo')) {
    const { logoURL } = req.body;
    organization.logoURL = logoURL;
    console.log('\n\n ******about to post an image \n\n ******');
    awsUpload(logoURL);
  }
  if (req.hasOwnProperty('signatureProgram')) {
    if (req.body.signatureProgram.hasOwnProperty('image')) {
      organization.signatureProgram.imageURL =
        req.body.signatureProgram.imageURL;

      awsUpload(req.body.signatureProgram.imageURL);
    }
    organization.signatureProgram.description =
      req.body.signatureProgram.description;
  }

  return organization
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => errorHandler(res, e.message));
});

/* delete individual organization */
router.delete('/:organizationName', (req, res) => {
  const { organizationName } = req.params;

  return Organization.deleteOne({ organizationName })
    .then((organization) => {
      if (!organization) return errorHandler(res, 'User does not exist.');

      return res.status(200).json({ success: true });
    })
    .catch((err) => errorHandler(res, err.message));
});

/* fetch all users in database */
router.get('/', (_, res) => {
  Organization.find({})
    .then((result) => res.status(200).json({ success: true, result }))
    .catch((e) => errorHandler(res, e));
});

/* delete all users in database */
router.delete('/', (_, res) => {
  Organization.deleteMany({})
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => errorHandler(res, e));
});

router.post('/addImage/:organizationName', async (req, res) => {
  const { organizationName } = req.params;
  const organization = await Organization.findOne({ organizationName });
  if (organization) {
    if (req.body.logo) {
      var key;
      if (organization.logoURL) {
        key = organization.logoURL.split('.')[0];
      } else {
        key = `${uuidv4()}_${organizationName}`;
      }
      const data = Buffer.from(
        req.body.logo.replace(/^data:image\/\w+;base64,/, ''),
        'base64'
      );
      var mime = req.body.logo.match(
        /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/
      );
      if (mime && mime.length > 0) {
        mime = mime[1];
        mime = mime.split('/');
        if (mime && mime.length > 0) {
          key = key + `.${mime[1]}`;
        }
      }
      const type = mime && mime[0] ? mime[0] : 'image';
      const mime1 = mime && mime[1] ? mime[1] : 'jpeg';
      if (!organization.logoURL) {
        const filter = { organizationName: organizationName };
        const update = { logoURL: key };
        await Organization.findOneAndUpdate(filter, update);
      }
      awsUpload(key, data, type, mime1);
    }
  }

  res.send({ status: 'success' });
});

router.post('/uploadCSV', upload.single('file'), auth, async (req, res) => {
  //deleting all existing organizations in the db
  await Organization.deleteMany({});

  const results: any = [];

  fs.createReadStream(req.file.path)
    .pipe(
      csv([
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
      ])
    )
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // we create a new organization object from the csv data
      // NOTE: many of these are placeholders right now (unspecified behavior)
      results.forEach(async (organization: any) => {
        console.log(organization);
        const newOrganization = new Organization();
        newOrganization.organizationName = organization[0];
        newOrganization.yearFounded = 2000;
        //need to change short and long description to actual short and long description
        //for now we are using the signature program description because thats the only description in the data
        newOrganization.shortDescription = organization[12];
        newOrganization.longDescription = organization[12];

        newOrganization.pointOfContact = {
          name: organization[0],
          title: 'Contact Person',
          email: 'dummyEmail@gmail.com',
        };
        const location = `${organization[1]}, ${organization[2]}`;
        newOrganization.headquarterCity = location;
        newOrganization.contactEmail = organization[3];
        newOrganization.website = organization[3];
        newOrganization.twitter = organization[4];
        newOrganization.facebook = organization[5];
        newOrganization.instagram = organization[6];
        newOrganization.linkedIn = organization[7];
        newOrganization.innovatorSupport = organization[8];
        newOrganization.growthStage = organization[9];
        //empty array for industry focus until data is standardized
        newOrganization.industryFocus = [];
        newOrganization.programTypes = organization[10]
          ? organization[10].split(';')
          : null;
        newOrganization.focusArea = organization[11];
        newOrganization.profitStatus = organization[12];
        newOrganization.signatureProgram = {
          imageURL: '',
          description: organization[12],
        };

        try {
          // upload organization object to MongoDB
          await newOrganization.save();
        } catch (err) {
          console.log(err);
          return { success: false };
        }
      });
      // We are deleting the file that was uploaded from the server.
      fs.unlink(req.file.path, (err) => {
        if (err) console.error(err);
      });
      return res.status(200).json({ success: true });
    });
});
/* add/update all organizations by CSV */

export default router;

/*

*/
