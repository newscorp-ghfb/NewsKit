describe('audio player', () => {
  beforeEach(() => {
    cy.visit('?name=audio player');
    cy.get('[data-testid="volume-control-track"]').as('volumeTrack');
  });

  it('should have a default volume of 0.7', () => {
    cy.get('@volumeTrack').should('have.attr', 'values', '0.7');
  });

  it('should update slider volume when audio player is muted and persisted when reloaded', () => {
    cy.get('[data-testid="mute-button"]')
      .first()
      .click({force: true})
      .window()
      .then(win =>
        expect(win.localStorage.getItem('newskit-audioplayer-volume')).to.eq(
          '0',
        ),
      );

    cy.reload().then(win =>
      expect(win.localStorage.getItem('newskit-audioplayer-volume')).to.eq('0'),
    );
    cy.get('@volumeTrack').should('have.attr', 'values', '0');
  });

  it('should update slider volume when audio player is set to max volume', () => {
    cy.get('[data-testid="volumeup-button"]')
      .first()
      .click({force: true})
      .window()
      .then(win =>
        expect(win.localStorage.getItem('newskit-audioplayer-volume')).to.eq(
          '1',
        ),
      );
  });
});
