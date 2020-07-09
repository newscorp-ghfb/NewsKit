const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const t = require('@babel/types');
const generate = require('@babel/generator').default;

const findingLastExport = ast => {
  let lastExport = null;
  traverse(ast, {
    ExportDeclaration(path) {
      lastExport = path;
    },
  });
  return lastExport;
};

const addingNewImport = (ast, exportAllDeclaration, lastExport) => {
  let isInserted = false;
  traverse(ast, {
    // Gets called when visiting *any* node
    enter(path) {
      if (lastExport && t.isExportAllDeclaration(path) && !isInserted) {
        lastExport.insertAfter(exportAllDeclaration);
        isInserted = true;
      }
    },
  });
};

module.exports = (source, componentName) => {
  const ast = parser.parse(source, {sourceType: 'module'});
  const exportAllDeclaration = t.exportAllDeclaration(
    t.stringLiteral(`./${componentName}`),
  );

  const lastExport = findingLastExport(ast);
  addingNewImport(ast, exportAllDeclaration, lastExport);
  return generate(ast, {}, source);
};
