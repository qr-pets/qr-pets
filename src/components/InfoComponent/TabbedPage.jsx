import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class TabbedPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onTab: 0,
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(_, tabIndex) {
    this.setState({ onTab: tabIndex });
  }

  renderInfoText() {
    const { info } = this.props;
    const { onTab } = this.state;

    return (<p>{info[onTab]}</p>);
  }

  render() {
    const { tabs } = this.props;
    const { onTab } = this.state;
    return (
      <div className="tabbedContainer">
        <Tabs value={onTab} onChange={this.handleTabClick}>
          {tabs.map(tab => <Tab key={tab} label={tab} />)}
        </Tabs>
        {this.renderInfoText()}
      </div>
    );
  }
}

TabbedPage.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  info: PropTypes.arrayOf(PropTypes.string),
};

TabbedPage.defaultProps = {
  tabs: [],
  info: [],
};

export default TabbedPage;
