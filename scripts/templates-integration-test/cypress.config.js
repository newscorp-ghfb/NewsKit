const {defineConfig} = require('cypress');

module.exports = defineConfig({
  e2e: {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setupNodeEvents() {},
    baseUrl: 'http://localhost:3000',
    video: false,
  },
});
