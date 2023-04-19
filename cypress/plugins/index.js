/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
module.exports = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    console.log('before:browser:launch', launchOptions.args);

    launchOptions.args.push('--disable-gpu');

    return launchOptions;
  });
};
