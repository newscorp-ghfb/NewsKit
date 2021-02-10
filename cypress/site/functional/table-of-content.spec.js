describe('table of content', () => {
  beforeEach(() => {
    cy.visit('/components/action/button-new');
    cy.get('[href="#interactive-demo"]').as('TOCInteractiveDemo');
  });

  it('should highlight the first section on load, Interactive Demo', () => {
    cy.get('[href="#interactive-demo"]').as('TOCInteractiveDemo');
    cy.get('@TOCInteractiveDemo').should('have.css', 'border-color', 'rgb(10, 104, 193)');
  });

  it('highlighted Anatomy in the TOC after scrolling to that area', () => {
    cy.get('[href="#anatomy"]').as('TOCAnatomySection');
    
    // Clicking on the link will trigger the scroll
    cy.get('@TOCAnatomySection').click()

    cy.get('@TOCAnatomySection').should('have.css', 'border-color', 'rgb(10, 104, 193)');
    cy.get('@TOCInteractiveDemo').should('have.css', 'border-color', 'rgb(156, 156, 156)');
  });
});
