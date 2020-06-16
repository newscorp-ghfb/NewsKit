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
    {
      iosDeviceInfo: {
        deviceName: 'iPhone XR',
        screenOrientation: 'landscapeLeft',
      },
    },
    {
      iosDeviceInfo: {
        deviceName: 'iPhone 11 Pro Max',
      },
    },
    {
      iosDeviceInfo: {
        deviceName: 'iPad Pro (12.9-inch) (3rd generation)',
        screenOrientation: 'landscapeLeft',
      },
    },
  ],
  concurrency: 100,
  viewportSize: {width: 1027, height: 768},
  waitBeforeScreenshot: 5000,
};
