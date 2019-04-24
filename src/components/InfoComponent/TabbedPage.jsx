import React from 'react';
import PropTypes from 'prop-types';
import TextLabel from './TextLabel';

const TabbedPage = ({ tabs, info }) => {
  const t = tabs.map((tab, i) => (
    <TextLabel label={tab} value={info[i]} />
  ));
  return (
    <div>
      {t}
    </div>
  );
};

TabbedPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  info: PropTypes.arrayOf(PropTypes.string),
};

TabbedPage.defaultProps = {
  tabs: [],
  info: [],
};

export default TabbedPage;
