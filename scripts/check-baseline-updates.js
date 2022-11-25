#!/usr/bin/env node
const https = require('https');

const GITHUB_URL = 'https://api.github.com';
const PERCY_URL = 'https://percy.io';
const GITHUB_HEADERS = {'User-Agent': 'required by GitHub'};

function log(value) {
  process.stdout.write(`${value}\n`);
}

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

function percyApiCall(path, project) {
  const token = process.env[`PERCY_${project.toUpperCase()}_TOKEN`];
  if (!token) {
    log(`no Percy token found for project ${project}`);
    throw Error();
  }
  return apiCall(`${PERCY_URL}${path}`, {
    headers: {Authorization: `Token ${token}`},
  });
}

async function getPRForCommit(mergeCommitSha) {
  log(`looking for PR for merge commit ${mergeCommitSha}`);
  const url = `${GITHUB_URL}/search/issues?q=${mergeCommitSha}`;
  const query = await apiCall(url, {headers: GITHUB_HEADERS});
  const {items} = query;
  if (!items.length) {
    log(`no PR found for commit ${mergeCommitSha}`);
    throw Error();
  }
  const prUrl = items[0].pull_request.url;
  const pr = await apiCall(prUrl, {headers: GITHUB_HEADERS});
  return pr;
}

async function getPercyBuildForBranch(branchName, project) {
  log(`looking for Percy ${project} build for branch ${branchName}`);
  const builds = await percyApiCall('/api/v1/builds', project);
  for (let i = 0; i <= builds.data.length; i++) {
    const build = builds.data[i];
    if (build.attributes.branch === branchName) {
      return build;
    }
  }
  log(`no Percy build found for branch ${branchName}`);
  throw Error();
}

async function checkIfBaselineUpdatesRequired(mergeCommitSha, project) {
  log(
    `checking if ${project} baselines need to be updated after commit ${mergeCommitSha}`,
  );
  const pr = await getPRForCommit(mergeCommitSha);
  const branchName = pr.head.ref;

  const build = await getPercyBuildForBranch(branchName, project);
  const reviewState = build.attributes['review-state'];
  const nbDiffs = build.attributes['total-comparisons-diff'];

  log(`build is in state ${reviewState} with ${nbDiffs} diffs`);
  if (reviewState !== 'approved' || !nbDiffs) {
    log(`no diffs requiring updates`);
    throw Error();
  }

  const snapshots = await percyApiCall(
    build.relationships.snapshots.links.related,
    project,
  );

  const updated = snapshots.data
    .filter(
      ({attributes}) => attributes['review-state-reason'] === 'user_approved',
    )
    .map(({id, attributes: {name}}) => ({id, name}));

  log(`${updated.length} baselines need updating:`);
  updated.forEach(({id, name}) => {
    log(`-- ${id}: ${name}`);
  });
}

// this script fails if updates are required
const sha = process.argv[2];
const project = process.argv[3];
checkIfBaselineUpdatesRequired(sha, project)
  .then(() => process.exit(1))
  .catch(() => process.exit(0));
