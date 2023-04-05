#!/usr/bin/env node

/* Sample usage: 
    node scripts/branch-name-to-url.js feat/PPDSC-1543-add-pr-env-s3
*/

module.exports.branchNameToUrl = branchName => {
  if (!branchName) {
    process.stderr.write(`No "branchName" found`);
    process.exitCode = 1;
    return '';
  }

  const removeNonAz09Dash = /[^a-zA-Z0-9 -]/;

  const sitePath = () => {
    if (branchName.includes('snyk-upgrade')) {
      return branchName;
    }
    return branchName
      .split('/')[1]
      .toLowerCase()
      .trim()
      .replace(removeNonAz09Dash);
  };
  const sitePathValue = sitePath();

  if (!sitePathValue) {
    process.stderr.write(`Could not parse branch:${branchName}`);
    process.exitCode = 1;
    return '';
  }

  return sitePathValue;
};
