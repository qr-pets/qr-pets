import React from 'react';
import PropTypes from 'prop-types';

const TextLabel = ({ label, value }) => (
  <div>
    {`${label} ${value}`}
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
