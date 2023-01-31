#!/usr/bin/env node
const https = require('https');
const fs = require('fs');

const PERCY_URL = 'https://percy.io';

const CONFIG_FILE = 'percy-storybook.config.json';

// using stderr prevents logged values being returned
const log = value => process.stderr.write(`${value}\n`);

const throwError = () => process.exit(1);

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

function percyApiCall(path) {
  const token = process.env.PERCY_TOKEN;
  if (!token) {
    log(`No Percy token found`);
    throwError();
    return false;
  }
  return apiCall(`${PERCY_URL}${path}`, {
    headers: {Authorization: `Token ${token}`},
  });
}

async function getPercyBuildForBranch(branchName) {
  log(`Looking for Percy build for branch ${branchName}`);
  const builds = await percyApiCall('/api/v1/builds');
  for (let i = 0; i <= builds.data.length; i++) {
    const build = builds.data[i];
    if (build.attributes.branch === branchName) {
      return build;
    }
  }
  log(`No Percy build found for branch ${branchName}`);
  throwError();
  return false;
}

async function run(headRefName) {
  const branchName = headRefName.trim();
  log(`Checking if baselines to be updated after ${branchName} was merged`);

  const build = await getPercyBuildForBranch(branchName);
  const reviewState = build.attributes['review-state'];
  const nbDiffs = build.attributes['total-comparisons-diff'];

  log(`Build is in state ${reviewState} with ${nbDiffs} diffs`);
  if (reviewState !== 'approved' || !nbDiffs) {
    log(`No diffs requiring updates`);
    return false;
  }

  const snapshots = await percyApiCall(
    build.relationships.snapshots.links.related,
  );

  const include = snapshots.data
    .filter(
      ({attributes}) => attributes['review-state-reason'] === 'user_approved',
    )
    .map(({attributes: {name}}) => `^${name}$`);

  log(`Updating ${CONFIG_FILE}`);
  fs.writeFileSync(`./${CONFIG_FILE}`, JSON.stringify({include}));

  return true;
}

module.exports = {run};
