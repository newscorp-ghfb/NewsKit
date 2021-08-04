const fg = require('fast-glob');
const parser = require('@babel/parser');
const fs = require('fs');
const path = require('path');

const ignoreScenarios = ['image-e2e', 'use-media-query'];

const files = fg.sync('./src/**/**.scenario.tsx');
const testsConfig = files
  .filter(
    filePath =>
      !ignoreScenarios.some(ignore =>
        filePath.endsWith(`/${ignore}.scenario.tsx`),
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
      const title = titleObj.value.value;

      // get all named exports
      const exportNamedDeclarations = ast.program.body.filter(
        e => e.type === 'ExportNamedDeclaration',
      );

      let disabledRules;
      if (exportNamedDeclarations.length) {
        // find the named export with name disabledRules
        const [exportNamedDeclaration] = exportNamedDeclarations.filter(
          declaration =>
            declaration.declaration.declarations.filter(
              node => node.id.name === 'disabledRules',
            ).length,
        );
        const [disableRuleObj] =
          exportNamedDeclaration?.declaration?.declarations || [];
        // take the values from the named export disabledRules
        if (disableRuleObj) {
          disabledRules = disableRuleObj.init.elements.map(node => node.value);
        }
      }
      return {title, disabledRules};
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      return null;
    }
  });

fs.writeFileSync(
  './cypress/config/a11y-components.json',
  JSON.stringify(testsConfig, null, '\t'),
);
