// / <reference types="Cypress" />

const routes = {
  tabs: '/components/tabs/',
};

if (!Cypress.env('SKIP_PERCY_CHECK')) {
  Object.entries(routes).forEach(([pageName, path]) => {
    describe(`${pageName} page`, () => {
      it(`should pass visual regression test with dark theme on ${pageName}`, () => {
        cy.log(`skip: ${Cypress.env('SKIP_PERCY_CHECK')}`);
        cy.mockConsentAndVisit(path);
        cy.get('[data-testid="theme-switch-button"]').click();
        cy.percySnapshot();
      });
    });
  });
}
