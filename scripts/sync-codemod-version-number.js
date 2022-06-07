#!/usr/bin/env node

/* eslint-env node */

const fs = require('fs');
const path = require('path');
const componentsPackageJson = require('../package.json');
const codemodPacakgeJson = require('../codemod/package.json');

(async function run() {
  codemodPacakgeJson.version = componentsPackageJson.version;
  fs.writeFileSync(
    path.join(__dirname, '../codemod/package.json'),
    JSON.stringify(codemodPacakgeJson, null, 2),
  );
})();
