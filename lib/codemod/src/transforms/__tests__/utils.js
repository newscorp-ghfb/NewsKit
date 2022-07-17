const fs = require('fs');
const {EOL} = require('os');

function readFile(filePath) {
  const fileContents = fs.readFileSync(filePath, 'utf8').toString();
  if (EOL !== '\n') {
    return fileContents.replace(/\n/g, EOL);
  }

  return fileContents;
}


function read(fileName) {
  return readFile(path.join(__dirname, fileName));
}

module.exports = {
  readFile,
  read,
};
