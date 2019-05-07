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
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      fileList: target.files,
    });
  }

  async handleClick() {
    const { fileList } = this.state;
    const file = fileList[0];
    const { name, type } = file;
    const { data } = await axios.post('/upload', { name, type });
    const uploadResponse = await axios.put(data, file);
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
          onClick={this.handleClick}
          variant="contained"
        >
          {'Upload Picture'}
        </Button>
      </div>
    );
  }
}

export default Upload;
