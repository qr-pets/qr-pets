const express = require('express');
const ddb = require('./dynamodb');

const profile = express();
const petinfo = (req, res) => {
  const getPetParams = { Key: { petId: parseInt(req.params.qrId, 10) }, TableName: 'qr-pets' };
  ddb.get(getPetParams, (err, data) => {
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
