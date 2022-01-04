module.exports = {
  appName: 'DS Components',
  batchId: process.env.CIRCLE_SHA1,
  parentBranchName: 'develop',
  storybookUrl: 'http://localhost:6006',
  browser: [
    {deviceName: 'iPhone 5/SE'},
    {width: 1024, height: 768, name: 'firefox'},
    {width: 1024, height: 768, name: 'chrome'},
    {width: 1024, height: 768, name: 'safari'},
  ],
  concurrency: 100,
  viewportSize: {width: 1027, height: 768},
  dontCloseBatches: true,
};
