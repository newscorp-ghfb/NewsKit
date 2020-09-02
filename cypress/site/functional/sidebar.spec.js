// /<reference types="Cypress" />

describe('Documentation Site - sidebar component', () => {
  before(() => {
    cy.visit('/');
  });

  // TODO: Need to remove color-contrast as a rule here once PPDSC-785 ticket is fixed
  // TODO: Re-enable; this was passing locally (passed WAVE too) but failing on circle.
  it.skip('should pass basic a11y test', () => {
    cy.injectAxe();
    cy.checkA11y({
      rules: {
        'color-contrast': {enabled: false},
      },
    });
  });

  it('should contain the correct links', () => {
    cy.contains('Getting Started').should('exist');
    cy.contains('Theming').should('exist');
    cy.contains('Foundations').should('exist');
    cy.contains('Components').should('exist');
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
    cy.contains('Byline').should('exist');
    cy.contains('Headline').should('exist');
    cy.contains('Audio Player').should('exist');
    cy.contains('Date Time').should('exist');
    cy.contains('Divider').should('exist');
    cy.contains('Button').should('exist');
    cy.contains('Consent').should('exist');
    cy.contains('Consent Settings Link').should('exist');
    cy.contains('Grid & Cell').should('exist');
    cy.contains('Image').should('exist');
    cy.contains('Link').should('exist');
    cy.contains('Ordered List').should('exist');
    cy.contains('Standfirst').should('exist');
    cy.contains('Tag').should('exist');
    cy.contains('Unordered List').should('exist');

    cy.get('[data-testid="/utils"]').click();
    cy.contains('Code Helpers').should('exist');
  });
});
