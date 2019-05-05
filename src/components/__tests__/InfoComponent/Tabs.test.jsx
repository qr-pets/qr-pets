
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Tabs from '../../InfoComponent/Tabs';

describe('Tabs', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Tabs />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
