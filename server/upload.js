const { S3_BUCKET } = process.env;
const s3 = require('./s3');

const upload = (req, res) => {
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

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      res.json({ err });
    }
    res.json(data);
  });
};

module.exports = upload;
