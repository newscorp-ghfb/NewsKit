const fg = require('fast-glob');
const parser = require('@babel/parser');
const fs = require('fs');
const path = require('path');

const dir = './cypress/config';
const ignoreScenarios = ['image-e2e', 'use-media-query', 'layer'];

const files = fg.sync('./src/**/**.stories.tsx');
const testsConfig = files
  .filter(
    filePath =>
      !ignoreScenarios.some(ignore =>
        filePath.endsWith(`/${ignore}.stories.tsx`),
      ),
  )
  .map(filePath => {
    try {
      const source = fs.readFileSync(
        path.join(__dirname, '../', filePath),
        'utf8',
      );
      const ast = parser.parse(source, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript'],
      });
      // get tge default export
      const [getDefaultExport] = ast.program.body.filter(
        e => e.type === 'ExportDefaultDeclaration',
      );

      // find a title object in default export
      const [titleObj] = getDefaultExport.declaration.properties.filter(
        node => node.key.name === 'title',
      );

      const title = titleObj.value.value
        .replace(/Components\/|Deprecated\/|Utilities\//, '')
        .toLowerCase();

      const [disabledRulesObj] = getDefaultExport.declaration.properties.filter(
        node => node.key.name === 'disabledRules',
      );
      let disabledRules;
      if (disabledRulesObj) {
        disabledRules = disabledRulesObj.value.elements.map(node => node.value);
      }

      if (title === 'cardcomposable') {
        disabledRules.push('duplicate-id-aria');
        disabledRules.push('duplicate-id-active');
      }

      return {title, disabledRules};
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return null;
    }
  });

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.writeFileSync(
  `${dir}/a11y-components.json`,
  JSON.stringify(testsConfig, null, '\t'),
);
