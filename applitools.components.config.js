module.exports = {
  appName: 'DS Components',
  batchName: 'DS Components',
  storybookUrl: 'http://localhost:6006',
  browser: [
    {deviceName: 'iPhone 5/SE'},
    {width: 1024, height: 768, name: 'firefox'},
    {width: 1024, height: 768, name: 'ie11'},
    {width: 1024, height: 768, name: 'chrome'},
    {width: 1024, height: 768, name: 'safari'},
  ],
  concurrency: 100,
  dontCloseBatches: true,
};
