
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tabs from '@material-ui/core/Tabs';
import TabbedPage from '../../InfoComponent/TabbedPage';

describe('TabbedPage', () => {
  const props = {
    tabs: ['page1', 'page2'],
    info: ['text1', 'text2'],
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TabbedPage {...props} />);
  });

  it('renders as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('sets the tab onChange', () => {
    const tabsComponent = wrapper.find(Tabs);

    tabsComponent.simulate('change', {}, 1);

    expect(wrapper.state().onTab).toBe(1);
  });
});
