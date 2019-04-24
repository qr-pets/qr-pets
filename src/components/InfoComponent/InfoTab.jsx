import React from 'react';
import PropTypes from 'prop-types';

const InfoTab = ({ infoText }) => (
  <div className="tabInfo">
    {infoText}
  </div>
);

InfoTab.propTypes = {
  infoText: PropTypes.string,
};

InfoTab.defaultProps = {
  infoText: '',
};

export default InfoTab;
