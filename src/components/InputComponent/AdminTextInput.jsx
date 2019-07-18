import React from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';

class AdminTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleUpdate({ target }) {
    const { handleUpdate } = this.props;
    handleUpdate(target.value);
  }

  handleChange({ type, target }) {
    const { handleChange } = this.props;
    const changed = (type === 'change') && (target.value !== '');
    handleChange(changed);
  }

  render() {
    return (
      <Input
        onChange={this.handleChange}
        type="text"
        onBlur={this.handleUpdate}
        placeholder="comma separated tags"
        id="tag-input"
      />
    );
  }
}

AdminTextInput.propTypes = {
  handleUpdate: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default AdminTextInput;
