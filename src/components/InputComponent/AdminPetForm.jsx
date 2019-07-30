import Button from '@material-ui/core/Button';
import axios from 'axios';
import React from 'react';
import Input from '@material-ui/core/Input';

class AdminPetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      tagList: [],
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleTagsUpdate = this.handleTagsUpdate.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  handleFileSelect(files) {
    this.setState({
      fileList: files,
    });
  }

  handleTagsUpdate(tagsString) {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    this.setState({
      tagList: tags,
    });
  }

  async saveForm() {
    const { tagList, fileList } = this.state;
    const file = fileList[0];
    const { name, type } = file;
    const tags = tagList.map(tag => `${tag}&`).join('').slice(0, -1); // values as tag keys with no value
    const signedUrl = await axios.post('/upload', { name, type });

    await axios.put(signedUrl.data, file, { headers: { 'x-amz-tagging': tags } });
  }

  render() {
    const { fileList } = this.state;
    const btnDisable = fileList.length === 0;
    return (
      <div>
        <Input
          onChange={this.handleFileSelect}
          type="file"
          id="file-chooser"
          disableUnderline
        />
        <Input
          onChange={this.handleChange}
          type="text"
          onBlur={this.handleUpdate}
          placeholder="comma separated tags"
          id="tag-input"
        />
        <Button
          color="primary"
          disabled={btnDisable}
          onClick={this.saveForm}
          variant="contained"
        >
          {'Save Form'}
        </Button>
      </div>
    );
  }
}

export default AdminPetForm;
