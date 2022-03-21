const isPlaying = () => {
  cy.get('@togglePlay').should('have.attr', 'aria-label', 'Stop');

  cy.get('@audioElement')
    .invoke('prop', 'paused')
    .then(paused => {
      expect(paused).to.equal(false);
    });
};

const isPaused = () => {
  cy.get('@togglePlay').should('have.attr', 'aria-label', 'Play');
  cy.get('@audioElement')
    .invoke('prop', 'paused')
    .then(paused => {
      expect(paused).to.equal(true);
    });
};

const checkSliderValue = expectedValue => {
  cy.get('@audioSliderThumb')
    .should('have.attr', 'aria-valuenow')
    .then(currentValue => {
      expect(parseInt(currentValue, 10)).to.equals(expectedValue);
    });
};

const checkLabelCurrentTime = expectedValue => {
  cy.get('@audioCurrentTime').should('have.text', expectedValue);
};

const checkAudioElementTime = expectedValue => {
  cy.get('@audioElement')
    .invoke('prop', 'currentTime')
    .then(currentValue => {
      expect(parseInt(currentValue, 10)).to.equal(expectedValue);
    });
};

export const formatTime = time => {
  const hhmmss = [11, 8];
  const mmss = [14, 5];
  const args = time >= 3600 ? hhmmss : mmss;
  return new Date(time * 1000).toISOString().substr(...args);
};

const checkTime = expectedValue => {
  checkSliderValue(expectedValue);
  checkAudioElementTime(expectedValue);
  checkLabelCurrentTime(formatTime(expectedValue));
};

const TEST_DATA = {
  durationInSeconds: 372,
};

describe('audio player composable', () => {
  beforeEach(() => {
    cy.visit('?name=audio-player-composable');

    const parentTestIDSelector = '[data-testid="audio-player-inline"]';

    cy.get(`${parentTestIDSelector}`).as('container');

    cy.get(`${parentTestIDSelector} [data-testid="audio-element"]`).as(
      'audioElement',
    );
    cy.get(
      `${parentTestIDSelector} [data-testid="audio-player-play-pause-button"]`,
    ).as('togglePlay');
    cy.get(`${parentTestIDSelector} [data-testid="audio-slider"]`).as(
      'audioSlider',
    );
    cy.get(`${parentTestIDSelector} [data-testid="audio-slider-thumb"]`).as(
      'audioSliderThumb',
    );
    cy.get(`${parentTestIDSelector} [data-testid="audio-slider-track"]`).as(
      'audioSliderTrack',
    );

    cy.get(
      `${parentTestIDSelector} [data-testid="audio-player-current-time"]`,
    ).as('audioCurrentTime');
    cy.get(`${parentTestIDSelector} [data-testid="audio-player-duration"]`).as(
      'audioDuration',
    );
  });

  it('toggle when click Play Button', () => {
    cy.get('@togglePlay').click();
    isPlaying();

    cy.get('@togglePlay').click();
    isPaused();
  });

  it('move track using slider', () => {
    // move to middle
    cy.get('@audioSliderTrack').click('center');
    checkTime(TEST_DATA.durationInSeconds / 2);

    // move to the begining
    cy.get('@audioSliderTrack').click('left');
    checkTime(0);

    // move to 4th minute
    cy.get('@audioSliderTrack').click(510, 4);
    checkTime(4 * 60);
  });

  it('pause when end', () => {
    // start playing
    cy.get('@togglePlay').click();
    // move to the end
    cy.get('@audioSliderTrack').click(791, 4);
    checkTime(TEST_DATA.durationInSeconds);
    isPaused();
  });

  it('toggle when press K key', () => {
    cy.get('@togglePlay').focus();
    cy.get('@togglePlay').trigger('keyup', {key: 'k'});
    isPlaying();

    cy.get('@togglePlay').trigger('keyup', {key: 'k'});
    isPaused();
  });

  it('toggle when press Space key', () => {
    cy.get('@audioSliderThumb').focus();
    cy.get('@togglePlay').trigger('keyup', {key: ' '});
    isPlaying();

    cy.get('@togglePlay').trigger('keyup', {key: ' '});
    isPaused();
  });

  it.only('should move track using 0, Start and End key', () => {
    cy.get('@togglePlay').focus();
    cy.get('@togglePlay').trigger('keyup', {key: 'End'});
    checkTime(TEST_DATA.durationInSeconds);

    cy.get('@togglePlay').trigger('keyup', {key: 'Home'});
    checkTime(0);

    cy.get('@togglePlay').trigger('keyup', {key: 'End'});
    checkTime(TEST_DATA.durationInSeconds);

    cy.get('@togglePlay').trigger('keyup', {key: '0'});
    checkTime(0);
  });
});
