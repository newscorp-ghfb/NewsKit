describe('table of content', () => {
  beforeEach(() => {
    cy.viewport(1600, 660);
    cy.mockConsentAndVisit('/components/tabs');
    // Hack for Next 13 - this could be removed AFTER upgrading Cypress to v.12
    // although this statement avoids the need for "cy.wait(1000);" at the end
    cy.get('section[id="introduction"]').should('be.visible');
    cy.get('[href="/components/tabs/#introduction"]').as('TOCIntroduction');
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
