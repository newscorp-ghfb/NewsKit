// These combined settings are now only used by the old-style "yarn test:unit:watch",
// as the nx-based test commands use a separate coverage folder per project
module.exports = {
  projects: ['<rootDir>/src/jest.config.js', '<rootDir>/site/jest.config.js'],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/test'],
  coverageReporters: ['lcov', 'text-summary'],
  collectCoverage: true,
  coverageDirectory: './coverage/all',
  snapshotSerializers: ['@emotion/jest/serializer'],
  preset: './jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', {presets: ['@nrwl/react/babel']}],
  },
  setupFilesAfterEnv: [
    '<rootDir>/test/test-framework-setup.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/theme-checker/'],
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  workerIdleMemoryLimit: 0.4,
};
