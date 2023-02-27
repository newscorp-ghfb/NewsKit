#!/usr/bin/env node

/* Sample usage: 
    node scripts/s3-pr-branch-naming.js feat/PPDSC-1543-add-pr-env-s3 s3://ncu-newskit-docs/
    
    node scripts/s3-pr-branch-naming.js feat/PPDSC-1543-add-pr-env-s3 s3://ncu-newskit-docs/ storybook
*/
const {branchNameToUrl} = require('./branch-name-to-url');

const branchName = process.argv[2];
const s3BucketPath = process.argv[3];
const subdirectory = process.argv[4];

if (!branchName) {
  process.stderr.write(`No "branchName" found`);
  process.exitCode = 1;
  return;
}

if (!s3BucketPath) {
  process.stderr.write(`No "s3BucketPath" found`);
  process.exitCode = 1;
  return;
}

const sitePath = branchNameToUrl(branchName);
process.stdout.write(
  subdirectory
    ? `${s3BucketPath}${sitePath}/${subdirectory}`
    : `${s3BucketPath}${sitePath}/`,
);
