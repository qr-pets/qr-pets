import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(event) {
    const { onClick, tabText } = this.props;
    onClick(event, tabText);
  }

  render() {
    const { tabText, selected } = this.props;
    const show = selected ? 'selected' : '';
    return (
      <button className={`tab ${show}`} id={`#${tabText}_tab`} type="button" onClick={this.handleTabClick}>
        {tabText}
      </button>
    );
  }
}

Tab.propTypes = {
  tabText: PropTypes.string,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Tab.defaultProps = {
  tabText: '',
  selected: false,
};

export default Tab;
