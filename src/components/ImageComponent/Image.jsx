import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  src, alt, w, h,
}) => (
  <img src={src} alt={alt} width={w} height={h} />
);

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  w: PropTypes.number,
  h: PropTypes.number,
};

Image.defaultProps = {
  src: '',
  alt: '',
  w: 100,
  h: 100,
};

export default Image;
