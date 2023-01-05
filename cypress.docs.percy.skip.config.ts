// cypress config must be in project root: https://github.com/cypress-io/cypress/issues/22689

import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require(// eslint-disable-next-line import/extensions
      './cypress/plugins/index.js')(on, config);
    },
    baseUrl: null,
    specPattern: 'cypress/site/percy-skip/**/*.cy.{js,jsx,ts,tsx}',
  },
});
