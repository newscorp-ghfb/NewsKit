module.exports = {
  appName: 'DS Site',
  batchId: process.env.CIRCLE_SHA1,
  baselineBranchName: 'develop',
  browser: [
    {deviceName: 'iPhone 5/SE'},
    {deviceName: 'iPad'},
    {width: 1024, height: 768, name: 'firefox'},
    {width: 2880, height: 1800, name: 'chrome'},
  ],
  concurrency: 50,
  showLogs: false, // Set to false to avoid jobs being split into several in Applitools.
  dontCloseBatches: true,
};
