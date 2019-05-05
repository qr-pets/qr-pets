import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import TabsInfo from './TabsInfo';

class TabbedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTab: '',
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  componentDidMount() {
    const { onTab } = this.props;
    this.setState({ onTab });
  }

  handleTabClick(event, selectedTab) {
    this.setState({ onTab: selectedTab });
  }

  render() {
    const { tabs, info } = this.props;
    const { onTab } = this.state;
    return (
      <div className="tabbedContainer">
        <Tabs tabs={tabs} onTab={onTab} onClick={this.handleTabClick} />
        <TabsInfo tabs={tabs} onTab={onTab} info={info} />
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
