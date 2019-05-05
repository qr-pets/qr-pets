
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TabbedPage from '../../InfoComponent/TabbedPage';

describe('TabbedPage', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<TabbedPage />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
