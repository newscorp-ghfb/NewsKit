const fs = require('fs');
const path = require('path');

const {
  engines: {node: nodeVersion},
} = require('../package.json');

const readmePath = path.join(__dirname, '../README.md');
const readmeFile = fs.readFileSync(readmePath).toString();
const originalReadmeFile = readmeFile;

const replacedReadmeFile = readmeFile.replace(
  /<b>(.*)<\/b>/g,
  `<b>${nodeVersion}</b>`,
);

fs.writeFileSync(readmePath, replacedReadmeFile);

if (originalReadmeFile !== replacedReadmeFile) {
  throw new Error(
    'Node version has changed, README has been updated. \nReview the changes and commit again.',
  );
}
