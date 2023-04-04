/* eslint-disable no-restricted-syntax */
const {resolve} = require('path');
const {readdir} = require('fs').promises;
const fs = require('fs');
const cheerio = require('cheerio');

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
  const fileContent = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'});

  const $ = cheerio.load(fileContent);

  // remove filter definitions
  $('filter').remove();

  // remove filter attr with url
  $('[filter*="url"]').each((i, el) => {
    $(el).removeAttr('filter');
  });

  const cleanContent = $('svg').parent().html();

  const newPath = filePath.replace(
    '/illustrations-original/',
    '/illustrations/',
  );
  fs.writeFileSync(newPath, cleanContent, {encoding: 'utf8'});
}

(async () => {
  for await (const filePath of getFiles(
    './site/public/static/illustrations-original/',
  )) {
    if (filePath.endsWith('.svg')) {
      updateFile(filePath);
    }
  }
})();
