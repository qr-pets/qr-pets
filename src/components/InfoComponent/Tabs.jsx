import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event, selectedTab) {
    const { onClick } = this.props;
    onClick(event, selectedTab);
  }

  render() {
    const { tabs, onTab } = this.props;
    const t = tabs.map(tab => (
      <Tab key={`tab_${tab}`} selected={tab === onTab} tabText={tab} onClick={this.handleTabClick} />
    ));
    return (
      <div className="tabs">
        {t}
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  onTab: PropTypes.string,
  onClick: PropTypes.func,
};

Tabs.defaultProps = {
  tabs: [],
  onTab: 'info',
  onClick: undefined,
};

export default Tabs;
