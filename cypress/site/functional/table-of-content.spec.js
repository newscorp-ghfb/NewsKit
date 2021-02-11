describe('table of content', () => {
  beforeEach(() => {
    cy.visit('/components/action/button-new');
    cy.get('[href="#interactive-demo"]').as('TOCInteractiveDemo');
  });

  it('should highlight the first section on load, Interactive Demo', () => {
    cy.get('@TOCInteractiveDemo').should('have.attr', 'data-selected', 'true');
  });

  it('highlighted Anatomy in the TOC after scrolling to that area', () => {
    cy.get('[href="#overrides"]').as('TOCOverridesSection');

    cy.scrollTo('bottom');

    cy.get('@TOCOverridesSection').should('have.attr', 'data-selected', 'true');
    cy.get('@TOCInteractiveDemo').should('have.attr', 'data-selected', 'false');
  });
});
