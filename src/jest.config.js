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
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  snapshotSerializers: ['jest-emotion'],
  testRegex: '(.|-)test\\.tsx?$',
  testURL: 'http://localhost/',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
};
