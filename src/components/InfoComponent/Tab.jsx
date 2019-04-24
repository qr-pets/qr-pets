import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tabText }) => (
  <button className="tab" type="button">
    {tabText}
  </button>
);

Tab.propTypes = {
  tabText: PropTypes.string,
};

Tab.defaultProps = {
  tabText: '',
};

export default Tab;
