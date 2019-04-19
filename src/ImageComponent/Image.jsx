import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt }) => (
  <img src={require(`${src}`)} alt={alt} />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  src: '',
  alt: '',
};

export default Image;
