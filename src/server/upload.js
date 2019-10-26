const express = require('express');
const s3 = require('./AWS/s3');
const documentClient = require('./AWS/dynamoDb');

const upload = express();
const getSignedUrl = (req, res) => {
  const { S3_BUCKET } = process.env;
  const { body } = req;
  const { name, type } = body;
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: name,
    Expires: 60,
    ContentType: type,
    ACL: 'public-read',
    Tagging: '',
  };

  s3.getSignedUrl('putObject', s3Params, (error, data) => {
    if (error) {
      res.json({ error });
    }
    res.json(data);
  });
};

const savePetInfo = async (req, res) => {
  const { name } = req.body;
  const response = await documentClient.put({
    TableName: 'qr-pets',
    Item: {
      info: {
        age: 2,
        breed: 'cat',
        info: 'sup',
      },
      name,
      petId: 3,
    },
  }).promise();

  res.json(response);
};

upload.post('/', getSignedUrl);
upload.put('/', savePetInfo);

module.exports = {
  upload,
  getSignedUrl,
};
