module.exports = {
  name: 'comps',
  displayName: 'NewsKit Components',
  bail: true,
  rootDir: './',
  setupFilesAfterEnv: [
    '<rootDir>/test/test-framework-setup.ts',
    '@testing-library/jest-dom/extend-expect',
  ],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/theme-checker/'],
  testRegex: '(.|-)test\\.tsx?$',
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/src/test/require-context.ts',
    '/src/icons/filled/',
    '/src/icons/outlined/',
    '/src/test/test-utils.tsx',
  ],
  coverageDirectory: './coverage',
  coverageThreshold: {
    'src/**': {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
