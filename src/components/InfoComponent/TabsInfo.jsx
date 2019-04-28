import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InfoTab from './InfoTab';

class TabsInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tabs, info, onTab } = this.props;
    const i = tabs.map((tab, x) => (
      <InfoTab key={`infoText_${tab}`} tabText={tab} infoText={info[x]} onTab={onTab} />
    ));
    return (
      <div className="infoTab">
        {i}
      </div>
    );
  }
}

TabsInfo.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  info: PropTypes.arrayOf(PropTypes.string),
  onTab: PropTypes.string,
};

TabsInfo.defaultProps = {
  info: [],
  onTab: 'info',
};

export default TabsInfo;
