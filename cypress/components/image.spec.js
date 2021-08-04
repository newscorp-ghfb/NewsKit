describe('Image component', () => {
  beforeEach(() => {
    cy.visit('?name=image-e2e');
  });

  it('lazy-load images', () => {
    cy.get('img').should('not.be.visible');
    cy.get('img').should('have.css', 'opacity', '0');
    cy.scrollTo(0, 5000);
    cy.get('img').should('be.visible');
    cy.get('img').should('have.css', 'opacity', '1');
  });
});
