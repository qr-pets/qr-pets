import React from 'react';
import PropTypes from 'prop-types';

const TextLabel = ({ label, value }) => (
  <div>
    {label}
    :&nbsp;
    {value}
  </div>
);

TextLabel.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
};

TextLabel.defaultProps = {
  label: '',
  value: '',
};

export default TextLabel;
