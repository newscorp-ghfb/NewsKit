// cypress config must be in project root: https://github.com/cypress-io/cypress/issues/22689

import {defineConfig} from 'cypress';

const {readAllFilesInDir} = require('./cypress/plugins/files');

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('task', {
        readAllFilesInDir(dir) {
          return readAllFilesInDir(dir);
        },
      });
    },
    baseUrl: 'http://localhost:8081',
    specPattern: 'cypress/site/functional/**/*.cy.{js,jsx,ts,tsx}',
    viewportWidth: 1280,
    chromeWebSecurity: false,
  },
});
