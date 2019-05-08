import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class Upload extends React.Component {
  constructor() {
    super();

    this.state = {
      fileList: [],
    };
    this.uploadPicture = this.uploadPicture.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      fileList: target.files,
    });
  }

  async uploadPicture() {
    const { fileList } = this.state;
    const file = fileList[0];
    const { name, type } = file;
    const signedUrl = await axios.post('/upload', { name, type });
    await axios.put(signedUrl, file);
  }

  render() {
    const { fileList } = this.state;
    const containsNoFile = fileList.length === 0;

    return (
      <div className="upload">
        <Input
          onChange={this.handleChange}
          type="file"
          id="file-chooser"
          disableUnderline
        />
        <Button
          color="primary"
          disabled={containsNoFile}
          onClick={this.uploadPicture}
          variant="contained"
        >
          {'Upload Picture'}
        </Button>
      </div>
    );
  }
}

export default Upload;
