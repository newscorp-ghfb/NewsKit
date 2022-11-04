const isPlaying = () => {
  cy.get('@togglePlay').should('have.attr', 'aria-label', 'Pause');

  cy.get('@audioElement')
    .invoke('prop', 'paused')
    .then(paused => {
      expect(paused).to.equal(false);
    });
};

const isVolumeVal = val => {
  cy.get('@audioElement')
    .invoke('prop', 'volume')
    .then(volume => {
      expect(volume).to.equal(val);
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
  durationInSeconds: 1799,
};

/*
  our useKeypress hook uses keydown and keyup events, that's why we need to call both events in tests
*/
const triggerKeyEvent = (selector, events) => {
  const eventsList = Array.isArray(events) ? events : [events];
  eventsList.forEach(event => {
    cy.get(selector).trigger('keydown', event);
  });
  eventsList.forEach(event => {
    cy.get(selector).trigger('keyup', event);
  });
};

describe('audio player composable', () => {
  const parentTestIDSelector = '[data-testid="audio-player-inline"]';

  beforeEach(() => {
    cy.visit('?name=audio-player-composable-e2e');

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
    cy.get(`${parentTestIDSelector} [data-testid="mute-button"]`).as(
      'muteButton',
    );
    cy.get(`${parentTestIDSelector} [data-testid="audio-slider-thumb"]`).as(
      'audioSliderThumb',
    );
    cy.get(`${parentTestIDSelector} [data-testid="audio-slider-track"]`).as(
      'audioSliderTrack',
    );
    cy.get(
      `${parentTestIDSelector} [data-testid="audio-player-forward-button"]`,
    ).as('forwardButton');
    cy.get(
      `${parentTestIDSelector} [data-testid="audio-player-replay-button"]`,
    ).as('backwardButton');
    cy.get(
      `${parentTestIDSelector} [data-testid="audio-player-current-time"]`,
    ).as('audioCurrentTime');
    cy.get(`${parentTestIDSelector} [data-testid="audio-player-duration"]`).as(
      'audioDuration',
    );
    cy.get('[data-testid="audio-player-duration"]').should(
      'not.have.text',
      '00:00',
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
    checkTime(Math.ceil(TEST_DATA.durationInSeconds / 2));

    // move to the begining
    cy.get('@audioSliderTrack').click('left');
    checkTime(0);

    // move to 4th minute
    cy.get('@audioSliderTrack').click(129, 4);
    checkTime(4 * 60);
  });

  it('pause when end', () => {
    // start playing
    cy.get('@togglePlay').click();
    // move to the end
    cy.get('@audioSliderTrack').click(1000, 4, {force: true});
    checkTime(TEST_DATA.durationInSeconds);
    isPaused();
  });

  it('skip-prev button moves to start after 5 seconds time', () => {
    cy.get(
      `${parentTestIDSelector} [data-testid="audio-player-skip-previous-button"]`,
    ).as('skipPrevBtn');
    checkTime(0);

    // move time to the middle
    cy.get('@audioSliderTrack').click('center');

    cy.get('@skipPrevBtn').click();
    // the track should be at the start after clicking Skip Prev Button
    checkTime(0);
  });

  it('it forwards when forward button is clicked', () => {
    cy.get('@forwardButton').click();
    checkTime(10);
  });

  it('it replays when replay button is clicked', () => {
    cy.get('@forwardButton').click();
    cy.get('@forwardButton').click();
    cy.get('@backwardButton').click();
    checkTime(10);
  });

  it('it replay button back to 0 if under 10 seconds', () => {
    cy.get('@audioSliderTrack').click(4, 4);
    cy.get('@backwardButton').click();
    checkTime(0);
  });

  // Keyboard related tests
  it('keyboard: toggle when press K key', () => {
    cy.get('@togglePlay').focus();
    triggerKeyEvent('@togglePlay', {key: 'k'});
    isPlaying();

    triggerKeyEvent('@togglePlay', {key: 'k'});
    isPaused();
  });

  it('keyboard: toggle when press M key', () => {
    cy.get('@muteButton').focus();
    triggerKeyEvent('@muteButton', {key: 'm'});
    isVolumeVal(0);

    triggerKeyEvent('@muteButton', {key: 'm', force: true});
    isVolumeVal(0.7);
  });

  it('keyboard: toggle when press Space key', () => {
    cy.get('@audioSliderThumb').focus();
    triggerKeyEvent('@audioSliderThumb', {key: ' '});
    isPlaying();

    triggerKeyEvent('@audioSliderThumb', {key: ' '});
    isPaused();
  });

  it('keyboard: move track using 0, Start and End key', () => {
    cy.get('@togglePlay').focus();
    triggerKeyEvent('@togglePlay', {key: 'End'});
    checkTime(TEST_DATA.durationInSeconds);

    triggerKeyEvent('@togglePlay', {key: 'Home'});
    checkTime(0);

    triggerKeyEvent('@togglePlay', {key: 'End'});
    checkTime(TEST_DATA.durationInSeconds);

    triggerKeyEvent('@togglePlay', {key: '0'});
    checkTime(0);
  });

  it('keyboard: Space key does not work with active elements', () => {
    isPaused();
    cy.get(`${parentTestIDSelector} [data-testid="buttonLink"]`).as('link');
    cy.get('@link').focus();
    triggerKeyEvent('@link', {
      force: true,
      position: 'topLeft',
      key: ' ',
    });
    isPaused();
  });

  it('keyboard: shift + p trigger previous', () => {
    triggerKeyEvent('@togglePlay', [{key: 'Shift'}, {key: 'p'}]);
    cy.get(`${parentTestIDSelector} [data-testid="event"]`).as('eventLog');
    cy.get('@eventLog').should('have.text', 'skip-previous');
  });

  it('keyboard: shift + n trigger next', () => {
    triggerKeyEvent('@togglePlay', [{key: 'Shift'}, {key: 'n'}]);
    cy.get(`${parentTestIDSelector} [data-testid="event"]`).as('eventLog');
    cy.get('@eventLog').should('have.text', 'skip-next');
  });

  it('keyboard: l trigger forwards', () => {
    triggerKeyEvent('@forwardButton', {key: 'l'});
    checkTime(10);
  });

  it('keyboard: j trigger playback', () => {
    triggerKeyEvent('@forwardButton', {key: 'l'});
    triggerKeyEvent('@forwardButton', {key: 'l'});
    triggerKeyEvent('@forwardButton', {key: 'j'});
    checkTime(10);
  });
});
