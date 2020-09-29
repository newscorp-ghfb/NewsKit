// /<reference types="Cypress" />

describe('Documentation Site - sidebar component', () => {
  before(() => {
    cy.visit('/');
  });

  it('should pass basic a11y test', () => {
    cy.injectAxe();
    cy.checkA11y();
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
    cy.contains('Creating a theme').should('exist');
    cy.contains('Using a theme').should('exist');

    cy.get('[data-testid="/theming/foundations"]').click();
    cy.contains('Colours').should('exist');
    cy.contains('Overlays').should('exist');
    cy.contains('Motion').should('exist');
    cy.contains('Spacing').should('exist');

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
