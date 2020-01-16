module.exports = {
  appName: 'DS Components',
  batchName: 'DS Components',
  storybookUrl: 'http://localhost:6006',
  browser: [
    {deviceName: 'iPhone 5/SE'},
    {deviceName: 'iPhone 6/7/8 Plus'},
    {deviceName: 'iPhone X'},
    {deviceName: 'iPad'},
    {deviceName: 'iPad Pro', screenOrientation: 'landscape'},
    {deviceName: 'Pixel 2'},
    {deviceName: 'Pixel 2 XL'},
    {width: 800, height: 600, name: 'firefox'},
    {width: 2880, height: 1800, name: 'chrome'},
    {width: 1024, height: 768, name: 'ie11'},
    {width: 800, height: 600, name: 'edge'},
  ],
  concurrency: 100,
};
