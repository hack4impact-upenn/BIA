const AWS = require('aws-sdk');
const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_BUCKET_NAME,
} = process.env;

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECTRET_ACCESS_KEY,
});

const awsUpload = (key: string, body: Buffer, type: string, mime: string) => {
  AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  });
  const s3Bucket = new AWS.S3({
    params: { Bucket: process.env.AWS_BUCKET_NAME },
  });
  const params = {
    Key: key,
    Body: body,
    ACL: 'public-read',
    ContentEncoding: 'base64',
    ContentType: `${type}\${mime}`,
  };
  s3Bucket.putObject(params, function (err: any, data: any) {
    if (err) {
      console.log(err);
      console.log('Error uploading data: ', data);
    } else {
      console.log('successfully uploaded the image!');
    }
  });
};

const awsGet = async (key: string) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };

  var docs = await s3.getObject(params, (err: any, data: any) => {
    if (err) {
      return { success: false, data: err };
    }
    //console.log(data)
    return data;
  });
  //console.log(docs)
  //return docs
};

module.exports = { awsUpload, awsGet };
