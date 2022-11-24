#!/usr/bin/env node
const https = require('https');

const GITHUB_URL = 'https://api.github.com';
const PERCY_URL = 'https://percy.io/api/v1';
const GITHUB_HEADERS = {'User-Agent': 'required by GitHub'};

function apiCall(url, options) {
  return new Promise((resolve, reject) => {
    https
      .get(url, options, resp => {
        let data = '';
        resp.on('data', chunk => {
          data += chunk;
        });
        resp.on('end', () => resolve(JSON.parse(data)));
      })
      .on('error', err => {
        reject(err.message);
      });
  });
}

async function getPRForCommit(mergeCommitSha) {
  process.stdout.write(`looking for PR for merge commit ${mergeCommitSha}`);
  const url = `${GITHUB_URL}/search/issues?q=${mergeCommitSha}`;
  const query = await apiCall(url, {headers: GITHUB_HEADERS});
  const {items} = query;
  if (!items.length) {
    process.stdout.write(`no PR found for commit ${mergeCommitSha}`);
    throw Error();
  }
  const prUrl = items[0].pull_request.url;
  const pr = await apiCall(prUrl, {headers: GITHUB_HEADERS});
  return pr;
}

async function getPercyBuildForBranch(branchName, project) {
  process.stdout.write(
    `looking for Percy ${project} build for branch ${branchName}`,
  );
  const token = process.env[`PERCY_${project.toUpperCase()}_TOKEN`];
  if (!token) {
    process.stdout.write(`no Percy token found for project ${project}`);
    throw Error();
  }
  const builds = await apiCall(`${PERCY_URL}/builds`, {
    headers: {Authorization: `Token ${token}`},
  });
  for (let i = 0; i <= builds.data.length; i++) {
    const build = builds.data[i];
    if (build.attributes.branch === branchName) {
      return build;
    }
  }
  process.stdout.write(`no Percy build found for branch ${branchName}`);
  throw Error();
}

async function checkIfBaselineUpdatesRequired(mergeCommitSha, project) {
  process.stdout.write(
    `checking if ${project} baselines need to be updated after commit ${mergeCommitSha}`,
  );
  const pr = await getPRForCommit(mergeCommitSha);
  const branchName = pr.head.ref;

  const build = await getPercyBuildForBranch(branchName, project);
  const reviewState = build.attributes['review-state'];
  const nbDiffs = build.attributes['total-comparisons-diff'];

  process.stdout.write(
    `build is in state ${reviewState} with ${nbDiffs} diffs`,
  );
  if (reviewState !== 'approved' || !nbDiffs) {
    process.stdout.write(`no diffs requiring updates`);
    throw Error();
  }
}

// this script fails if updates are required
const sha = process.argv[2];
const project = process.argv[3];
checkIfBaselineUpdatesRequired(sha, project)
  .then(() => process.exit(1))
  .catch(() => process.exit(0));
