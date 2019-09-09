const express = require('express');
const ddb = require('./dynamodb');

const profile = express();
const petinfo = (req, res) => {
  const getPetParams = { Key: { petId: { N: req.params.qrId } }, TableName: 'qr-pets' };
  ddb.getItem(getPetParams, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      res.send({
        info: data.Item.info,
        name: data.Item.name,
        qrId: data.Item.qrId,
        s3Url: data.Item.s3Url,
        petId: data.Item.petId,
      });
    }
  });
};
// const fetchPetProfile = (req, res) => {console.log('here')};
profile.get('/:qrId', petinfo);

module.exports = {
  petinfo,
  profile,
};
