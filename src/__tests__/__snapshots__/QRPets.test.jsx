
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import QRPets from '../../QRPets';

describe('QRPets', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<QRPets />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
