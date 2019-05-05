
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import TabsInfo from '../../InfoComponent/TabsInfo';

describe('TabsInfo', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<TabsInfo tabs={['test1', 'test2', 'test3']} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
