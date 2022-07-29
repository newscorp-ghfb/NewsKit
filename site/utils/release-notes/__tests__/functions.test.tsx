import {addChangeLevelToReleases, fetchGitHubReleases} from '../functions';
import Mock = jest.Mock;
import {Release} from '../types';

const MOCK_DATA = [{id: ''}];

describe('fetchGitHubReleases', () => {
  let fetchMock: Mock;

  beforeEach(() => {
    fetchMock = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_DATA),
    });
    (global as any).fetch = fetchMock;
  });

  it('should fetch release data from GitHub', async () => {
    const data = await fetchGitHubReleases(13);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.github.com/repos/newscorp-ghfb/newskit/releases?per_page=13',
    );
    expect(data).toEqual(MOCK_DATA);
  });

  afterAll(() => {
    (global as any).fetch.mockClear();
    delete (global as any).fetch;
  });
});

describe('addChangeLevelToReleases', () => {
  it('should return n-1 releases in order with change_level added', () => {
    const releases = [
      {tag_name: 'v1.0.1'},
      {tag_name: 'v1.0.0'},
      {tag_name: 'v2.0.0'},
      {tag_name: 'v1.1.0'},
    ] as Release[];
    expect(addChangeLevelToReleases(releases)).toEqual([
      {tag_name: 'v2.0.0', change_level: 'major'},
      {tag_name: 'v1.1.0', change_level: 'minor'},
      {tag_name: 'v1.0.1', change_level: 'patch'},
    ]);
  });
});
