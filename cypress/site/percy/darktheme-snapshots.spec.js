// / <reference types="Cypress" />

// Note: only a subset of pages as a base for smoke tests
const routes = {
  tabs: '/components/tabs/',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    it(`should pass visual regression test with dark theme on ${pageName}`, () => {
      cy.mockConsentAndVisit(path);
      cy.get('[data-testid="theme-switch-button"]').click();
      cy.percySnapshot();
    });
  });
});
