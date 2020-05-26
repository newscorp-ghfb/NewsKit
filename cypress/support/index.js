import './commands';
import 'cypress-axe';
import '@applitools/eyes-cypress/commands';

Cypress.Cookies.defaults({
  whitelist: ['euconsent-v2', 'consentUUID'],
});
