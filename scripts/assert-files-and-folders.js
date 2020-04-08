#!/usr/bin/env node

const {resolve} = require('path');
const {promisify} = require('util');
const {readdir: _readdir, readFileSync} = require('fs');
const ignore = require('ignore');

const readdir = promisify(_readdir);

const reset = '\x1b[0m';
const fgWhite = '\x1b[37m';
const bgRed = '\x1b[41m';

// eslint-disable-next-line no-console
const log = msg => console.error(`${msg}${reset}`);

const getFiles = async dir => {
  const dirents = await readdir(dir, {withFileTypes: true});
  const files = await Promise.all(
    dirents.map(async dirent => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? [res, ...(await getFiles(res))] : [res];
    }),
  );
  return []
    .concat(...files.filter(Boolean))
    .map(path => path.replace(`${resolve(__dirname, '..')}/`, ''));
};

const createAsserter = (filter, error) => paths => {
  const badPaths = ignore()
    .add(readFileSync(resolve(__dirname, '../.gitignore')).toString())
    .filter(paths)
    .filter(filter);
  if (badPaths.length) {
    log(error(badPaths.length));
    badPaths.forEach(path => log(`${bgRed}${fgWhite}BAD: ${reset}${path}`));
    log('');
    process.exit(1);
  }
  return paths;
};

const assertTestFolders = createAsserter(
  path => path.endsWith('__test__'),
  errors =>
    `${bgRed}${fgWhite}__test__ folder${
      errors > 1 ? 's' : ''
    } found! Rename to '__tests__'`,
);

const assertKebabFileNames = createAsserter(
  path => path.includes('.') && /[A-Z]|\s/.test(path),
  errors =>
    `${bgRed}${fgWhite}Invalid file path${
      errors > 1 ? 's' : ''
    } found! No spaces or uppercase characters - use kebab-case only.`,
);

getFiles('src')
  .then(assertTestFolders)
  .then(assertKebabFileNames);

getFiles('site')
  .then(assertTestFolders)
  .then(assertKebabFileNames);
