import React from 'react';
import {fireEvent, act} from '@testing-library/react';
import {renderWithTheme, renderWithImplementation} from '../../test/test-utils';
import {AudioPlayer} from '../audio-player';

const {version} = require('../../../package.json');

const liveAudioProps = {
  src: 'https://radio.talkradio.co.uk/stream',
  title: 'The Breakfast Show with Giles Coren',
  captionSrc: 'captions.vtt',
  live: true,
  popoutHref: 'www.popout-player.example.com',
  children: <div>Well hello there children!!!</div>,
};

const recordedAudioProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  title: 'The Breakfast Show with Giles Coren',
  captionSrc: 'captions.vtt',
  autoplay: false,
  children: <div>Well hello there children!!!</div>,
};

const liveTrackingOutputObject = {
  context: {},
  originator: 'audio-player-play-button',
  trigger: 'click',
  media_player: `newskit-audio-player-${version}`,
  media_type: 'audio',
};

const recordedTrackingOutputObject = {
  context: {},
  originator: 'audio-player-play-button',
  trigger: 'click',
  media_player: `newskit-audio-player-${version}`,
  media_duration: '00:00',
  media_type: 'audio',
  media_milestone: '2',
  media_offset: '00:00',
  media_segment: 'MockMediaSegment',
};

jest.mock('../../utils/calculate-string-percentage', () => () => '2');

jest.mock('../utils', () => {
  const originalModule = jest.requireActual('../utils');
  return {
    ...originalModule,
    getMediaSegment: jest.fn(() => 'MockMediaSegment'),
  };
});

let mockGetTrackBackground: jest.Mock;
jest.mock('react-range', () => {
  mockGetTrackBackground = jest.fn().mockReturnValue('#ffff00');
  const actual = jest.requireActual('react-range');
  return {
    ...actual,
    getTrackBackground: mockGetTrackBackground,
  };
});

let mockAudioElementFunctions: any = {};
jest.mock('../audio-element', () => ({
  AudioElement: ({
    captionSrc,
    src,
    title,
    playing,
    'data-testid': dataTestId,
    volume,
    newTime,
    ...restProps
  }: any) => {
    mockAudioElementFunctions = restProps;

    mockAudioElementFunctions.onDurationChange({
      target: {
        duration: 60,
      },
    });

    return (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <audio data-testid="mock-audio-element" {...restProps}>
        {JSON.stringify(
          {
            src,
            captionSrc,
            title,
            playing,
            volume,
            newTime,
            dataTestId,
          },
          null,
          2,
        )}
      </audio>
    );
  },
}));

describe('Audio Player', () => {
  test('live player renders as expected', () => {
    const {asFragment} = renderWithTheme(AudioPlayer, liveAudioProps);
    expect(asFragment()).toMatchSnapshot();
  });

  test('recorded player renders and behaves as expected', () => {
    const onNextTrack = jest.fn();
    const onPreviousTrack = jest.fn();
    const {asFragment, getByTestId} = renderWithTheme(AudioPlayer, {
      ...recordedAudioProps,
      onNextTrack,
      onPreviousTrack,
    });

    const audioElement = getByTestId('mock-audio-element') as HTMLAudioElement;

    // Audio element expected props
    expect(audioElement).toMatchInlineSnapshot(`
      <audio
        data-testid="mock-audio-element"
      >
        {
        "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "captionSrc": "captions.vtt",
        "title": "The Breakfast Show with Giles Coren",
        "playing": false,
        "volume": 0.7,
        "newTime": -1,
        "dataTestId": "audio-player"
      }
      </audio>
    `);

    // Play and mute
    fireEvent.click(getByTestId('audio-player-play-button'));
    fireEvent.click(getByTestId('mute-button'));
    expect(audioElement).toMatchInlineSnapshot(`
            <audio
              data-testid="mock-audio-element"
            >
              {
              "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
              "captionSrc": "captions.vtt",
              "title": "The Breakfast Show with Giles Coren",
              "playing": true,
              "volume": 0,
              "newTime": -1,
              "dataTestId": "audio-player"
            }
            </audio>
        `);

    // Move forward to 5 seconds
    for (let i = 0; i < 5; i += 1) {
      fireEvent.keyDown(getByTestId('audio-slider-thumb'), {
        key: 'ArrowRight',
        code: 39,
      });
    }
    // Track position 5 or less, should go to previous track
    fireEvent.click(getByTestId('audio-player-skip-previous'));
    expect(onPreviousTrack).toHaveBeenCalled();

    // Pause and move slider forward 10 seconds
    fireEvent.click(getByTestId('audio-player-play-button'));
    fireEvent.keyDown(getByTestId('audio-slider-thumb'), {
      key: 'PageUp',
      code: 33,
    });
    expect(audioElement).toMatchInlineSnapshot(`
            <audio
              data-testid="mock-audio-element"
            >
              {
              "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
              "captionSrc": "captions.vtt",
              "title": "The Breakfast Show with Giles Coren",
              "playing": false,
              "volume": 0,
              "newTime": 15,
              "dataTestId": "audio-player"
            }
            </audio>
        `);

    // Track position greater than 5, previous track button should reset position back to 0
    onPreviousTrack.mockReset();
    fireEvent.click(getByTestId('audio-player-skip-previous'));
    expect(onPreviousTrack).not.toHaveBeenCalled();
    expect(audioElement).toMatchInlineSnapshot(`
            <audio
              data-testid="mock-audio-element"
            >
              {
              "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
              "captionSrc": "captions.vtt",
              "title": "The Breakfast Show with Giles Coren",
              "playing": false,
              "volume": 0,
              "newTime": 0,
              "dataTestId": "audio-player"
            }
            </audio>
        `);

    // Increase volume 0.1, and click forward 20 seconds
    fireEvent.keyDown(getByTestId('volume-control-thumb'), {
      key: 'ArrowUp',
      code: 38,
    });
    fireEvent.click(getByTestId('audio-player-forward'));
    fireEvent.click(getByTestId('audio-player-forward'));
    expect(audioElement).toMatchInlineSnapshot(`
            <audio
              data-testid="mock-audio-element"
            >
              {
              "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
              "captionSrc": "captions.vtt",
              "title": "The Breakfast Show with Giles Coren",
              "playing": false,
              "volume": 0.1,
              "newTime": 20,
              "dataTestId": "audio-player"
            }
            </audio>
        `);

    // Click back 10 seconds and play from OS controls
    fireEvent.click(getByTestId('audio-player-backward'));
    fireEvent.play(audioElement);
    expect(audioElement).toMatchInlineSnapshot(`
            <audio
              data-testid="mock-audio-element"
            >
              {
              "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
              "captionSrc": "captions.vtt",
              "title": "The Breakfast Show with Giles Coren",
              "playing": true,
              "volume": 0.1,
              "newTime": 10,
              "dataTestId": "audio-player"
            }
            </audio>
        `);

    // Pause from OS controls
    fireEvent.pause(audioElement);
    expect(audioElement).toMatchInlineSnapshot(`
            <audio
              data-testid="mock-audio-element"
            >
              {
              "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
              "captionSrc": "captions.vtt",
              "title": "The Breakfast Show with Giles Coren",
              "playing": false,
              "volume": 0.1,
              "newTime": 10,
              "dataTestId": "audio-player"
            }
            </audio>
        `);

    fireEvent.click(getByTestId('audio-player-skip-next'));
    expect(onNextTrack).toHaveBeenCalled();

    // Test track background is generated as expected
    // (we can't rely on the style in a snapshot as js-dom thinks gradients
    // are invalid background colours and strips the style tag out. So we mock
    // out the getTrackBackground util to return a working mock style)
    act(() => {
      const bufferedStartData = [1, 9, 20];
      const bufferedEndData = [5, 14, 20];
      mockAudioElementFunctions.onProgress({
        target: {
          buffered: {
            length: 3,
            start: jest
              .fn()
              .mockImplementation(index => bufferedStartData[index]),
            end: jest.fn().mockImplementation(index => bufferedEndData[index]),
          },
        },
      });
    });
    expect(mockGetTrackBackground).toHaveBeenCalledWith({
      colors: ['#0A68C1', '#e4e4e4', '#f0f0f0', '#e4e4e4', '#f0f0f0'],
      max: 60,
      min: 0,
      values: [10, 14, 20, 20],
    });

    // Audio player snapshot last (so that buffering is included)
    expect(asFragment()).toMatchSnapshot();

    // Update slider position and snapshot to check slider updated
    audioElement.currentTime = 35.123;
    fireEvent.timeUpdate(audioElement);
    expect(getByTestId('audio-slider-thumb')).toMatchSnapshot(
      'after time update',
    );
    // Time should round to nearest second (so we don't upate slider value needlessly)
    audioElement.currentTime = 35.45;
    fireEvent.timeUpdate(audioElement);
    expect(getByTestId('audio-slider-thumb')).toMatchSnapshot(
      'after time update',
    );

    // Reset time to 0 and move backwards - should not pass invalid time, should pass min time 0
    fireEvent.click(getByTestId('audio-player-skip-previous'));
    fireEvent.click(getByTestId('audio-player-backward'));
    fireEvent.play(audioElement);
    expect(audioElement).toMatchInlineSnapshot(`
            <audio
              data-testid="mock-audio-element"
            >
              {
              "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
              "captionSrc": "captions.vtt",
              "title": "The Breakfast Show with Giles Coren",
              "playing": true,
              "volume": 0.1,
              "newTime": 0,
              "dataTestId": "audio-player"
            }
            </audio>
        `);

    // Move forward to the end of the track - should not pass invalid time, should pass max time 60
    for (let i = 0; i < 7; i += 1) {
      fireEvent.click(getByTestId('audio-player-forward'));
    }
    fireEvent.play(audioElement);
    expect(audioElement).toMatchInlineSnapshot(`
            <audio
              data-testid="mock-audio-element"
            >
              {
              "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
              "captionSrc": "captions.vtt",
              "title": "The Breakfast Show with Giles Coren",
              "playing": true,
              "volume": 0.1,
              "newTime": 60,
              "dataTestId": "audio-player"
            }
            </audio>
        `);
  });

  describe('Instrumentation tests should', () => {
    test('raise event when paused', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayer,
        liveAudioProps,
        fireEventSpy,
      );
      const expectedObject = {
        ...liveTrackingOutputObject,
        originator: 'audio-player-stop-button',
        trigger: 'click',
      };

      const playStop = getByTestId('audio-player-play-button');
      fireEvent.click(playStop);
      fireEvent.click(playStop);

      expect(fireEventSpy).toHaveBeenLastCalledWith(expectedObject);
    });
  });

  test('raise event when played', () => {
    const fireEventSpy = jest.fn();
    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      liveAudioProps,
      fireEventSpy,
    );

    const playButton = getByTestId('audio-player-play-button');
    fireEvent.click(playButton);

    expect(fireEventSpy).toHaveBeenLastCalledWith(liveTrackingOutputObject);
  });

  test('raise event when popout button is clicked and audio player should pause', () => {
    const fireEventSpy = jest.fn();
    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      liveAudioProps,
      fireEventSpy,
    );

    const expectedObject = {
      ...liveTrackingOutputObject,
      originator: 'audio-player-popout',
      trigger: 'click',
    };

    const playButton = getByTestId('audio-player-play-button');
    const popoutButton = getByTestId('audio-player-popout');

    fireEvent.click(playButton);
    fireEvent.click(popoutButton);
    expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
  });

  test('raise event when audio player is paused and the popout button is clicked', () => {
    const fireEventSpy = jest.fn();
    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      liveAudioProps,
      fireEventSpy,
    );

    const expectedObject = {
      ...liveTrackingOutputObject,
      originator: 'audio-player-popout',
      trigger: 'click',
    };

    const popoutButton = getByTestId('audio-player-popout');

    fireEvent.click(popoutButton);
    expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
  });

  test('raise event when paused and live is true', () => {
    const fireEventSpy = jest.fn();
    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      liveAudioProps,
      fireEventSpy,
    );
    const expectedObject = {
      ...liveTrackingOutputObject,
      originator: 'audio-player-stop-button',
      trigger: 'click',
    };

    const playStop = getByTestId('audio-player-play-button');
    fireEvent.click(playStop);
    fireEvent.click(playStop);

    expect(fireEventSpy).toHaveBeenLastCalledWith(expectedObject);
  });

  test('raise event when skip forward button is clicked', () => {
    const fireEventSpy = jest.fn();
    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      recordedAudioProps,
      fireEventSpy,
    );

    const forwardButton = getByTestId('audio-player-forward');
    fireEvent.click(forwardButton);

    expect(fireEventSpy).toHaveBeenCalledWith({
      ...recordedTrackingOutputObject,
      originator: 'audio-player-skip-forward',
      trigger: 'click',
      event_navigation_name: 'forward skip',
    });
  });

  test('raise event when backward button is clicked', () => {
    const fireEventSpy = jest.fn();
    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      recordedAudioProps,
      fireEventSpy,
    );

    const backwardButton = getByTestId('audio-player-backward');
    fireEvent.click(backwardButton);

    expect(fireEventSpy).toHaveBeenCalledWith({
      ...recordedTrackingOutputObject,
      originator: 'audio-player-skip-backward',
      trigger: 'click',
      event_navigation_name: 'backward skip',
    });
  });

  test('raise event when the track has ended', () => {
    const fireEventSpy = jest.fn();
    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      recordedAudioProps,
      fireEventSpy,
    );

    const expectedObject = {
      ...recordedTrackingOutputObject,
      originator: 'audio-complete',
      trigger: 'end',
    };

    const player = getByTestId('mock-audio-element');
    fireEvent.ended(player);

    expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
  });

  test('raise event when audio player autoplays', () => {
    const fireEventSpy = jest.fn();
    recordedAudioProps.autoplay = true;
    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      recordedAudioProps,
      fireEventSpy,
    );

    const expectedObject = {
      ...recordedTrackingOutputObject,
      originator: 'audio-player-audio',
      trigger: 'start',
    };

    const play = getByTestId('audio-player-play-button');
    fireEvent.click(play);

    expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
    recordedAudioProps.autoplay = false;
  });

  test('raise event while the audio is being played', () => {
    const fireEventSpy = jest.fn();
    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      recordedAudioProps,
      fireEventSpy,
    );

    const expectedObject = {
      ...recordedTrackingOutputObject,
      originator: 'audio-player-audio',
      trigger: 'pulse',
      media_duration: '00:00',
    };

    const audioElement = getByTestId('mock-audio-element') as HTMLAudioElement;

    audioElement.currentTime = 1;
    fireEvent.durationChange(audioElement);
    fireEvent.timeUpdate(audioElement);

    expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
  });
});
