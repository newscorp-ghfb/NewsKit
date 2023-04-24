module.exports = {
  projects: ['<rootDir>/src/jest.config.js', '<rootDir>/site/jest.config.js'],
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
  preset: './jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', {presets: ['@nrwl/react/babel']}],
  },
};
