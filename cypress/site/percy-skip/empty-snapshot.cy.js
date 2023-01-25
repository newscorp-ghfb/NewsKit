// / <reference types="Cypress" />

it(`should always pass empty test`, () => {
  cy.visit('./cypress/fixtures/empty.html');
  cy.percySnapshot();
});
