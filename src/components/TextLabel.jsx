import React from 'react';
import PropTypes from 'prop-types';

const TextLabel = ({ label, value }) => (
  <div>
    {`${label} ${value}`}
  </div>
);

TextLabel.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextLabel.defaultProps = {
  label: '',
  value: '',
};

export default TextLabel;
