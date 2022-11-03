// / <reference types="Cypress" />

const routes = {
  tabs: '/components/tabs/',
};

Object.entries(routes).forEach(([pageName, path]) => {
  describe(`${pageName} page`, () => {
    it(`should pass visual regression test with dark theme on ${pageName}`, () => {
      cy.mockConsentAndVisit(path);
      cy.get('[data-testid="theme-switch-button"]').click();
      cy.percySnapshot();
    });
  });
});
