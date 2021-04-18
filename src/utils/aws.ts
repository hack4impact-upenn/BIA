const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECTRET_ACCESS_KEY,
});

const awsUpload = (key: string, body: Buffer) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
    Body: body,
  };
  console.log('*****\n');
  console.log(params);
  console.log('*****\n');
  s3.upload(params, (err: any, data: any) => {
    if (err) {
      return { success: false, data: err };
    }
    return { success: true, data: data };
  });
};

const awsGet = (key: string) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };
  s3.getObject(params, (err: any, data: any) => {
    if (err) {
      return { success: false, data: err };
    }
    return { success: true, data: data };
  });
};

module.exports = { awsUpload, awsGet };