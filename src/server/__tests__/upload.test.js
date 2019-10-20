import upload from '../upload';
import s3 from '../AWS/s3';

jest.mock('../AWS/s3', () => ({
  getSignedUrl: jest.fn((operation, params, callbackSpy) => {
    if (params.Bucket === 'testBucket') {
      return callbackSpy(null, 'sup');
    }

    return callbackSpy('error');
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
  const req = {
    body: {
      name: 'myPic',
      type: 'image/jpeg',
    },
  };
  const res = {
    json: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('upload returns signed url', () => {
    process.env.S3_BUCKET = 'testBucket';

    upload(req, res);

    expect(res.json).toHaveBeenCalledWith('sup');
    expect(s3.getSignedUrl).toHaveBeenCalledWith('putObject', expectedS3Params, expect.any(Function));
  });
  it('upload returns an error', () => {
    process.env.S3_BUCKET = 'wrongBucket';
    const s3ParamsWithWrongBucket = { ...expectedS3Params, Bucket: 'wrongBucket' };

    upload(req, res);

    expect(res.json).toHaveBeenCalledWith({ error: 'error' });
    expect(s3.getSignedUrl).toHaveBeenCalledWith('putObject', s3ParamsWithWrongBucket, expect.any(Function));
  });
});
