import upload from '../upload';
import s3 from '../s3';

jest.mock('../s3', () => ({
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
  it('upload returns signed url', () => {
    process.env.S3_BUCKET = 'testBucket';

    const req = {
      body: {
        name: 'myPic',
        type: 'image/jpeg',
      },
    };
    const res = {
      json: jest.fn(),
    };

    upload(req, res);

    expect(res.json).toHaveBeenCalledWith('sup');
    expect(s3.getSignedUrl).toHaveBeenCalledWith('putObject', expectedS3Params, expect.any(Function));
  });
});
