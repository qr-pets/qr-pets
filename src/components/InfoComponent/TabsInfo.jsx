import React from 'react';
import PropTypes from 'prop-types';
import InfoTab from './InfoTab';

const TabsInfo = ({ tabs, info, onTab }) => {
  const t = tabs.map((tab, x) => (
    <InfoTab key={`infoText_${tab}`} tabText={tab} infoText={info[x]} onTab={onTab} />
  ));
  return (
    <div className="infoTab">
      {t}
    </div>
  );
};

TabsInfo.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  info: PropTypes.arrayOf(PropTypes.string),
  onTab: PropTypes.string,
};

TabsInfo.defaultProps = {
  info: [],
  onTab: 'info',
};

export default TabsInfo;
