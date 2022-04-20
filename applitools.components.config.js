module.exports = {
  appName: 'DS Components',
  batchId: process.env.APPLITOOLS_BATCH_ID,
  storybookUrl: 'http://localhost:6006',
  browser: [
    {deviceName: 'iPhone 5/SE'},
    {width: 1024, height: 768, name: 'firefox'},
    {width: 1024, height: 768, name: 'chrome'},
    {width: 1024, height: 768, name: 'safari'},
  ],
  concurrency: 100,
  viewportSize: {width: 1027, height: 768},
  showLogs: true,
  dontCloseBatches: true,
};
