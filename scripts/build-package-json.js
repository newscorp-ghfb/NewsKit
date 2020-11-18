// #!/usr/bin/env node
/* eslint-env node */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

const toAbsolutePath = relative => path.join(__dirname, relative);

const allowedList = [
  'name',
  'version',
  'description',
  'keywords',
  'license',
  'sideEffects',
  'repository',
  'dependencies',
  'resolutions',
  'peerDependencies',
];

const updateDistRootPackageJson = () => {
  const cleanedPackageJson = Object.entries(packageJson)
    .filter(([key]) => allowedList.includes(key))
    .reduce(
      (agg, [key, value]) => ({
        ...agg,
        [key]: value,
      }),
      {},
    );

  const newPackageJson = {
    ...cleanedPackageJson,
    main: 'cjs/index.js',
    types: 'cjs/index.d.ts',
    module: 'esm/index.js',
  };

  fs.writeFileSync(
    toAbsolutePath('../dist/package.json'),
    JSON.stringify(newPackageJson, null, 2),
  );
};

(() => {
  updateDistRootPackageJson();
})();
