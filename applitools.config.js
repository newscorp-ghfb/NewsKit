module.exports = {
  appName: 'DS Site',
  browser: [
    {deviceName: 'iPhone 5/SE'},
    {deviceName: 'iPad'},
    {width: 1024, height: 768, name: 'firefox'},
    {width: 2880, height: 1800, name: 'chrome'},
  ],
  concurrency: 50,
  properties: [{name: 'suite', value: 'docs'}],
};
