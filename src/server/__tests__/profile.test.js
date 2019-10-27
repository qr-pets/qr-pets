import { petinfo } from '../profile';

jest.mock('../AWS/dynamoDb', () => ({
  get: jest.fn((params, callbackSpy) => {
    if (params.Key.qrId === 123) {
      return callbackSpy(null, { Item: { name: 'moomoo' } });
    }

    return callbackSpy('error');
  }),
}));
describe('profile route', () => {
  const req = {
    params: {
      qrId: '123',
    },
  };
  const res = {
    send: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('petinfo returns item by petId', () => {
    petinfo(req, res);

    expect(res.send).toHaveBeenCalledWith({
      name: 'moomoo',
    });
  });
  it('petinfo returns an error', () => {
    const badParams = {
      params: {
      },
    };
    petinfo(badParams, res);

    expect(res.send).not.toHaveBeenCalledWith({
      name: 'moomoo',
    });
  });
});
