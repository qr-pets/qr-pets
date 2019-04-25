import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTab: 'info',
    };
  }

  render() {
    const { tabText, onTab } = this.props;
    const show = tabText === onTab ? 'selected' : '';
    return (
      <button className={`tab ${show}`} id={`#${tabText}_tab`} type="button">
        {tabText}
      </button>
    );
  }
}

Tab.propTypes = {
  tabText: PropTypes.string,
  onTab: PropTypes.string,
};

Tab.defaultProps = {
  tabText: '',
  onTab: 'info',
};

export default Tab;
