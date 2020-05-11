// / <reference types="Cypress" />

// Note: only a subset of pages as a base for smoke tests
const routes = {
  radioPlayer: '/components/radio-player',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    it(`should pass visual regression test with dark theme on ${pageName}`, () => {
      cy.eyesOpen();
      cy.mockConsentRequest();
      cy.visit(path);
      cy.get('[data-testid="theme-switch-button"]').click();
      cy.eyesCheckWindow(`${pageName} page`);
      cy.eyesClose();
    });
  });
});
