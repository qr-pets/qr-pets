
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import QRPets from '../QRPets';

describe('QRPets', () => {
  it('renders as expected', () => {
    const QRPetser = shallow(<QRPets />);

    expect(toJson(QRPetser)).toMatchSnapshot();
  });
});
