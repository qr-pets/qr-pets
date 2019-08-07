import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Admin from '../Admin';

describe('Admin', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Admin />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
