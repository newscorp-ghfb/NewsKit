#!/usr/bin/env node

/* eslint-env node */

const fs = require('fs');
const path = require('path');

const componentPages = path.join(__dirname, '../site/pages/components');
const componentSrc = path.join(__dirname, '../src');

// This object handles non-src component files and instances where site file names
// do not match src file paths exactly.
const OVERRIDES = {
  overview: null,
  utils: null,
  visibility: 'grid/visibility.tsx',
  'audio-player': 'audio-player-composable/audio-player-composable.tsx',
};

// Search component page files for the MetaStatus enum.
const getSiteStatus = componentName => {
  const data = fs.readFileSync(
    path.join(componentPages, `${componentName}.tsx`),
    {encoding: 'utf-8'},
  );
  const regEx = /MetaStatus\.(?<status>Beta|Supported|Deprecated)/;
  const matches = regEx.exec(data);
  return matches.groups.status.toLowerCase();
};

// Check if the component src file contains a @deprecated or @beta flag. If not,
// assume it is @supported.
const getSrcStatus = componentPath => {
  const data = fs.readFileSync(path.join(componentSrc, componentPath), {
    encoding: 'utf-8',
  });
  const regEx = /@(?<status>deprecated|beta)/;
  const matches = regEx.exec(data);
  if (matches) {
    return matches.groups.status;
  }
  return 'supported';
};

fs.readdir(componentPages, (err, files) => {
  const mismatches = files
    .filter(file => !file.includes('.mdx'))
    .map(file => file.replace('.tsx', ''))
    .reduce((prev, componentPageName) => {
      // eslint-disable-next-line no-prototype-builtins
      const srcComponentFileName = OVERRIDES.hasOwnProperty(componentPageName)
        ? OVERRIDES[componentPageName]
        : `${componentPageName}/${componentPageName}.tsx`;
      if (!srcComponentFileName) {
        return prev;
      }
      const srcStatus = getSrcStatus(srcComponentFileName);
      const siteStatus = getSiteStatus(componentPageName);
      if (srcStatus === siteStatus) {
        return prev;
      }
      return [...prev, {componentPageName, srcStatus, siteStatus}];
    }, []);
  if (mismatches.length) {
    throw Error(
      `The following components have status mismatches (src vs. site):\n${mismatches
        .map(
          ({componentPageName, srcStatus, siteStatus}) =>
            `* ${componentPageName}: ${srcStatus} vs. ${siteStatus}`,
        )
        .join('\n')}`,
    );
  }
});
