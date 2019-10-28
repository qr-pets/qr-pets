const express = require('express');
const documentClient = require('./AWS/dynamoDb');

const profile = express();
const petinfo = (req, res) => {
  const getPetParams = {
    KeyConditionExpression: 'qrId = :qrId',
    TableName: 'qr-pets',
    IndexName: 'qrId-index',
    ExpressionAttributeValues: {
      ':qrId': parseInt(req.params.qrId, 10),
    },
  };

  documentClient.query(getPetParams, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data.Items[0]);
    }
  });
};
profile.get('/:qrId', petinfo);

module.exports = {
  petinfo,
  profile,
};
