module.exports = {
  displayName: 'Codemod',
  bail: 1,
  rootDir: './',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(.|-)test\\.js?$',
};
