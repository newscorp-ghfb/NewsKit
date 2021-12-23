const fs = require('fs');
const path = require('path');

export const requireContext = (
  base: string = '.',
  scanSubDirectories: boolean = false,
  regularExpression: RegExp = /\.js$/,
) => {
  const files: {[key: string]: boolean} = {};

  function readDirectory(directory: string) {
    fs.readdirSync(directory).forEach((file: string) => {
      const fullPath = path.resolve(directory, file);

      if (fs.statSync(fullPath).isDirectory()) {
        if (scanSubDirectories) readDirectory(fullPath);

        return;
      }

      if (!regularExpression.test(fullPath)) return;

      files[fullPath] = true;
    });
  }

  readDirectory(path.resolve(__dirname, base));
  // eslint-disable-next-line global-require, import/no-dynamic-require
  return Object.keys(files).map(filePath => require(filePath));
};
