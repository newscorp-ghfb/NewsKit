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
    '/src/audio-player/',
  ],
  coverageThreshold: {
    'src/**': {
      branches: 75,
      functions: 85,
      lines: 85,
      statements: 85,
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
