// / <reference types="Cypress" />

it(`should always pass empty test to skip Percy Github check`, () => {
  cy.visit('./cypress/fixtures/empty.html');
  cy.percySnapshot();
});
