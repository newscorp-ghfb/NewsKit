const https = require('https');
const fs = require('fs');
const Stream = require('stream');

const {run} = require('../check-baseline-updates');

const BUILDS = {
  data: [
    {
      attributes: {
        branch: 'branch/approved-with-diffs',
        'review-state': 'approved',
        'total-comparisons-diff': '3',
      },
      relationships: {
        snapshots: {
          links: {
            related: 'branch/approved-with-diffs-related',
          },
        },
      },
    },
    {
      attributes: {
        branch: 'branch/approved-no-diffs',
        'review-state': 'approved',
        'total-comparisons-diff': 0,
      },
    },
    {
      attributes: {
        branch: 'branch/diffs-not-approved',
        'review-state': 'pending',
        'total-comparisons-diff': 0,
      },
    },
  ],
};

const SNAPSHOTS = {
  data: [
    {
      attributes: {
        'review-state-reason': 'user_approved',
        name: 'snapshot1',
      },
    },
    {
      attributes: {
        'review-state-reason': 'user_approved',
        name: 'snapshot2',
      },
    },
  ],
};

const mockHttp = (url, options, callback) => {
  const streamStream = new Stream();
  callback(streamStream);
  const data = url.includes('/api/v1/builds') ? BUILDS : SNAPSHOTS;
  streamStream.emit('data', JSON.stringify(data));
  streamStream.emit('end');
};

describe('check-baseline-updates', () => {
  beforeEach(() => {
    process.env.PERCY_TOKEN = '__PERCY_TOKEN__';
    https.get = jest.fn().mockImplementation(mockHttp);
  });

  it('should update config file and return true if updates required', async () => {
    fs.writeFileSync = jest.fn();
    const result = await run('branch/approved-with-diffs');
    expect(fs.writeFileSync).toHaveBeenCalledWith(
      './percy-storybook.config.json',
      JSON.stringify({include: ['^snapshot1$', '^snapshot2$']}),
    );
    expect(result).toBe(true);
  });

  it('should return false if no diffs require updates', async () => {
    const result = await run('branch/approved-no-diffs');
    expect(result).toBe(false);
  });

  it('should return false if build not approved', async () => {
    const result = await run('branch/diffs-not-approved');
    expect(result).toBe(false);
  });

  it('should raise an exception if no token found', async () => {
    delete process.env.PERCY_TOKEN;
    await expect(run('branch/approved-no-diffs')).rejects.toThrowError();
  });

  it('should raise an exception if build not found', async () => {
    await expect(run('invalid-branch')).rejects.toThrowError();
  });
});
