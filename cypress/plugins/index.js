const path = require('path');
const fs = require('fs');

// This function recursively loops through a dir and all subdirs and returns
// an array of all file paths found.
async function getAllFilePaths(dir) {
  const subDirs = await fs.promises.readdir(dir);
  const files = await Promise.all(
    subDirs.map(async subDir => {
      const res = path.resolve(dir, subDir);
      return (await fs.promises.stat(res)).isDirectory()
        ? getAllFilePaths(res)
        : res;
    }),
  );
  return files.reduce((a, f) => a.concat(f), []);
}

// This function reads all files at the paths passed and returns an array of their contents.
async function readFiles(filePaths) {
  const promises = filePaths.map(filePath =>
    fs.promises
      .readFile(filePath)
      .then(buffer => buffer.toString())
      .then(contents => ({
        filePath,
        contents,
      })),
  );
  const results = await Promise.all(promises);
  return results;
}

// This function reads all files in the dir passed (and its subdirs) and returns
// an array of their contents.
async function readAllFilesInDir(dir) {
  const filePaths = await getAllFilePaths(dir);
  const results = await readFiles(filePaths);
  return results;
}

module.exports = on => {
  on('task', {
    readAllFilesInDir(dir) {
      return readAllFilesInDir(dir);
    },
  });
};

require('@applitools/eyes-cypress')(module);
