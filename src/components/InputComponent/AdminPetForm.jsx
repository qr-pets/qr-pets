import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Upload from '../Upload';
import AdminTextInput from './AdminTextInput';

class AdminPetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasChanged: false,
      fileList: [],
      tagList: [],
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleTagsUpdate = this.handleTagsUpdate.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  handleFileSelect(files) {
    this.setState({
      fileList: files,
      hasChanged: true,
    });
  }

  handleTagsUpdate(tagsString) {
    const tags = tagsString.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
    this.setState({
      tagList: tags,
      hasChanged: true,
    });
  }

  handleTextChange(changed) {
    this.setState({
      hasChanged: changed,
    });
  }

  async saveForm() {
    const { tagList, fileList } = this.state;
    const file = fileList[0];
    const { name, type } = file;
    const tags = tagList.map(tag => `${tag}&`).join(''); // values as tag keys with no value
    const signedUrl = await axios.post('/upload', { name, type });

    await axios.put(signedUrl.data, file, { headers: { 'x-amz-tagging': tags } });
  }

  render() {
    const { hasChanged } = this.state;
    return (
      <div>
        <Upload handleFileSelect={this.handleFileSelect} />
        <AdminTextInput handleUpdate={this.handleTagsUpdate} handleChange={this.handleTextChange} />
        <Button
          color="primary"
          disabled={!hasChanged}
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
