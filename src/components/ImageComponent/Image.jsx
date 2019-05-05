import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  imageClassName, src, alt, w, h,
}) => (
  <img className={imageClassName} src={src} alt={alt} width={w} height={h} />
);

Image.propTypes = {
  imageClassName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
};

Image.defaultProps = {
  imageClassName: '',
  src: '',
  alt: '',
  w: '100',
  h: '100',
};

export default Image;
