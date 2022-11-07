// / <reference types="Cypress" />

describe('section navigation', () => {
  it('should contain the correct section navigation links', () => {
    cy.mockConsentAndVisit('/components/title-bar');
    cy.get('[data-testid="section-navigation"]')
      .find('li > a')
      .each(el => {
        cy.wrap(el).should(
          'have.attr',
          'href',
          `/components/title-bar/#${el.text().toLowerCase()}`,
        );
      });
  });
});
