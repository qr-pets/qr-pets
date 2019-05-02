
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import InfoTab from '../../InfoComponent/InfoTab';

describe('InfoTab', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<InfoTab tabText="test" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
