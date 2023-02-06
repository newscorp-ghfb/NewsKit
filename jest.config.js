module.exports = {
  projects: [
    '<rootDir>/src/jest.config.js',
    '<rootDir>/site/jest.config.js',
    '<rootDir>/scripts/jest.config.js',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/test'],
  coverageReporters: ['lcov', 'text-summary'],
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageThreshold: {
    'src/**': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  snapshotSerializers: ['@emotion/jest/serializer'],
};
