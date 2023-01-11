import './commands';
import 'cypress-axe';
import '@percy/cypress';

// todo: remove this as part of PPDSC-2371
// Prevent uncaught exceptions from failing Cypress tests.
Cypress.on('uncaught:exception', () => false);
