#!/usr/bin/env node

/* eslint-env node */

const fs = require('fs');
const path = require('path');

const componentPages = path.join(__dirname, '../site/pages/components');
const componentSrc = path.join(__dirname, '../src');

const getComponentName = s =>
  s.replace(/\b./g, x => x.toUpperCase()).replace(/-/g, '');

// This object handles non-src component files and instances where site file names
// do not match src file paths exactly.
const OVERRIDES = {
  community: null,
  overview: null,
  utils: null,
  visibility: 'grid/visibility.tsx',
  'audio-player': 'audio-player-composable/audio-player-composable.tsx',
  link: 'link/internal-link.tsx',
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

// Check if the component src file contains either:
//  /**
//  * @deprecated ComponentName is deprecated and will be removed in the next major release.
//  */
// Or:
//  /**
//  * @beta ComponentName is in beta.
//  */
// Otherwise, assume the component is supported.
const getSrcStatus = (filePath, componentName) => {
  const data = fs.readFileSync(path.join(componentSrc, filePath), {
    encoding: 'utf-8',
  });
  // Be careful to avoid accidentally detecting deprecated props.
  const regEx = new RegExp(
    `\\/\\*\\*.*\\n.*@(?<status>deprecated|beta).*\\b${componentName}\\b.*\\n.*\\*\\/`,
  );
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
    .reduce((prev, fileName) => {
      // eslint-disable-next-line no-prototype-builtins
      const srcFilePath = OVERRIDES.hasOwnProperty(fileName)
        ? OVERRIDES[fileName]
        : `${fileName}/${fileName}.tsx`;
      if (!srcFilePath) {
        return prev;
      }
      const componentName = getComponentName(fileName);
      const srcStatus = getSrcStatus(srcFilePath, componentName);
      const siteStatus = getSiteStatus(fileName);
      if (srcStatus === siteStatus) {
        return prev;
      }
      return [...prev, {componentPageName: fileName, srcStatus, siteStatus}];
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
