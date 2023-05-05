// /<reference types="Cypress" />

describe('Documentation Site - footer-navigation component', () => {
  describe('Desktop view', () => {
    it('pages should have footer links', () => {
      cy.mockConsentAndVisit('/');
      cy.contains('a', 'Careers').should('exist');
      cy.contains('a', 'Blog').should('exist');
      cy.contains('a', 'Privacy policy').should('exist');
      cy.contains('a', 'Terms & conditions').should('exist');
      cy.contains('a', 'Accessibility').should('exist');
    });
  });

  describe('Mobile view', () => {
    before(() => cy.viewport('iphone-5'));

    it('pages should have footer links', () => {
      cy.mockConsentAndVisit('/');
      cy.contains('a', 'Careers').should('exist');
      cy.contains('a', 'Blog').should('exist');
      cy.contains('a', 'Privacy policy').should('exist');
      cy.contains('a', 'Terms & conditions').should('exist');
      cy.contains('a', 'Accessibility').should('exist');
    });
  });
});
