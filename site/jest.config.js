const {pathsToModuleNameMapper} = require('ts-jest/utils');
const {compilerOptions} = require('./tsconfig');

module.exports = {
  name: 'site',
  displayName: 'Site',
  bail: true,
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/helpers/'],
  rootDir: './',
  coverageReporters: ['lcov', 'text-summary'],
  coverageDirectory: '../coverage',
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/../src/test/test-framework-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  snapshotSerializers: ['jest-emotion'],
  testRegex: '(.|-)test\\.tsx?$',
  testURL: 'http://localhost/',
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  globals: {
    'ts-jest': {
      diagnostics: true,
      tsConfig: '<rootDir>/tsconfig.jest.json',
    },
  },
};
