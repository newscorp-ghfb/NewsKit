#!/usr/bin/env node

/* eslint-env node */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

(async function run() {
  const version = {version: packageJson.version};
  fs.writeFileSync(
    path.join(__dirname, '../src/version-number.json'),
    JSON.stringify(version, null, 2),
  );
})();
