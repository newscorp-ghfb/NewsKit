const {newPackageJson} = require('../../scripts/build-package-json-support');

describe('package.json updated', () => {
  test('remind developer that dependenciesNotToBeIncluded array may need updating', () => {
    const packageJson = newPackageJson();
    expect(packageJson).toMatchSnapshot();
  });
});

// 'package.test.ts' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.
export {};
