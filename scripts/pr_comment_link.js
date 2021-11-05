#!/usr/bin/env node

/* Sample usage: 
      node scripts/pr_comment_link.js feat/PPDCS-1705-post-s3url-to-pr http://ncu-newskit-docs.s3-website-eu-west-1.amazonaws.com/
      node scripts/pr_comment_link.js feat/PPDCS-1705-post-s3url-to-pr http://ncu-newskit-docs.s3-website-eu-west-1.amazonaws.com/ storybook
*/

const {branchNameToUrl} = require('./branch-name-to-url');

// websiteType stands for either /storybook or /docs path
const branchName = process.argv[2];
const urlPath = process.argv[3];
const websiteType = process.argv[4];

if (!branchName) {
  process.stderr.write(`No "branchName" found`);
  process.exitCode = 1;
  return;
}
const sitePath = branchNameToUrl(branchName);
if (!websiteType) {
  process.stderr.write(`${urlPath}${sitePath}`);
  return;
}
const fullSitePath = `${urlPath}${sitePath}`;
process.stdout.write(
  websiteType === 'docs' ? `${fullSitePath}` : `${fullSitePath}/${websiteType}`,
);
