
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ImageComponent from '../../ImageComponent/Image';

describe('ImageComponent', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<ImageComponent />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
