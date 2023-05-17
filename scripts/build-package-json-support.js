// #!/usr/bin/env node
/* eslint-env node */

const packageJson = require('../package.json');

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
  '@newskit-themes/newskit-website',
  '@newskit-themes/the-sun',
  '@newskit-themes/the-times',
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

  dependenciesNotToBeIncluded.forEach(packageName => {
    delete filteredPackageJson.dependencies[packageName];
  });

  return filteredPackageJson;
};

const newPackageJson = () => {
  const cleanedPackageJson = filterPackageJson();
  return {
    ...cleanedPackageJson,
    main: 'cjs/index.js',
    types: 'cjs/index.d.ts',
    module: 'esm/index.js',
  };
};

module.exports = {filterPackageJson, newPackageJson};
