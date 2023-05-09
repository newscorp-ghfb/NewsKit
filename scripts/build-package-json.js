// #!/usr/bin/env node
/* eslint-env node */

const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

const toAbsolutePath = relative => path.join(__dirname, relative);

const allowedPackageProperties = [
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

const dependenciesNotToBeIncluded = [
  'jszip',
  'file-saver',
  'isomorphic-dompurify',
  'dotenv',
  '@storybook/react',
  '@babel/runtime-corejs3',
  'semver',
  'next-seo',
  'googleapis',
  'glob',
  'globby',
  '@newskit-themes/the-times',
  '@newskit-themes/the-sun',
  '@newskit-themes/newskit-website',
  '@newskit-themes/dow-jones',
  '@newskit-themes/market-watch',
  '@newskit-themes/wall-street-journal',
];

const filterPackageJson = () => {
  const filteredPackageJson = Object.entries(packageJson)
    .filter(([key]) => allowedPackageProperties.includes(key))
    .reduce(
      (agg, [key, value]) => ({
        ...agg,
        [key]: value,
      }),
      {},
    );

  dependenciesNotToBeIncluded.forEach(package => {
    delete filteredPackageJson.dependencies[package];
  });

  return filteredPackageJson;
};

const updateDistRootPackageJson = () => {
  const cleanedPackageJson = filterPackageJson();

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
