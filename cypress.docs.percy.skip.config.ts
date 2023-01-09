// cypress config must be in project root: https://github.com/cypress-io/cypress/issues/22689

import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: null,
    specPattern: 'cypress/site/percy-skip/**/*.cy.{js,jsx,ts,tsx}',
  },
});
