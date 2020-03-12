import React from 'react';
import {fireEvent, act} from '@testing-library/react';
import {renderWithTheme, renderWithImplementation} from '../../test/test-utils';
import {AudioPlayer} from '../audio-player';
import {EventTrigger} from '../../instrumentation';

const liveAudioProps = {
  src: 'https://radio.talkradio.co.uk/stream',
  title: 'The Breakfast Show with Giles Coren',
  captionSrc: 'captions.vtt',
  popoutHref: 'www.popout-player.example.com',
  children: <div>Well hello there children!!!</div>,
};

const recordedAudioProps = {
  src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  title: 'The Breakfast Show with Giles Coren',
  captionSrc: 'captions.vtt',
  children: <div>Well hello there children!!!</div>,
};

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
                                "volume": 1,
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
    fireEvent.click(getByTestId('audio-player-replay'));
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

    // Pause and volume change from OS controls
    fireEvent.pause(audioElement);
    audioElement.volume = 0.6;
    fireEvent.volumeChange(audioElement);
    expect(audioElement).toMatchInlineSnapshot(`
      <audio
        data-testid="mock-audio-element"
      >
        {
        "src": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        "captionSrc": "captions.vtt",
        "title": "The Breakfast Show with Giles Coren",
        "playing": false,
        "volume": 0.6,
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
    fireEvent.click(getByTestId('audio-player-replay'));
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
                  "volume": 0.6,
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
                  "volume": 0.6,
                  "newTime": 60,
                  "dataTestId": "audio-player"
                }
                </audio>
            `);
  });

  test('fires instrumentation events as expected', () => {
    const fireEventSpy = jest.fn();
    const onNextTrack = jest.fn();
    const onPreviousTrack = jest.fn();

    const {getByTestId} = renderWithImplementation(
      AudioPlayer,
      {
        ...recordedAudioProps,
        onNextTrack,
        onPreviousTrack,
      },
      fireEventSpy,
    );
    const expectedData = {
      src: recordedAudioProps.src,
      title: recordedAudioProps.title,
    };

    const audioElement = getByTestId('mock-audio-element') as HTMLAudioElement;

    // Player events

    fireEventSpy.mockReset();
    fireEvent.play(audioElement);
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player',
      trigger: EventTrigger.Start,
      data: expectedData,
    });
    // Trying to play when already playing should not cause repeated event
    fireEvent.play(audioElement);
    expect(fireEventSpy).toHaveBeenCalledTimes(1);

    fireEventSpy.mockReset();
    fireEvent.pause(audioElement);
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player',
      trigger: EventTrigger.Stop,
      data: expectedData,
    });
    // Trying to pause when already paused should not cause repeated event
    fireEvent.pause(audioElement);
    expect(fireEventSpy).toHaveBeenCalledTimes(1);

    fireEventSpy.mockReset();
    fireEvent.ended(audioElement);
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player',
      trigger: EventTrigger.End,
      data: expectedData,
    });

    // Button events

    fireEventSpy.mockReset();
    fireEvent.click(getByTestId('audio-player-play-button'));
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-play-button',
      trigger: EventTrigger.Click,
      data: expectedData,
    });

    fireEventSpy.mockReset();
    fireEvent.click(getByTestId('audio-player-skip-next'));
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-skip-next-button',
      trigger: EventTrigger.Click,
      data: expectedData,
    });

    fireEventSpy.mockReset();
    fireEvent.click(getByTestId('audio-player-skip-previous'));
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-skip-previous-button',
      trigger: EventTrigger.Click,
      data: expectedData,
    });

    fireEventSpy.mockReset();
    fireEvent.click(getByTestId('audio-player-forward'));
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-forward-button',
      trigger: EventTrigger.Click,
      data: expectedData,
    });

    fireEventSpy.mockReset();
    fireEvent.click(getByTestId('audio-player-replay'));
    expect(fireEventSpy).toHaveBeenCalledWith({
      originator: 'audio-player-replay-button',
      trigger: EventTrigger.Click,
      data: expectedData,
    });
  });
});
