
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import toJson from 'enzyme-to-json';
import QRPets from '../QRPets';

jest.mock('axios');

describe('QRPets', () => {
  let wrapper;
  const props = {
    match: {
      params: {
        qrId: '10',
      },
    },
  };

  axios.get.mockResolvedValue({
    data: {
      imageUrl: 'someUrl',
      petName: 'someName',
    },
  });

  beforeEach(async () => {
    wrapper = shallow(<QRPets {...props} />);
    await wrapper.instance().componentDidMount();
  });

  it('renders as expected', async () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('fetches profile data based on qrId', async () => {
    expect(axios.get).toHaveBeenCalledWith('/profile/10');
    expect(wrapper.state().imageUrl).toBe('someUrl');
    expect(wrapper.state().petName).toBe('someName');
  });
});
