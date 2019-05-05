
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tab from '../../InfoComponent/Tab';

describe('Tab', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Tab />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
