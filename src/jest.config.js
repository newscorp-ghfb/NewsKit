// Sets default timezone so test returns same one across different locations ( UK, BG and CI)
process.env.TZ = 'GMT';

module.exports = {
  displayName: 'Components',
  rootDir: './',
  setupFilesAfterEnv: [
    '<rootDir>/test/test-framework-setup.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/theme-checker/'],
  testRegex: '(.|-)test\\.tsx?$',
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/test/require-context.ts',
    '/src/icons/filled/',
    '/src/icons/outlined/',
    '/src/select/select\\.tsx$',
    '.*\\.styled\\.tsx?$',
  ],
  coverageThreshold: {
    'src/**': {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
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
