const Generator = require('yeoman-generator');
// const parser = require("babylon");
// const traverse = require("@babel/traverse").default;
// const t = require('babel-types');
// const generate = require('babel-generator').default;
const indexBuilderUtil = require('./helpers/indexBuilder.ts');
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
    console.log(indexBuilderUtil)
    // Generate actually source code from modified AST
    const {code} = indexBuilderUtil(source,componentNameLower);
    // Write source back to file
    this.fs.write(this.destinationPath('index.ts'), code);
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

    this.log(`Writing files into: ${this.destinationRoot('../site')}`);
    
    this.fs.copyTpl(
      this.templatePath('./documentation-page.mdx'),
      this.destinationPath(
        `./pages/components/${componentNameLower}.mdx`,
      ),
      {
        componentName: componentNameCapitalized,
        componentFileName: componentNameLower,
      },
    );


    const routes = JSON.parse(this.fs.read(this.destinationPath('routes.json')));
    const componentMenuObject = routes.filter(obj => {
      return obj.title ===  "Components";  
    })
    const componentPages = componentMenuObject[0].subNav
    const templateObject = {
      title: componentNameCapitalized,
      page: true,
      id: `/components/${componentNameLower}`
    }
    componentPages.push(templateObject)

    function compare( a, b ) {
      if ( a.title < b.title ){
        return -1;
      }
      if ( a.title > b.title ){
        return 1;
      }
      return 0;
    }
    
   const orderedObject = componentPages.sort( compare );
    const resultRoutes = JSON.stringify(routes,null,"  ");
    this.fs.write(this.destinationPath('routes.json'), resultRoutes);
  }
  
};
