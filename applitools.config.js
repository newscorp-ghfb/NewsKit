module.exports = {
  appName: 'DS Site',
  batchName: 'DS Site',
  browser: [
    {deviceName: 'iPhone 5/SE'},
    {deviceName: 'iPad'},
    {width: 1024, height: 768, name: 'firefox'},
    {width: 2880, height: 1800, name: 'chrome'},
    // TODO: Add back ie11 once we have fixed the IE11 related bugs (e.g https://nidigitalsolutions.jira.com/browse/PPDSC-676)
    // {width: 1024, height: 768, name: 'ie11'},
  ],
  matchLevel: 'Layout',
  concurrency: 20,
};
