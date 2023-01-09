// cypress config must be in project root: https://github.com/cypress-io/cypress/issues/22689

import {defineConfig} from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'cypress/components/**/*.cy.{js,jsx,ts,tsx}',
  },
});
