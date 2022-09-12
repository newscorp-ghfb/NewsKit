const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig.jest.json');

const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

module.exports = {
  name: 'site',
  displayName: 'Site',
  bail: true,
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/../src/test/test-framework-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testRegex: '(.|-)test\\.tsx?$',
  testURL: 'http://localhost/',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/jest-config/style-mock',
    ...paths,
  },
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsconfig: '<rootDir>/tsconfig.jest.json',
    },
  },
};
