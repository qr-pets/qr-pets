require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const upload = require('./upload');

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false, parameterLimit: 1000000 }));

app.get('/hello', (req, res) => res.send('hello'));
app.post('/upload', upload);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
