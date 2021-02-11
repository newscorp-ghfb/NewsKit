describe('table of content', () => {
  beforeEach(() => {
    cy.visit('/components/action/button-new');
    cy.get('[href="#interactive-demo"]').as('TOCInteractiveDemo');
  });

  it('should highlight the first section on load, Interactive Demo', () => {
    cy.get('@TOCInteractiveDemo').should('have.attr', 'data-selected', 'true');
  });

  it('highlighted Props TOCSection after scrolling to the area', () => {
    cy.get('[href="#props"]').as('TOCPropsSection');

    cy.scrollTo('bottom');

    cy.get('@TOCPropsSection').should('have.attr', 'data-selected', 'true');
    cy.get('@TOCInteractiveDemo').should('have.attr', 'data-selected', 'false');
  });
});
