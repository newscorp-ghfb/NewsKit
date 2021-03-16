describe('drawer', () => {
  beforeEach(() => {
    cy.visit('?name=drawer');
  });

  it('page cant scroll when drawer panel is open', () => {
    cy.get('[data-testid="scrollable-drawer"]').within(() => {
      cy.get('[data-testid="drawer-open-button"]')
        .first()
        .click();

      cy.window().then($el =>
        expect($el.document.body.style.overflow).to.eq('hidden'),
      );

      cy.get('[data-testid="overlay"]').click();

      cy.window().then($el =>
        expect($el.document.body.style.overflow).to.eq('visible'),
      );
    });
  });

  it('scrolling drawer panel is possible', () => {
    cy.get('[data-testid="scrollable-drawer"]').within(() => {
      cy.get('[data-testid="drawer-open-button"]')
        .first()
        .click();

      cy.get('[data-testid="drawer"]')
        .first()
        .find('[data-testid="drawer-content"]')
        .scrollTo('bottom')
        .its('scrollY')
        .should('not.equal', 0);
    });
  });
});
