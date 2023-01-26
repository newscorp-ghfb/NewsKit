#!/usr/bin/env node
const https = require('https');
const fs = require('fs');

const PERCY_URL = 'https://percy.io';

const CONFIG_FILE = 'percy-storybook.config.json';

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
    log(`No Percy token found for project ${project}`);
    throw Error();
  }
  return apiCall(`${PERCY_URL}${path}`, {
    headers: {Authorization: `Token ${token}`},
  });
}

async function getPercyBuildForBranch(branchName, project) {
  log(`Looking for Percy ${project} build for branch ${branchName}`);
  const builds = await percyApiCall('/api/v1/builds', project);
  for (let i = 0; i <= builds.data.length; i++) {
    const build = builds.data[i];
    if (build.attributes.branch === branchName) {
      return build;
    }
  }
  log(`No Percy build found for branch ${branchName}`);
  throw Error();
}

async function run(headRefName, project) {
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
    return false;
  }

  const snapshots = await percyApiCall(
    build.relationships.snapshots.links.related,
    project,
  );

  const include = snapshots.data
    .filter(
      ({attributes}) => attributes['review-state-reason'] === 'user_approved',
    )
    .map(({attributes: {name}}) => `^${name}$`);

  fs.writeFileSync(`./${CONFIG_FILE}`, JSON.stringify({include}));

  return true;
}

module.exports = {run};
