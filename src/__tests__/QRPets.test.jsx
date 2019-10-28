
import React from 'react';
import { shallow } from 'enzyme';
import axios from 'axios';
import toJson from 'enzyme-to-json';
import QRPets from '../QRPets';

jest.mock('axios');

describe('QRPets', () => {
  let wrapper;
  const match = {
    params: {
      qrId: '10',
    },
  };

  axios.get.mockResolvedValue({
    data: {
      s3Url: 'someUrl',
      info: {
        age: '3',
        breed: 'Guinea Pig',
        description: 'testInfo',
        name: 'MooMoo',
      },
    },
  });

  beforeEach(async () => {
    wrapper = shallow(<QRPets match={match} />);
    await wrapper.instance().componentDidMount();
  });

  it('renders as expected', async () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('fetches profile data based on qrId', async () => {
    expect(axios.get).toHaveBeenCalledWith('/profile/10');
    expect(wrapper.state()).toEqual({
      data: {
        s3Url: 'someUrl',
        info: {
          age: '3',
          breed: 'Guinea Pig',
          description: 'testInfo',
          name: 'MooMoo',
        },
      },
    });
  });
});
