// /<reference types="Cypress" />

describe('Documentation Site - sidebar component', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('DOC_SITE_URL'));
  });

  it.skip('should pass basic a11y test', () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it('should contain the correct links', () => {
    cy.contains('Getting Started').should('exist');
    cy.contains('Theming').should('exist');
    cy.contains('Foundations').should('exist');
    cy.contains('Components').should('exist');
    cy.contains('Pages').should('exist');
    cy.contains('Utilities').should('exist');
    cy.contains('Feedback').should('exist');

    cy.get('[data-testid="/guides"]').click();
    cy.contains('AMP').should('exist');

    cy.get('[data-testid="/theming"]').click();
    cy.contains('Overview').should('exist');
    cy.contains('Code').should('exist');

    cy.get('[data-testid="/foundations"]').click();
    cy.contains('Colours').should('exist');
    cy.contains('Icons').should('exist');
    cy.contains('Typography').should('exist');

    cy.get('[data-testid="/components"]').click();
    cy.contains('Tag').should('exist');
    cy.contains('Link').should('exist');
    cy.contains('ArticleByline').should('exist');
    cy.contains('ArticleHeadline').should('exist');
    cy.contains('ArticleStandfirst').should('exist');
    cy.contains('DateLine').should('exist');
    cy.contains('Image').should('exist');
    cy.contains('TagList').should('exist');
    cy.contains('Grid & Cell').should('exist');
    cy.contains('OrderedList').should('exist');
    cy.contains('UnorderedList').should('exist');
    cy.contains('ShareBar').should('exist');
    cy.contains('Consent').should('exist');

    cy.get('[data-testid="/pages"]').click();
    cy.contains('Article').should('exist');

    cy.get('[data-testid="/utils"]').click();
    cy.contains('Code Helpers').should('exist');
  });
});
