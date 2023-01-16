describe('Theme Checker', () => {
  it('Visits the home page and expect to find a play pause button', () => {
    cy.visit('/');
    cy.get('[data-testid="audio-player-play-button"]');
  });
});
