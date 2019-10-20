const express = require('express');
const documentClient = require('./AWS/dynamoDb');

const profile = express();
const petinfo = (req, res) => {
  const getPetParams = { Key: { petId: parseInt(req.params.qrId, 10) }, TableName: 'qr-pets' };

  documentClient.get(getPetParams, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data.Item);
    }
  });
};
profile.get('/:qrId', petinfo);

module.exports = {
  petinfo,
  profile,
};
