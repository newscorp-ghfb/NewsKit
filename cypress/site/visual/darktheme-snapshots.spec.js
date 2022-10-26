// / <reference types="Cypress" />

// Note: only a subset of pages as a base for smoke tests
const routes = {
  tabs: '/components/tabs/',
};

Object.entries(routes).forEach(route => {
  const [pageName, path] = route;

  describe(`${pageName} page`, () => {
    it(`should pass visual regression test with dark theme on ${pageName}`, () => {
      cy.eyesOpen();
      localStorage.setItem('newskit-docs-theme', 'dark');
      cy.mockConsentAndVisit(path);
      cy.get(`[title="Enable light mode"]`).should('exist'); // this will fail if dark theme is not selected
      cy.eyesCheckWindow(`${pageName} page`);
      cy.eyesClose();
    });
  });
});
