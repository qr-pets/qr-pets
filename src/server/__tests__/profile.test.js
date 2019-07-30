import { fetchPetProfile } from '../profile';

describe('profile route', () => {
  const req = {};
  const res = {
    send: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('fetchPetProfile returns hardcoded image and petname', () => {
    fetchPetProfile(req, res);

    expect(res.send).toHaveBeenCalledWith({
      imageUrl: 'https://s3.us-east-2.amazonaws.com/qr-pets-images/moomoo_1.JPG',
      petName: 'moomoo',
    });
  });
});
