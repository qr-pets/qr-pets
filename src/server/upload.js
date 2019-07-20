const s3 = require('./s3');

const upload = (req, res) => {
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

module.exports = upload;
