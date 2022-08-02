import {renderWithTheme} from 'newskit/test/test-utils';
import React from 'react';
import {Matcher} from '@testing-library/react';
import ReleaseNotes from '../release-notes';
import '@testing-library/jest-dom';

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({children}: {children: React.ReactNode}) => <>{children}</>,
}));

const COMMENT =
  '<!-- Release notes generated using configuration in .github/release.yml at main -->';
const PROFILE = '@mstuartf';
const PR_LINK = 'https://github.com/newscorp-ghfb/newskit/pull/239';
const COMPARE_LINK =
  'https://github.com/newscorp-ghfb/newskit/compare/v5.6.0...trigger-release@5.7.0';
const TICKET_ID = 'PPDSC-2121';

const BODY = `${COMMENT}\r\n\r\n## What's Changed\r\n### New Features 🎉\r\n* feat(PPDSC-2151): Add Outline Style Presets by @tbradbury in https://github.com/newscorp-ghfb/newskit/pull/214\r\n* feat(${TICKET_ID}): \`<Popover/>\` header close by ${PROFILE} in ${PR_LINK}\r\n### Bug Fixes 🐛\r\n* fix(PPDSC-2164): assistive text by @mstuartf in https://github.com/newscorp-ghfb/newskit/pull/249\r\n### Other Changes 🧱\r\n* ci(PPDSC-2292): attempt fix of develoment env by @jps in https://github.com/newscorp-ghfb/newskit/pull/285\r\n\r\n## New Contributors\r\n* @agagotowiec made their first contribution in https://github.com/newscorp-ghfb/newskit/pull/238\r\n\r\n**Full Changelog**: ${COMPARE_LINK}`;

const partialQueryByText = (
  queryByText: (text: Matcher) => HTMLElement | null,
  partialContents: string,
) => queryByText(content => content.includes(partialContents));

describe('ReleaseNotes', () => {
  // test('renders correctly', () => {
  //   const {asFragment} = renderWithTheme(ReleaseNotes, {body: BODY});
  //   expect(asFragment()).toMatchSnapshot();
  // });
  test('removes comment', () => {
    const {queryByText} = renderWithTheme(ReleaseNotes, {body: BODY});
    expect(partialQueryByText(queryByText, COMMENT)).not.toBeInTheDocument();
  });
  test("removes what's changed header", () => {
    const {queryByText} = renderWithTheme(ReleaseNotes, {body: BODY});
    expect(
      partialQueryByText(queryByText, "## What's Changed"),
    ).not.toBeInTheDocument();
  });
  test('resizes new contributors header', () => {
    const {queryByText} = renderWithTheme(ReleaseNotes, {body: BODY});
    expect(
      partialQueryByText(queryByText, '### New Contributors'),
    ).toBeInTheDocument();
  });
  test('adds PR links', () => {
    const {queryByText} = renderWithTheme(ReleaseNotes, {body: BODY});
    expect(
      partialQueryByText(
        queryByText,
        `[#${PR_LINK.split('/').slice(-1)[0]}](${PR_LINK})`,
      ),
    ).toBeInTheDocument();
  });
  test('adds ticket links', () => {
    const {queryByText} = renderWithTheme(ReleaseNotes, {body: BODY});
    expect(
      partialQueryByText(
        queryByText,
        `[${TICKET_ID}](https://nidigitalsolutions.jira.com/browse/${TICKET_ID})`,
      ),
    ).toBeInTheDocument();
  });
  test('adds GitHub profile links', () => {
    const {queryByText} = renderWithTheme(ReleaseNotes, {body: BODY});
    expect(
      partialQueryByText(
        queryByText,
        `[${PROFILE}](https://github.com/${PROFILE.replace('@', '')})`,
      ),
    ).toBeInTheDocument();
  });
  test('corrects and hyperlinks compare releases links', () => {
    const {queryByText} = renderWithTheme(ReleaseNotes, {body: BODY});
    expect(
      partialQueryByText(queryByText, COMPARE_LINK),
    ).not.toBeInTheDocument();
    const fixed = COMPARE_LINK.replace('trigger-release@', 'v');
    expect(
      partialQueryByText(queryByText, `[${fixed}](${fixed})`),
    ).toBeInTheDocument();
  });
});
