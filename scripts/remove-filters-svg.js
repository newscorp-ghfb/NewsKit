const {resolve} = require('path');
const {readdir} = require('fs').promises;
const fs = require('fs');

async function* getFiles(dir) {
  const dirents = await readdir(dir, {withFileTypes: true});
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

function updateFile(filePath) {
  const regex = new RegExp('filter="url(.*)"', 'gi');
  const fileContent = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'});
  const newContent = fileContent.replaceAll(regex, '');
  const newPath = filePath.replace('.svg', '-new.svg');
  fs.writeFileSync(newPath, newContent, {encoding: 'utf8'});
}

(async () => {
  for await (const filePath of getFiles(
    // './site/public/static/illustrations/about/',
    './site/public/static/illustrations/landing-page/',
  )) {
    if (!filePath.endsWith('-new.svg')) {
      updateFile(filePath);
    }
  }
})();
