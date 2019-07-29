const express = require('express');

const router = express();

router.get('/:qrId', (req, res) => {
  res.send({
    imageUrl: 'https://s3.us-east-2.amazonaws.com/qr-pets-images/moomoo_1.JPG',
    petName: 'moomoo',
  });
});


module.exports = router;
