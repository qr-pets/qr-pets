const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

require('dotenv').config();

const {
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  AWS_REGION,
  S3_BUCKET,
} = process.env;

const s3 = new AWS.S3({
  accessKeyId: AWS_ACCESS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  region: AWS_REGION,
});

const upload = (req, res) => {
  const { body } = req;
  const { name, type } = body;
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: name,
    Expires: 60,
    ContentType: type,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, { data }) => {
    if (err) {
      res.json({ err });
    }

    res.json(data);
  });
};

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 1000000 }));

app.get('/hello', (req, res) => res.send('hello'));
app.post('/upload', upload);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
