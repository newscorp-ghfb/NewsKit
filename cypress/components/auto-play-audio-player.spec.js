const waitForLoaded = () => {
  cy.get('@sliderLabel', {timeout: 30000}).should('not.have.text', '00:00');
};

describe('auto play audio player', () => {
  beforeEach(() => {
    cy.visit('?name=auto-play-audio-player');
    cy.get('[data-testid="audio-slider"] [data-testid="max-label"]').as(
      'sliderLabel',
    );
    waitForLoaded();
  });

  it('should have auto played', () => {
    cy.get('[data-testid="audio-player-play-button"]').as('togglePlay');
    cy.get('@togglePlay')
      .find('title')
      .should('have.text', 'Pause');
    cy.get('@togglePlay')
      .click()
      .find('title')
      .should('have.text', 'Play');
    cy.get('@togglePlay')
      .click()
      .find('title')
      .should('have.text', 'Pause');
  });
});
