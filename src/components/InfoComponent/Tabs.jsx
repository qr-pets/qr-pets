import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = ({ tabs }) => {
  const t = tabs.map(tab => (
    <Tab tabText={tab} />
  ));
  return (
    <div className="tabs">
      {t}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
};

Tabs.defaultProps = {
  tabs: [],
};

export default Tabs;
