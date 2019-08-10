
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tabs from '@material-ui/core/Tabs';
import TabbedPage from '../../InfoComponent/TabbedPage';

describe('TabbedPage', () => {
  const tabs = ['page1', 'page2'];
  const info = ['text1', 'text2'];
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TabbedPage info={info} tabs={tabs} />);
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
