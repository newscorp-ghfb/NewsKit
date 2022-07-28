import {diff} from 'semver';
import {Release, FullRelease} from './types';

export const GITHUB_URL = 'https://github.com';
export const GITHUB_API_URL = 'https://api.github.com';
export const REPO = 'newscorp-ghfb/newskit';
export const JIRA_URL = `https://nidigitalsolutions.jira.com`;

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
