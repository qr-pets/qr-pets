import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

const Thumbnail = ({
  petName, petId, w, h,
}) => (
  <Image src={`https://s3.us-east-2.amazonaws.com/qr-pets-images/${petName}_${petId}.JPG`} alt={petName} width={w} height={h} />
);

Thumbnail.propTypes = {
  petName: PropTypes.string,
  petId: PropTypes.number.isRequired,
  w: PropTypes.number,
  h: PropTypes.number,
};

Thumbnail.defaultProps = {
  petName: '',
  w: 150,
  h: 150,
};

export default Thumbnail;
