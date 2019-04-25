import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import TabsInfo from './TabsInfo';

class TabbedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTab: 'info',
    };
  }

  render() {
    const { tabs, info, onTab } = this.props;
    return (
      <div>
        <Tabs tabs={tabs} onTab={onTab} />
        <TabsInfo tabs={tabs} info={info} onTab={onTab} />
      </div>
    );
  }
}

TabbedPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  info: PropTypes.arrayOf(PropTypes.string),
  onTab: PropTypes.string,
};

TabbedPage.defaultProps = {
  tabs: [],
  info: [],
  onTab: 'info',
};

export default TabbedPage;
