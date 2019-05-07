import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Input from '@material-ui/core/Input';
import Upload from '../Upload';
import axios from 'axios';

jest.mock('axios');

describe('Upload', () => {
  const firstPicture = { name: 'frodo', type: 'html/jpeg' };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Upload />);
  });

  it('renders as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('stores file from input in state', () => {
    const InputComponent = wrapper.find(Input);
    const event = {
      target: {
        files: [firstPicture],
      },
    };

    InputComponent.simulate('change', event);

    expect(wrapper.state().fileList).toEqual([firstPicture]);
  });
});
