describe('table of content', () => {
  beforeEach(() => {
    cy.viewport(1600, 660);
    cy.mockConsentAndVisit('/components/tabs');
    cy.get('[href="/components/tabs/#introduction"]').as('TOCIntroduction');
    cy.wait(1000);
  });

  it('should highlight the first section on load, Introduction', () => {
    cy.get('@TOCIntroduction').should('have.attr', 'data-selected', 'true');
  });

  it('highlighted Component API TOCSection after scrolling to the area', () => {
    cy.get('[href="/components/tabs/#component-api"]').as('TOCAPISection');

    cy.get('#component-api').scrollIntoView();

    cy.get('@TOCAPISection').should('have.attr', 'data-selected', 'true');
    cy.get('@TOCIntroduction').should('have.attr', 'data-selected', 'false');
  });
});
