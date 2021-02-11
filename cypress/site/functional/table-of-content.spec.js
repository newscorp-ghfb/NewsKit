describe('table of content', () => {
  beforeEach(() => {
    cy.visit('/components/action/button-new');
    cy.get('[href="#interactive-demo"]').as('TOCInteractiveDemo');
  });

  it('should highlight the first section on load, Interactive Demo', () => {
    cy.get('[href="#interactive-demo"]').as('TOCInteractiveDemo');
    cy.get('@TOCInteractiveDemo').should(
      'have.css',
      'border-color',
      'rgb(87, 127, 251)',
    );
  });

  it('highlighted Anatomy in the TOC after scrolling to that area', () => {
    cy.get('[href="#overrides"]').as('TOCOverridesSection');

    cy.scrollTo('bottom')

    cy.get('@TOCOverridesSection').should(
      'have.css',
      'border-color',
      'rgb(87, 127, 251)',
    );
    cy.get('@TOCInteractiveDemo').should(
      'have.css',
      'border-color',
      'rgb(235, 235, 235)',
    );
  });
});
