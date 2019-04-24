import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const Thumbnail = ({
  src, alt, w, h,
}) => (
  <Image src={src} alt={alt} width={w} height={h} />
);

Thumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
};

Thumbnail.defaultProps = {
  src: '',
  alt: '',
  w: '100',
  h: '100',
};

export default Thumbnail;
