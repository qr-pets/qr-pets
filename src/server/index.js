require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const profile = require('./profile');
const upload = require('./upload');

const BUILD_PATH = '../../build';
const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 1000000 }));
app.use(express.static(path.join(__dirname, BUILD_PATH)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, BUILD_PATH, 'index.html'));
});

app.use('/profile', profile);
app.post('/upload', upload);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
