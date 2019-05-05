import React from 'react';
import PropTypes from 'prop-types';

const InfoTab = ({ tabText, infoText, onTab }) => {
  const show = tabText === onTab ? '' : 'hidden';
  return (
    <div className={`tabInfo ${show}`} id={`#${tabText}_tab_text`}>
      {infoText}
    </div>
  );
};

InfoTab.propTypes = {
  tabText: PropTypes.string.isRequired,
  infoText: PropTypes.string,
  onTab: PropTypes.string,
};

InfoTab.defaultProps = {
  infoText: '',
  onTab: 'info',
};

export default InfoTab;
