import {
  addChangeLevelToReleases,
  fetchGitHubReleases,
  formatGitHubMarkDown,
  updateFinalReleaseInfo,
} from '../functions';
import {Release} from '../types';
import Mock = jest.Mock;

const MOCK_DATA = [{id: ''}];

describe('fetchGitHubReleases', () => {
  let fetchMock: Mock;
  const {env} = process;

  beforeEach(() => {
    fetchMock = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(MOCK_DATA),
    });
    (global as any).fetch = fetchMock;

    jest.resetModules();
    process.env = {...env, GITHUB_TOKEN: 'mock'};
  });

  afterEach(() => {
    process.env = env;
  });

  it('should fetch release data from GitHub', async () => {
    const data = await fetchGitHubReleases(13);
    expect(
      fetchMock,
    ).toHaveBeenCalledWith(
      'https://api.github.com/repos/newscorp-ghfb/newskit/releases?per_page=13',
      {headers: {Authorization: 'Bearer mock'}},
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

const COMMENT =
  '<!-- Release notes generated using configuration in .github/release.yml at main -->';
const PROFILE = '@mstuartf';
const PR_LINK = 'https://github.com/newscorp-ghfb/newskit/pull/239';
const COMPARE_LINK =
  'https://github.com/newscorp-ghfb/newskit/compare/v5.6.0...v5.7.0';
const TICKET_ID = 'PPDSC-2121';

const BODY = `${COMMENT}\r\n\r\n## What's Changed\r\n### New Features 🎉\r\n* feat(PPDSC-2151): Add Outline Style Presets by @tbradbury in https://github.com/newscorp-ghfb/newskit/pull/214\r\n* feat(${TICKET_ID}): \`<Popover/>\` header close by ${PROFILE} in ${PR_LINK}\r\n### Bug Fixes 🐛\r\n* fix(PPDSC-2164): assistive text by @mstuartf in https://github.com/newscorp-ghfb/newskit/pull/249\r\n### Other Changes 🧱\r\n* ci(PPDSC-2292): attempt fix of develoment env by @jps in https://github.com/newscorp-ghfb/newskit/pull/285\r\n\r\n## New Contributors\r\n* @agagotowiec made their first contribution in https://github.com/newscorp-ghfb/newskit/pull/238\r\n\r\n**Full Changelog**: ${COMPARE_LINK}`;

describe('formatGitHubMarkDown', () => {
  it('should remove comment', () => {
    const result = formatGitHubMarkDown(BODY);
    expect(result).not.toContain(COMMENT);
  });
  it("should remove what's changed header", () => {
    const result = formatGitHubMarkDown(BODY);
    expect(result).not.toContain("## What's Changed");
  });
  it('should resize new contributors header', () => {
    const result = formatGitHubMarkDown(BODY);
    expect(result).toContain('### New Contributors');
  });
  it('should add PR links', () => {
    const result = formatGitHubMarkDown(BODY);
    expect(result).toContain(
      `[#${PR_LINK.split('/').slice(-1)[0]}](${PR_LINK})`,
    );
  });
  it('should add ticket links', () => {
    const result = formatGitHubMarkDown(BODY);
    expect(result).toContain(
      `[${TICKET_ID}](https://nidigitalsolutions.jira.com/browse/${TICKET_ID})`,
    );
  });
  it('should add GitHub profile links', () => {
    const result = formatGitHubMarkDown(BODY);
    expect(result).toContain(
      `[${PROFILE}](https://github.com/${PROFILE.replace('@', '')})`,
    );
  });
  it('should not update package names inside backticks', () => {
    const result = formatGitHubMarkDown(
      '`npm install newskit@6.0.0 @emotion/react`',
    );
    expect(result).toEqual('`npm install newskit@6.0.0 @emotion/react`');
  });
});

describe('updateFinalReleaseInfo', () => {
  it('should update temporary release tag_name, name and compare link', () => {
    const after = updateFinalReleaseInfo({
      tag_name: 'trigger-release@5.7.0',
      name: 'Trigger release 5.7.0',

      body:
        'https://github.com/newscorp-ghfb/newskit/compare/v5.6.0...trigger-release@5.7.0',
      published_at: '2022-07-18T11:41:49Z',
      created_at: '2022-07-18T11:41:49Z',
      html_url: 'https://github.com/newscorp-ghfb/newskit/releases/tag/v5.7.0',
    });
    expect(after.name).toEqual('v5.7.0');
    expect(after.tag_name).toEqual('v5.7.0');
    expect(after.body).toEqual(
      'https://github.com/newscorp-ghfb/newskit/compare/v5.6.0...v5.7.0',
    );
  });
  it('should handle typos', () => {
    const after = updateFinalReleaseInfo({
      tag_name: 'trigger-rlease@5.7.0',
      name: 'Triggerrelease 5.7.0',
      body:
        'https://github.com/newscorp-ghfb/newskit/compare/v5.6.0...trigger-rlease@5.7.0',
      published_at: '2022-07-18T11:41:49Z',
      created_at: '2022-07-18T11:41:49Z',
      html_url: 'https://github.com/newscorp-ghfb/newskit/releases/tag/v5.7.0',
    });
    expect(after.name).toEqual('v5.7.0');
    expect(after.tag_name).toEqual('v5.7.0');
    expect(after.body).toEqual(
      'https://github.com/newscorp-ghfb/newskit/compare/v5.6.0...v5.7.0',
    );
  });
  it('should handle already updated releases', () => {
    const after = updateFinalReleaseInfo({
      tag_name: 'v5.7.0',
      name: 'v5.7.0',
      body: 'https://github.com/newscorp-ghfb/newskit/compare/v5.6.0...v5.7.0',
      published_at: '2022-07-18T11:41:49Z',
      created_at: '2022-07-18T11:41:49Z',
      html_url: 'https://github.com/newscorp-ghfb/newskit/releases/tag/v5.7.0',
    });
    expect(after.name).toEqual('v5.7.0');
    expect(after.tag_name).toEqual('v5.7.0');
    expect(after.body).toEqual(
      'https://github.com/newscorp-ghfb/newskit/compare/v5.6.0...v5.7.0',
    );
  });
});
