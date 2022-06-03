#!/usr/bin/env node

/* eslint-env node */

const fs = require('fs');
const path = require('path');
const componentsPackageJson = require('../package.json');
const codemodsPacakgeJson = require('../codemods/package.json');

(async function run() {
  codemodsPacakgeJson.version = componentsPackageJson.version;
  fs.writeFileSync(
    path.join(__dirname, '../codemods/package.json'),
    JSON.stringify(codemodsPacakgeJson, null, 2),
  );
})();
