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
  // const regexFilter = new RegExp(' filter="url(.*)"', 'gi');
  // const fileContent = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'});
  // const contentWithoutFilters = fileContent.replaceAll(regexFilter, '');

  // const regexDefs = new RegExp(/<defs>.*<\/defs>/, 'gis');
  // const contentWithoutDefs = contentWithoutFilters.replaceAll(regexDefs, '');

  const fileContent = fs.readFileSync(filePath, {encoding: 'utf8', flag: 'r'});

  const $ = cheerio.load(fileContent);

  // remove filter definitions
  $('filter').remove();

  // remove filter with url
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
  // const file1 =
  //   '/Users/sdelev/projects/newskit/newskit/site/public/static/illustrations-original/about/contact-us-hero-illustration.svg';
  // updateFile(file1);
  // const file2 =
  //   '/Users/sdelev/projects/newskit/newskit/site/public/static/illustrations-original/about/why-use-newskit-hero-illustration.svg';
  // updateFile(file2);

  for await (const filePath of getFiles(
    './site/public/static/illustrations-original/',
  )) {
    if (filePath.endsWith('.svg')) {
      updateFile(filePath);
    }
  }
})();
