import React from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

class Upload extends React.Component {
  constructor() {
    super();
    this.handleFileSelect = this.handleFileSelect.bind(this);
  }

  handleFileSelect({ target }) {
    const { handleFileSelect } = this.props;
    handleFileSelect(target.files);
  }

  render() {
    return (
      <div className="upload">
        <Input
          onChange={this.handleFileSelect}
          type="file"
          id="file-chooser"
          disableUnderline
        />
      </div>
    );
  }
}

Upload.propTypes = {
  handleFileSelect: PropTypes.func.isRequired,
};

export default Upload;
