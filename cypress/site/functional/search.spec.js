describe('Documentation Site - search component', () => {
  describe('Desktop view', () => {
    it('should open search', () => {
      cy.mockConsentAndVisit('/');
      cy.get('.DocSearch-Container').should('not.exist');
      cy.get('[data-testid="search-icon-button"]').should('not.be.visible');
      cy.get('[data-testid="search-button"]').click({
        multiple: true,
        force: true,
      });
      cy.get('.DocSearch-Container').should('exist');
    });
  });

  describe('Mobile view', () => {
    before(() => cy.viewport('iphone-5'));

    it('should open search', () => {
      cy.mockConsentAndVisit('/');
      cy.get('.DocSearch-Container').should('not.exist');
      cy.get('[data-testid="search-button"]').should('not.be.visible');
      cy.get('[data-testid="search-icon-button"]').click({
        multiple: true,
        force: true,
      });
      cy.get('.DocSearch-Container').should('exist');
    });
  });
});
