// / <reference types="Cypress" />

const routes = {
  tabs: '/components/tabs/',
};

Object.entries(routes).forEach(([pageName, path]) => {
  describe(`${pageName} page`, () => {
    it(`should pass visual regression test with dark theme on ${pageName}`, () => {
      localStorage.setItem('newskit-docs-theme', 'dark');
      cy.mockConsentAndVisit(path);
      cy.get(`[title="Enable light mode"]`).should('exist'); // this will fail if dark theme is not selected
      cy.percySnapshot();
    });
  });
});
