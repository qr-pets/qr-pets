import React from 'react';
import axios from 'axios';

const handleClick = async () => {
  const fileChooser = document.getElementById('file-chooser');
  const file = fileChooser.files[0];
  const { name, type } = file;

  console.log(name, type)

  const {data} = await axios.post('/upload', { name, type });
  const asd = await axios.post(data, file)
  console.log(asd)
};

export default () => (
  <>
    <input type="file" id="file-chooser" />
    <button id="upload-button" onClick={handleClick}>Upload to S3</button>
    <div id="results"></div>
  </>
);
