import {diff} from 'semver';
import {FullRelease, Release} from './types';
import {GITHUB_API_URL, GITHUB_URL, JIRA_URL, REPO} from './constants';

export async function fetchGitHubReleases(per_page: number = 10) {
  const res = await fetch(
    `${GITHUB_API_URL}/repos/${REPO}/releases?per_page=${per_page}`,
  );
  const data = await res.json();
  return data;
}

const sortReleases = (ascending: boolean) => (
  {tag_name: a}: Release,
  {tag_name: b}: Release,
) =>
  // eslint-disable-next-line no-nested-ternary
  (a > b ? 1 : b > a ? -1 : 0) * (ascending ? 1 : -1);

// This function takes an array of Releases and calculates their change_levels
// by comparing against the previous release in the array. It returns an array
// containing all releases (with change levels) in the original array except the
// oldest (this cannot be calculated as there is no previous release to compare
// it against, so it is not included in the output array).
export const addChangeLevelToReleases: (
  releases: Release[],
) => FullRelease[] = releases => {
  const ascending = releases.sort(sortReleases(true));
  return ascending
    .slice(1) // The oldest release is not included in the output.
    .reduce(
      (prev: FullRelease[], next: Release) => [
        ...prev,
        {
          ...next,
          // Compare against the previous release in the array or the oldest
          // release removed above.
          change_level:
            next.tag_name === 'v5.4.2' // todo: remove this (only here for design review)
              ? 'major'
              : diff((prev[0] || ascending[0]).tag_name, next.tag_name)!, // Only null if the version is the same (never).
        },
      ],
      [],
    )
    .sort(sortReleases(false));
};

export const formatGitHubMarkDown = (raw: string) =>
  raw
    // some 'compare releases' links are invalid and need to be corrected
    .replaceAll(
      RegExp(
        `${GITHUB_URL}/${REPO}/compare/v\\d*\\.\\d*\\.\\d*...trigger-release@\\d*\\.\\d*\\.\\d*`,
        'g',
      ),
      (invalidLink: string) => invalidLink.replace('trigger-release@', 'v'),
    )
    // hyperlink the 'compare releases' links
    .replaceAll(
      RegExp(
        `${GITHUB_URL}/${REPO}/compare/v\\d*\\.\\d*\\.\\d*...v\\d*\\.\\d*\\.\\d*`,
        'g',
      ),
      (link: string) => `[${link}](${link})`,
    )
    // hyperlink the JIRA tickets in commit messages
    .replaceAll(RegExp(`PPDSC-\\d*`, 'g'), (ticketId: string) => {
      const ticketLink = `${JIRA_URL}/browse/${ticketId}`;
      return `[${ticketId}](${ticketLink})`;
    })
    // hyperlink to GitHub profiles of commit authors
    .replaceAll(
      RegExp(`@[a-zA-Z\\d](?:[a-zA-Z\\d]|-(?=[a-zA-Z\\d])){0,38}`, 'g'),
      (handle: string) => {
        const profileLink = `${GITHUB_URL}/${handle.split('@')[1]}`;
        return `[${handle}](${profileLink})`;
      },
    )
    // hyperlink to PRs
    .replaceAll(
      RegExp(`${GITHUB_URL}/${REPO}/pull/\\d*`, 'g'),
      (link: string) => {
        const PRNumber = link.split('/').slice(-1)[0];
        return `[#${PRNumber}](${link})`;
      },
    )
    // remove the comments at the top of the notes
    .replace(RegExp(`<!-- .* -->\r\n\r\n`, 'g'), '')
    // make the new contributors header the same size as the others
    .replace('## New Contributors', '### New Contributors')
    // remove the what's changed header
    .replace("## What's Changed\r\n", '');
