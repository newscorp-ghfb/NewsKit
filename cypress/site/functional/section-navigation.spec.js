// / <reference types="Cypress" />

describe('section navigation', () => {
  before(() => {
    cy.mockConsentRequest();
  });

  it('should contain the correct section navigation links', () => {
    cy.visit('/components/tag-list');
    cy.get('[data-testid="section-navigation"]')
      .find('li > a')
      .each(el => {
        cy.wrap(el).should('have.attr', 'href', `#${el.text().toLowerCase()}`);
      });
  });
});
