const Generator = require('yeoman-generator');

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
    this.log(`Writing files into: ${this.destinationRoot('./src')}`);
    const {componentNameInput} = this.answers;
    const componentNameCapitalized =
      componentNameInput.charAt(0).toUpperCase() + componentNameInput.slice(1);
    const componentNameLower = componentNameInput.toLowerCase();
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
    this.log(`Updating files into:`);
      this.fs.write(this.destinationPath('gary.ts'), `export * from './{componentNameLower}';`);
  }
  
};
