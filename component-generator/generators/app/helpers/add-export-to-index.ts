const parser = require("babylon");
const traverse = require("@babel/traverse").default;
const t = require('babel-types');
const generate = require('babel-generator').default;

module.exports  = (source, componentName) => {
    const ast = parser.parse(source, { sourceType: 'module' });

    let lastExport = null;
    let isInserted = false;
    const exportAllDeclaration = t.exportAllDeclaration(t.stringLiteral(`./${componentName}`));

    traverse(ast, {
      ExportDeclaration(path) {
        lastExport = path;
      },
    });
    traverse(ast, {
      // Gets called when visiting *any* node
      enter(path) {
        if (lastExport && t.isExportAllDeclaration(path) && !isInserted) {
          lastExport.insertAfter(exportAllDeclaration);
          isInserted = true;
        }
      },
    });

    // Generate actually source code from modified AST
    return generate(ast, { /* Options */ }, source);
};
