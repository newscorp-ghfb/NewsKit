#!/usr/bin/env node

const {resolve} = require('path');
const {promisify} = require('util');
const {readdir: _readdir} = require('fs');

const readdir = promisify(_readdir);

const reset = '\x1b[0m';
const fgWhite = '\x1b[37m';
const bgRed = '\x1b[41m';

// eslint-disable-next-line no-console
const log = msg => console.error(`${msg}${reset}`);

async function getFiles(dir) {
  const dirents = await readdir(dir, {withFileTypes: true});
  const files = await Promise.all(
    dirents.map(async dirent => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? [res, ...(await getFiles(res))] : false;
    }),
  );
  return [].concat(...files.filter(Boolean));
}

getFiles('src')
  .then(paths => paths.filter(path => path.endsWith('__test__')))
  .then(badPaths => {
    if (badPaths.length) {
      log(
        `${bgRed}${fgWhite}__test__ folder${
          badPaths.length > 1 ? 's' : ''
        } found! Rename to '__tests__'`,
      );
      badPaths.forEach(path => log(path.replace(resolve(__dirname, '..'), '')));
      log('');
      process.exit(1);
    }
  });
