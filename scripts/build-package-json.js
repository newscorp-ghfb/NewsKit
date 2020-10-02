// #!/usr/bin/env node
/* eslint-env node */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

(() => {
  delete packageJson.scripts.prepublish;

  fs.writeFileSync(
    path.join(__dirname, '../dist/package.json'),
    JSON.stringify(packageJson, null, 2),
  );
})();
