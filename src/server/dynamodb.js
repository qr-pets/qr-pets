const AWS = require('aws-sdk');

const {
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_REGION,
} = process.env;

const ddb = new AWS.DynamoDB({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: AWS_REGION,
});

module.exports = ddb;
