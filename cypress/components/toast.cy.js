describe('Toast', () => {
  beforeEach(() => {
    cy.visit('?name=toast-e2e');
  });

  it('toast is removed after n seconds', () => {
    cy.clock();
    // Open toast
    cy.get('[data-testid="action-success"]').as('btn');
    cy.get('@btn').click();
    cy.tick(100);
    cy.get('[data-testid="alert-success"]').as('alert');
    cy.get('@alert').should('exist');
    cy.tick(2000);
    cy.get('@alert').should('not.exist');
  });

  /* Suppressing this test as close button no longer visible in Storybook
   (to mirror realistic use as self-closing). */
  it('toast is persisted when in focus', () => {
    // Find open button and open Toast
    cy.get('[data-testid="action-error"]').as('btn');
    cy.get('@btn').click();

    // Focus on close button inside the Toast
    cy.get('[data-testid="close"]').focus();
    cy.get('[data-testid="close"]').should('have.focus');

    // When the close button is focused the toast should stay visible
    // the autoHideDuration is set to 1000ms
    // so its not gonna hide till its focused out
    cy.wait(2000);
    // After 2000ms Toast should be still visible since it is focused
    cy.get('[data-testid="alert-error"]').as('alert');
    cy.get('@alert').should('exist');

    // When focus is moved out of the Toast it should disappear
    cy.get('@btn').focus();
    cy.get('@alert').should('not.exist');
  });
});
