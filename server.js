const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res) => res.send('hello'));
app.post('/upload', (req, res) => {
  res.send('Finished Uploading');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
