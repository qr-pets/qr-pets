import React from 'react';
import PropTypes from 'prop-types';
import InfoTab from './InfoTab';

const TabsInfo = ({ info }) => {
  const i = info.map(inf => (
    <InfoTab infoText={inf} />
  ));
  return (
    <div className="infoTab">
      {i}
    </div>
  );
};

TabsInfo.propTypes = {
  info: PropTypes.arrayOf(PropTypes.string),
};

TabsInfo.defaultProps = {
  info: [],
};

export default TabsInfo;