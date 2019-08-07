const express = require('express');

const profile = express();
const fetchPetProfile = (req, res) => res.send({
  imageUrl: 'https://s3.us-east-2.amazonaws.com/qr-pets-images/moomoo_1.JPG',
  petName: 'moomoo',
});

profile.get('/:qrId', fetchPetProfile);

module.exports = {
  fetchPetProfile,
  profile,
};
