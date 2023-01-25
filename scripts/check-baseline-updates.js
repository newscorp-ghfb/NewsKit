#!/usr/bin/env node
const https = require('https');

const PERCY_URL = 'https://percy.io';

const log = value => process.stdout.write(`${value}\n`);

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

async function checkIfBaselineUpdatesRequired(headRefName, project) {
  const branchName = headRefName.trim();
  log(
    `Checking if baselines for ${project} need to be updated after ${branchName} was merged`,
  );

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
const headRefName = process.argv[2];
const project = process.argv[3];
checkIfBaselineUpdatesRequired(headRefName, project)
  .then(() => process.exit(1))
  .catch(() => process.exit(0));
