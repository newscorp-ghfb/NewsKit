#!/usr/bin/env node
const https = require('https');

const PERCY_URL = 'https://percy.io/api/v1';

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

async function getPercyBuildForBranch(branchName, project) {
  log(`Looking for Percy ${project} build for branch ${branchName}`);
  const token = process.env[`PERCY_${project.toUpperCase()}_TOKEN`];
  if (!token) {
    log(`No Percy token found for project ${project}`);
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
  log(`No Percy build found for branch ${branchName}`);
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

  log(`Build is in state ${reviewState} with ${nbDiffs} diffs`);
  if (reviewState !== 'approved' || !nbDiffs) {
    log(`No diffs requiring updates`);
    throw Error();
  }
}

// this script fails if updates are required
const sha = process.argv[2];
const project = process.argv[3];
checkIfBaselineUpdatesRequired(sha, project)
  .then(() => process.exit(1))
  .catch(() => process.exit(0));
