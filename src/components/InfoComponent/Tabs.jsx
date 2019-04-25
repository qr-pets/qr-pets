import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTab: 'info',
    };
  }

  render() {
    const { tabs, onTab } = this.props;
    const t = tabs.map(tab => (
      <Tab tabText={tab} onTab={onTab} />
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
};

Tabs.defaultProps = {
  tabs: [],
  onTab: 'info',
};

export default Tabs;
