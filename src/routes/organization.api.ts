import express from 'express';
import { hash, compare } from 'bcrypt';
import { User, IUser } from '../models/user.model';
import auth from '../middleware/auth';
import errorHandler from './error';
import { Organization, IOrganization } from '../models/organization.model';

const router = express.Router();

/* create a new organization*/
router.post('/create/organization', async (req, res) => {
  const { organizationName } = req.body;
  const { yearFounded } = req.body;
  const { shortDescription } = req.body;
  const { headquarterCity } = req.body;
  const { pointOfContact } = req.body;
  const { contactEmail } = req.body;
  const { website } = req.body;
  const { industryFocus } = req.body;
  const { programTypes } = req.body;
  const { logo } = req.body;

  if (await Organization.findOne({ organizationName })) {
    return errorHandler(res, 'Organization already exists.');
  }

  const newOrganization = new Organization({
    organizationName: organizationName,
    yearFounded: yearFounded,
    shortDescription: shortDescription,
    headquarterCity: headquarterCity,
    pointOfContact: pointOfContact,
    contactEmail: contactEmail,
    website: website,
    industryFocus: industryFocus,
    programTypes: programTypes,
    logo: logo,
  });

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
    const { signatureProgram } = req.body;
    newOrganization.signatureProgram = signatureProgram;
  }
  return newOrganization
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => errorHandler(res, e.message));
});

/* fetch organization info */
router.get('/find/:organizationName', (req, res) => {
  const { organizationName } = req.params;

  return Organization.findOne({ organizationName })
    .then((organization) => {
      if (!organization) return errorHandler(res, 'User does not exist.');

      return res.status(200).json({ success: true, data: organization });
    })
    .catch((err) => errorHandler(res, err.message));
});

/* update an individaul organization */
router.post('/update:organizationName', async (req, res) => {
  const { organizationName } = req.params;
  const organization = await Organization.findOne({ organizationName });

  if (!organization) return errorHandler(res, 'User does not exist.');

  if (req.hasOwnProperty('organizationName')) {
    const { organizationName } = req.body;
    organization.update({ organizationName: organizationName });
  }
  if (req.hasOwnProperty('yearFounded')) {
    const { yearFounded } = req.body;
    organization.update({ yearFounded: yearFounded });
  }
  if (req.hasOwnProperty('shortDescription')) {
    const { shortDescription } = req.body;
    organization.update({ shortDescription: shortDescription });
  }
  if (req.hasOwnProperty('longDescription')) {
    const { longDescription } = req.body;
    organization.update({ longDescription: longDescription });
  }
  if (req.hasOwnProperty('headquarterCity')) {
    const { headquarterCity } = req.body;
    organization.update({ headquarterCity: headquarterCity });
  }
  if (req.hasOwnProperty('pointOfContact')) {
    const { pointOfContact } = req.body;
    organization.update({ pointOfContact: pointOfContact });
  }
  if (req.hasOwnProperty('contactEmail')) {
    const { contactEmail } = req.body;
    organization.update({ contactEmail: contactEmail });
  }
  if (req.hasOwnProperty('website')) {
    const { website } = req.body;
    organization.update({ website: website });
  }
  if (req.hasOwnProperty('twitter')) {
    const { twitter } = req.body;
    organization.update({ twitter: twitter });
  }
  if (req.hasOwnProperty('facebook')) {
    const { facebook } = req.body;
    organization.update({ facebook: facebook });
  }
  if (req.hasOwnProperty('instagram')) {
    const { instagram } = req.body;
    organization.update({ instagram: instagram });
  }
  if (req.hasOwnProperty('linkedIn')) {
    const { linkedIn } = req.body;
    organization.update({ linkedIn: linkedIn });
  }
  if (req.hasOwnProperty('innovatorTypes')) {
    const { innovatorTypes } = req.body;
    organization.update({ innovatorTypes: innovatorTypes });
  }
  if (req.hasOwnProperty('businessStages')) {
    const { businessStages } = req.body;
    organization.update({ businessStages: businessStages });
  }
  if (req.hasOwnProperty('industryFocus')) {
    const { industryFocus } = req.body;
    organization.update({ industryFocus: industryFocus });
  }
  if (req.hasOwnProperty('programTypes')) {
    const { programTypes } = req.body;
    organization.update({ programTypes: programTypes });
  }
  if (req.hasOwnProperty('focusArea')) {
    const { focusArea } = req.body;
    organization.update({ focusArea: focusArea });
  }
  if (req.hasOwnProperty('profitStatus')) {
    const { profitStatus } = req.body;
    organization.update({ profitStatus: profitStatus });
  }
  if (req.hasOwnProperty('logo')) {
    const { logo } = req.body;
    organization.update({ logo: logo });
  }
  if (req.hasOwnProperty('signatureProgram')) {
    const { signatureProgram } = req.body;
    organization.update({ signatureProgram: signatureProgram });
  }

  return organization
    .save()
    .then(() => res.status(200).json({ success: true }))
    .catch((e) => errorHandler(res, e.message));
});

/* delete individaul organization */
router.delete('/delete/:organizationName', (req, res) => {
  const { organizationName } = req.params;

  return Organization.deleteOne({ organizationName })
    .then((organization) => {
      if (!organization) return errorHandler(res, 'User does not exist.');

      return res.status(200).json({ success: true });
    })
    .catch((err) => errorHandler(res, err.message));
});

/* TESTING ENDPOINTS BELOW (DELETE IN PRODUCTION) */
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
