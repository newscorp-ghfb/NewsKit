// Sets default timezone so test returns same one across different locations ( UK, BG and CI)
process.env.TZ = 'GMT';

const {pathsToModuleNameMapper} = require('ts-jest');
const {compilerOptions} = require('./tsconfig.jest.json');

const paths = pathsToModuleNameMapper(compilerOptions.paths, {
  prefix: '<rootDir>/',
});

module.exports = {
  displayName: 'Site',
  rootDir: './',
  setupFilesAfterEnv: ['<rootDir>/../src/test/test-framework-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testRegex: '(.|-)test\\.tsx?$',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: true,
        tsconfig: '<rootDir>/tsconfig.jest.json',
      },
    ],
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/jest-config/style-mock',
    ...paths,
  },
  reporters: [
    [
      'jest-slow-test-reporter',
      {numTests: 10, warnOnSlowerThan: 300, color: true},
    ],
  ],
  snapshotFormat: {
    escapeString: true,
    printBasicPrototype: true,
  },
  workerIdleMemoryLimit: 0.4,
};
