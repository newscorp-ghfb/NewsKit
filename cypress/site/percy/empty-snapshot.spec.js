// / <reference types="Cypress" />

if (Cypress.env('SKIP_PERCY_CHECK')) {
  it(
    `should always pass empty test to skip Percy Github check`,
    {baseUrl: null},
    () => {
      cy.visit('./cypress/fixtures/empty.html');
      cy.percySnapshot();
    },
  );
}
