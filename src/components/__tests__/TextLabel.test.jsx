
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TextLabel from '../TextLabel';

describe('TextLabel', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<TextLabel />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
