describe('form with yup resolver', () => {
  beforeEach(() => {
    cy.visit('?name=form');
  });

  it('check validation on valid input', () => {
    cy.get('[data-testid="yup-resolver"]').within(() => {
      cy.get('[data-testid="email-input"]').type('email@gmail.com');
      cy.get('[data-testid="username-input"]').type('username');
      cy.get('[data-testid="submit-button"]').click({force: true});
      cy.get('[data-testid="tick-icon"]').should('be.visible');
    });
  });

  it('check validation on invalid input', () => {
    cy.get('[data-testid="yup-resolver"]').within(() => {
      cy.get('[data-testid="email-input"]').type('not_an_email');
      cy.get('[data-testid="submit-button"]').click({force: true});
      cy.get('[data-testid="error-icon"]').should('be.visible');
      cy.contains('email must be a valid email').should('be.visible');
      cy.contains('username is a required field').should('be.visible');
    });
  });
});
