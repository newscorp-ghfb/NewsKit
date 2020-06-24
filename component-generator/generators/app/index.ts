const Generator = require('yeoman-generator');
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require('babel-types');
const generate = require('babel-generator').default;

module.exports = class extends Generator {

  prompting() {
    this.log('Welcome to React/Typescript generator.');
    const self = this;
    return this.prompt([
      {
        type: 'input',
        name: 'componentNameInput',
        message: 'Name of your component',
      },
    ]).then(answers => {
      self.answers = answers;
    });
  }

  writing() {
    const {componentNameInput} = this.answers;
    const componentNameCapitalized =
      componentNameInput.charAt(0).toUpperCase() + componentNameInput.slice(1);
    const componentNameLower = componentNameInput.toLowerCase();

    this.log(`Writing files into: ${this.destinationRoot('./src')}`);
    const source = this.fs.read(this.destinationPath('index.ts'));
    // SourceType tells babylon to treat the source as a module and allow things like imports
    const ast = parser.parse(source, { sourceType: 'module' });
    /* this.log("++++++")
    this.log(source)
    this.log(ast) */

    const isImportDeclaration = path => (
      t.isImportDeclaration(path.node) || 
      t.isImportSpecifier(path.parent) || 
      t.isImportDeclaration(path.parent) || 
      t.isImportSpecifier(path.parent) || 
      t.isImportDefaultSpecifier(path.parent)
    );

    let lastExport = null;
      t.exportDeclaration
    const declaration = t.exportDeclaration(
      [ t.exportSpecifier(t.identifier(`${componentNameLower}`)) ], // This is the imported name
      t.stringLiteral(`./reducers/${componentNameLower}`), // This is the path to the source
    );
   
   /*  this.log("----")
    this.log(lastExport) */
    traverse(ast, {

      // Gets called when visiting *any* node
      enter(path) {
        
        // If we've visited imports and the current node is not an import we insert our declaration *after* the last import.
        if (lastExport) {
         
          lastExport.insertAfter(declaration);
        }
        
      },
      
      // Remember exportDeclarations when visiting
   
      ExportDeclaration(path) {
        console.log("export");
        console.log(path);
        lastExport = path;

      },
    
    });
    // Generate actually source code from modified AST
    const {code} = generate(ast, { /* Options */ }, source);
     /*   this.log("-=-=-=")
       this.log(code) */
    // Write source back to file
    this.fs.write(this.destinationPath('test.ts', code));  
 
    
 
    return;
   
    this.fs.copyTpl(
      this.templatePath('index.ts'),
      this.destinationPath(`${componentNameLower}/index.ts`),
      {componentFileName: componentNameLower},
    );

    this.fs.copyTpl(
      this.templatePath('types.ts'),
      this.destinationPath(`${componentNameLower}/types.ts`),
      {componentName: componentNameCapitalized},
    );

    this.fs.copyTpl(
      this.templatePath('component.tsx'),
      this.destinationPath(`${componentNameLower}/${componentNameLower}.tsx`),
      {componentName: componentNameCapitalized},
    );

    this.fs.copyTpl(
      this.templatePath('__test__/component.test.tsx'),
      this.destinationPath(
        `${componentNameLower}/__tests__/${componentNameLower}.test.tsx`,
      ),
      {componentName: componentNameCapitalized},
    );

    this.fs.copyTpl(
      this.templatePath('__test__/component-scenario.tsx'),
      this.destinationPath(
        `${componentNameLower}/__tests__/${componentNameLower}.scenario.tsx`,
      ),
      {
        componentName: componentNameCapitalized,
        componentFileName: componentNameLower,
      },
    );
  /* 
    this.log(`Updating files into:`);
      this.fs.write(this.destinationPath('gary.ts'), `export * from './${componentNameLower}';`); */
  }
  
  
};
