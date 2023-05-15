// #!/usr/bin/env node
/* eslint-env node */

const fs = require('fs');
const path = require('path');
const {newPackageJson} = require('./build-package-json-support');

const toAbsolutePath = relative => path.join(__dirname, relative);

const updateDistRootPackageJson = () => {
  fs.writeFileSync(
    toAbsolutePath('../dist/package.json'),
    JSON.stringify(newPackageJson(), null, 2),
  );
};

(() => {
  updateDistRootPackageJson();
})();
