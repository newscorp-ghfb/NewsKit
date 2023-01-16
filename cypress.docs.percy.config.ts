// cypress config must be in project root: https://github.com/cypress-io/cypress/issues/22689

import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8081',
    specPattern: 'cypress/site/percy/**/*.cy.{js,jsx,ts,tsx}',
  },
});
