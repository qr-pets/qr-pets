
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PageNotFound from '../PageNotFound';

describe('PageNotFound', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<PageNotFound />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
