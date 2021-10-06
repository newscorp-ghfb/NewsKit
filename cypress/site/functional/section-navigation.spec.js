// / <reference types="Cypress" />

describe('section navigation', () => {
  it('should contain the correct section navigation links', () => {
    cy.mockConsentAndVisit('/components/tag');
    cy.get('[data-testid="section-navigation"]')
      .find('li > a')
      .each(el => {
        cy.wrap(el).should(
          'have.attr',
          'href',
          `/components/tag/#${el.text().toLowerCase()}`,
        );
      });
  });
});
