module.exports = {
  name: 'comps',
  displayName: 'NewsKit Components',
  bail: true,
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/test'],
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
  setupFilesAfterEnv: ['<rootDir>/test/test-framework-setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  snapshotSerializers: ['jest-emotion'],
  testRegex: '(.|-)test\\.tsx?$',
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
