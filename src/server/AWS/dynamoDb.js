const AWS = require('aws-sdk');

const {
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_REGION,
} = process.env;

const documentClient = new AWS.DynamoDB.DocumentClient({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: AWS_REGION,
});

module.exports = documentClient;
