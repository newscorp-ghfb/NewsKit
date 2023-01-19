// / <reference types="Cypress" />

it(`should always pass empty test`, {baseUrl: null}, () => {
  cy.visit('./cypress/fixtures/empty.html');
  cy.percySnapshot();
});
