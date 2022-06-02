module.exports = {
  name: 'codemods',
  displayName: 'Codemods',
  bail: true,
  rootDir: './',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(.|-)test\\.js?$',
};
