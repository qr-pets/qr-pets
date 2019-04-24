import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import TabsInfo from './TabsInfo';

const TabbedPage = ({ tabs, info }) => (
  <div>
    <Tabs tabs={tabs} />
    <TabsInfo info={info} />
  </div>
);

TabbedPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  info: PropTypes.arrayOf(PropTypes.string),
};

TabbedPage.defaultProps = {
  tabs: [],
  info: [],
};

export default TabbedPage;
