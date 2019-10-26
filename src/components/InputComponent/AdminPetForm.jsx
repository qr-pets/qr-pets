import Button from '@material-ui/core/Button';
import axios from 'axios';
import React from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

class AdminPetForm extends React.Component {
  constructor(props) {
    super(props);

    const { tags } = this.props;

    this.state = {
      fileList: [],
      tagsString: tags,
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  handleFileSelect({ target: { files } }) {
    this.setState({
      fileList: files,
    });
  }

  handleTextChange({ target: { value } }) {
    this.setState({
      tagsString: value,
    });
  }

  async saveForm() {
    const { tagsString, fileList } = this.state;
    const file = fileList[0];
    const { name, type } = file;
    const petId = `${new Date().toISOString()}-${name}`;
    const tagsArray = tagsString.split(',').map((tag) => tag.trim()).filter((tag) => tag !== '');
    const tags = tagsArray.map((tag) => `${tag}&`).join('').slice(0, -1); // values as tag keys with no value

    try {
      const { data } = await axios.post('/upload', { name: petId, type });
      await axios.put(data, file, { headers: { 'x-amz-tagging': tags } });
      await axios.put('/upload', { name, petId });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { fileList, tagsString } = this.state;

    return (
      <div>
        <Input
          onChange={this.handleFileSelect}
          type="file"
          id="file-chooser"
          disableUnderline
        />
        <Input
          onChange={this.handleTextChange}
          type="text"
          placeholder="comma separated tags"
          id="tag-input"
          value={tagsString}
        />
        <Button
          color="primary"
          disabled={(fileList.length === 0)}
          onClick={this.saveForm}
          variant="contained"
        >
          {'Save Form'}
        </Button>
      </div>
    );
  }
}

AdminPetForm.propTypes = {
  tags: PropTypes.string,
};

AdminPetForm.defaultProps = {
  tags: '',
};

export default AdminPetForm;
