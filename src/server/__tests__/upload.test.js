import { getSignedUrl, savePetInfo } from '../upload';
import s3 from '../AWS/s3';

jest.mock('../AWS/s3', () => ({
  getSignedUrl: jest.fn((operation, params, callbackSpy) => {
    if (params.Bucket === 'testBucket') {
      return callbackSpy(null, 'sup');
    }

    return callbackSpy('error');
  }),
}));

jest.mock('../AWS/dynamoDb', () => ({
  put: () => ({
    promise: () => Promise.resolve({ status: 200 }),
  }),
}));

const expectedS3Params = {
  Bucket: 'testBucket',
  Key: 'myPic',
  Expires: 60,
  ContentType: 'image/jpeg',
  ACL: 'public-read',
  Tagging: '',
};

describe('upload route', () => {
  const res = {
    json: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getSignedUrl', () => {
    const req = {
      body: {
        id: 'myPic',
        type: 'image/jpeg',
      },
    };
    it('getSignedUrl returns signed url', () => {
      process.env.S3_BUCKET = 'testBucket';

      getSignedUrl(req, res);

      expect(res.json).toHaveBeenCalledWith('sup');
      expect(s3.getSignedUrl).toHaveBeenCalledWith('putObject', expectedS3Params, expect.any(Function));
    });
    it('getSignedUrl returns an error', () => {
      process.env.S3_BUCKET = 'wrongBucket';
      const s3ParamsWithWrongBucket = { ...expectedS3Params, Bucket: 'wrongBucket' };

      getSignedUrl(req, res);

      expect(res.json).toHaveBeenCalledWith({ error: 'error' });
      expect(s3.getSignedUrl).toHaveBeenCalledWith('putObject', s3ParamsWithWrongBucket, expect.any(Function));
    });
  });
  describe('savePetInfo', () => {
    const req = {
      body: {
        id: 'myPic',
      },
    };

    it('saves info to db successfully', async () => {
      await savePetInfo(req, res);

      expect(res.json).toHaveBeenCalledWith({ status: 200 });
    });
    it('saves info to db eror', async () => {
      await savePetInfo(req, res);

      expect(res.json).toHaveBeenCalledWith({ status: 200 });
    });
  });
});
