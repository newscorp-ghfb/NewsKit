describe('404 page', () => {
  it('should return correct status code and content', () => {
    cy.request({url: '/abcde', failOnStatusCode: false})
      .its('status')
      .should('equal', 404);
    cy.request({url: '/abcde', failOnStatusCode: false})
      .its('body')
      .should('include', 'Go back to the homepage');
  });
  it('should return to homepage when back link is clicked', () => {
    cy.visit('/abcde', {failOnStatusCode: false});
    cy.get('[data-testid="back-link"]')
      .should('have.attr', 'href', '/')
      .should('have.text', 'Go back to the homepage');
    cy.get('[data-testid="back-link"]').click({force: true});
    // Go back to the homepage
    cy.url().should('eq', 'http://localhost:8081/');
  });
});
