module.exports = (componentName, componentFileName) => ({
  paths: [
    {
      templatePath: '__test__/component-scenario.tsx',
      destinationPath: `${componentFileName}/__tests__/${componentFileName}.scenario.tsx`,
    },
    {
      templatePath: 'index.ts',
      destinationPath: `${componentFileName}/index.ts`,
    },
    {
      templatePath: 'types.ts',
      destinationPath: `${componentFileName}/types.ts`,
    },
    {
      templatePath: 'component.tsx',
      destinationPath: `${componentFileName}/${componentFileName}.tsx`,
    },
    {
      templatePath: '__test__/component.test.tsx',
      destinationPath: `${componentFileName}/__tests__/${componentFileName}.test.tsx`,
    },
  ],
  names: {
    componentName,
    componentFileName,
  },
});
