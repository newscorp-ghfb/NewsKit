import React from 'react';
import {fireEvent, act} from '@testing-library/react';
import {renderWithTheme, renderWithImplementation} from '../../test/test-utils';
import {AudioPlayer} from '..';
import {AudioPlayerProps} from '../types';
import {compileTheme, createTheme} from '../../theme';
import audioPlayerStylePresets from '../style-presets';

const version = '0.10.0';

const liveAudioProps: AudioPlayerProps = {
  src: 'https://radio.talkradio.co.uk/stream',
  title: 'The Breakfast Show with Giles Coren',
  captionSrc: 'captions.vtt',
  live: true,
  popoutHref: 'www.popout-player.example.com',
  children: <div>Well hello there children!!!</div>,
};

const recordedAudioProps: AudioPlayerProps = {
  src: '/audio_file_1.mp3',
  title: 'The Breakfast Show with Giles Coren',
  captionSrc: 'captions.vtt',
  autoPlay: false,
  children: <div>Well hello there children!!!</div>,
};

const liveTrackingOutputObject = {
  originator: 'audio-player-play-button',
  trigger: 'click',
  context: {
    media_player: `newskit-audio-player-${version}`,
    media_type: 'audio',
  },
};

const recordedTrackingOutputObject = {
  originator: 'audio-player-play-button',
  trigger: 'click',
  context: {
    media_player: `newskit-audio-player-${version}`,
    media_duration: '00:00',
    media_type: 'audio',
    media_milestone: '2',
    media_offset: '00:00',
    media_segment: 'MockMediaSegment',
  },
};

jest.mock('../../utils/calculate-string-percentage', () => () => '2');
jest.mock('../../version-number.json', () => ({version: '0.10.0'}));

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

describe('Audio Player', () => {
  const mediaElement = (window as any).HTMLMediaElement.prototype;
  let setTimeoutSpy: jest.SpyInstance;
  let clearTimeoutSpy: jest.SpyInstance;

  beforeAll(() => {
    ['duration', 'seekable', 'buffered'].forEach(k => {
      Object.defineProperty(mediaElement, k, {
        writable: true,
      });
    });
  });

  beforeEach(() => {
    ['load', 'play', 'pause'].forEach(k => {
      mediaElement[k] = jest.fn();
    });
    window.open = jest.fn();
    jest.useFakeTimers();
    setTimeoutSpy = jest.spyOn(global, 'setTimeout');
    clearTimeoutSpy = jest.spyOn(global, 'clearTimeout');
  });

  test('live player renders as expected', () => {
    const {asFragment} = renderWithTheme(AudioPlayer, liveAudioProps);
    expect(asFragment()).toMatchSnapshot();
  });

  test('recorded player renders as expected', () => {
    const {asFragment} = renderWithTheme(AudioPlayer, recordedAudioProps);
    expect(asFragment()).toMatchSnapshot();
  });

  test('recorded player renders with custom ariaLandmark', () => {
    const {asFragment} = renderWithTheme(AudioPlayer, {
      ...recordedAudioProps,
      ariaLandmark: 'audio player one',
    });
    expect(asFragment()).toMatchSnapshot();
  });

  test('play button loading state is phasing as expected', () => {
    const {getByTestId} = renderWithTheme(AudioPlayer, recordedAudioProps);

    // playButton should be in initial loading state
    expect(getByTestId('audio-player-play-button')).toMatchSnapshot();

    fireEvent.canPlay(getByTestId('audio-element'));

    // playButton should be enabled
    expect(getByTestId('audio-player-play-button')).toMatchSnapshot();

    fireEvent.waiting(getByTestId('audio-element'));
    act(() => {
      jest.advanceTimersByTime(750);
    });

    // playButton should go back to loading state
    expect(getByTestId('audio-player-play-button')).toMatchSnapshot();
  });

  test('play button loading timeout is cleared when unmounting', () => {
    const {getByTestId, unmount} = renderWithTheme(
      AudioPlayer,
      recordedAudioProps,
    );
    jest.clearAllTimers();
    jest.clearAllMocks();

    fireEvent.canPlay(getByTestId('audio-element'));

    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);

    fireEvent.waiting(getByTestId('audio-element'));

    expect(jest.getTimerCount()).toEqual(1);
    expect(setTimeoutSpy).toHaveBeenCalledTimes(1);
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(2);
    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalledTimes(3);
  });

  test('recorded player renders and behaves as expected', () => {
    const onNextTrack = jest.fn();
    const onPreviousTrack = jest.fn();
    const onPlay = jest.fn();
    const props = {
      ...recordedAudioProps,
      onPlay,
      onNextTrack,
      onPreviousTrack,
    };
    const {asFragment, getByTestId} = renderWithTheme(AudioPlayer, props);

    const audioElement = getByTestId('audio-element') as any;
    fireEvent.durationChange(audioElement, {
      target: {
        duration: 6610,
      },
    });

    // Play
    audioElement.play.mockReset();
    fireEvent.canPlay(getByTestId('audio-element'));
    fireEvent.click(getByTestId('audio-player-play-button'));
    expect(audioElement.play).toHaveBeenCalled();

    // Should default to 0.7
    expect(audioElement.volume).toEqual(0.7);

    // Mute
    fireEvent.click(getByTestId('mute-button'));
    expect(audioElement.volume).toEqual(0);

    // Move forward 1 second
    fireEvent.keyDown(getByTestId('audio-slider-thumb'), {
      key: 'ArrowRight',
      code: 39,
    });
    expect(audioElement.currentTime).toEqual(1);

    // Pause
    audioElement.pause.mockReset();
    fireEvent.click(getByTestId('audio-player-play-button'));
    expect(audioElement.pause).toHaveBeenCalled();

    // Move slider forward 10 seconds
    fireEvent.keyDown(getByTestId('audio-slider-thumb'), {
      key: 'PageUp',
      code: 33,
    });
    expect(audioElement.currentTime).toEqual(11);

    // Track position greater than 5, previous track button should reset position back to 0
    fireEvent.timeUpdate(audioElement);
    onPreviousTrack.mockReset();
    fireEvent.click(getByTestId('audio-player-skip-previous'));
    expect(onPreviousTrack).not.toHaveBeenCalled();
    expect(audioElement.currentTime).toEqual(0);

    // Increase volume 0.1
    fireEvent.keyDown(getByTestId('volume-control-thumb'), {
      key: 'ArrowUp',
      code: 38,
    });
    expect(audioElement.volume).toEqual(0.1);

    // Click forward 20 seconds
    fireEvent.click(getByTestId('audio-player-forward'));
    fireEvent.click(getByTestId('audio-player-forward'));
    expect(audioElement.currentTime).toEqual(20);

    // Click back 10 seconds
    fireEvent.click(getByTestId('audio-player-backward'));
    expect(audioElement.currentTime).toEqual(10);

    // Play from OS controls
    audioElement.play.mockReset();
    fireEvent.play(audioElement);
    expect(audioElement.play).toHaveBeenCalled();

    // Pause from OS controls
    audioElement.pause.mockReset();
    fireEvent.pause(audioElement);
    expect(audioElement.pause).toHaveBeenCalled();

    // Next track button click
    onNextTrack.mockReset();
    fireEvent.click(getByTestId('audio-player-skip-next'));
    expect(onNextTrack).toHaveBeenCalled();

    // Previous track button click (while track is less than 5 seconds in)
    audioElement.currentTime = 2;
    fireEvent.timeUpdate(audioElement);
    onPreviousTrack.mockReset();
    fireEvent.click(getByTestId('audio-player-skip-previous'));
    expect(onPreviousTrack).toHaveBeenCalled();

    // Set track forward for track bg tests below
    audioElement.currentTime = 10;
    fireEvent.timeUpdate(audioElement);

    // Test track background is generated as expected
    // (we can't rely on the style in a snapshot as js-dom thinks gradients
    // are invalid background colours and strips the style tag out. So we mock
    // out the getTrackBackground util to return a working mock style)
    audioElement.buffered = {
      length: 3,
      start: jest.fn().mockImplementation(index => [1, 9, 20][index]),
      end: jest.fn().mockImplementation(index => [5, 14, 20][index]),
    };
    fireEvent.progress(audioElement);

    const audioPlayerTheme = createTheme({
      name: 'audio-player',
      overrides: {
        stylePresets: audioPlayerStylePresets,
      },
    });

    const compiledNKLightThemeStylePresets = compileTheme(audioPlayerTheme)
      .stylePresets;

    const {audioPlayerSeekBarTrack} = compiledNKLightThemeStylePresets;
    const {audioPlayerSeekBarIndicator} = compiledNKLightThemeStylePresets;
    const {audioPlayerSeekBarBuffering} = compiledNKLightThemeStylePresets;

    expect(mockGetTrackBackground).toHaveBeenCalledWith({
      colors: [
        `${audioPlayerSeekBarIndicator.base!.backgroundColor}`, // indicator
        `${audioPlayerSeekBarBuffering.base!.backgroundColor}`, // buffered
        `${audioPlayerSeekBarTrack.base!.backgroundColor}`, // track background
        `${audioPlayerSeekBarBuffering.base!.backgroundColor}`, // buffered
        `${audioPlayerSeekBarTrack.base!.backgroundColor}`, // track background
      ],
      max: 6610,
      min: 0,
      values: [10, 14, 20, 20],
    });

    // Audio player snapshot last (so that buffering is included)
    expect(asFragment()).toMatchSnapshot();

    // Time should round to nearest second (so we don't update slider value needlessly)
    audioElement.currentTime = 35.45231;
    fireEvent.timeUpdate(audioElement);
    expect(getByTestId('audio-slider-thumb')).toMatchSnapshot();

    // Shouldn't be able to go past end of track
    audioElement.currentTime = 6610;
    fireEvent.timeUpdate(audioElement);
    fireEvent.click(getByTestId('audio-player-forward'));
    expect(audioElement.currentTime).toEqual(6610);

    // Shouldn't be able to go lower than start of track
    audioElement.currentTime = 0;
    fireEvent.timeUpdate(audioElement);
    fireEvent.click(getByTestId('audio-player-backward'));
    expect(audioElement.currentTime).toEqual(0);

    expect(onPlay).toHaveBeenCalled();
  });

  test('disablePreviousTrack prop behaves as expected', () => {
    const onPreviousTrack = jest.fn();
    const props = {
      ...recordedAudioProps,
      onPreviousTrack,
      disablePreviousTrack: true,
    };
    const {getByTestId} = renderWithTheme(AudioPlayer, props);
    const audioElement = getByTestId('audio-element') as any;

    fireEvent.durationChange(audioElement, {
      target: {
        duration: 60,
      },
    });
    audioElement.currentTime = 2;
    fireEvent.timeUpdate(audioElement);

    fireEvent.click(getByTestId('audio-player-skip-previous'));
    expect(onPreviousTrack).not.toHaveBeenCalled();
  });
  test('hides previousTrack as expected', () => {
    const props = {
      ...recordedAudioProps,
      hidePreviousTrack: true,
    };
    const {asFragment} = renderWithTheme(AudioPlayer, props);
    expect(asFragment()).toMatchSnapshot();
  });
  test('hides volume control as expected', () => {
    const props = {
      ...recordedAudioProps,
      hideVolumeControl: true,
    };
    const {asFragment} = renderWithTheme(AudioPlayer, props);
    expect(asFragment()).toMatchSnapshot();
  });
  test('hides seek buttons as expected', () => {
    const props = {
      ...recordedAudioProps,
      hideSeekButtons: true,
    };
    const {asFragment} = renderWithTheme(AudioPlayer, props);
    expect(asFragment()).toMatchSnapshot();
  });
  test('changing src maintains expected playback state', () => {
    const {getByTestId, rerender} = renderWithTheme(
      AudioPlayer,
      recordedAudioProps,
    );
    let audioElement: any = getByTestId('audio-element');

    const resetAndReRender = (props: Partial<AudioPlayerProps>) => {
      audioElement.play.mockReset();
      audioElement.pause.mockReset();

      rerender(<AudioPlayer {...recordedAudioProps} {...props} />);
      audioElement = getByTestId('audio-element');
    };

    // Not playing, no auto play, new track should be paused
    resetAndReRender({src: 'newtrack-1'});
    expect(audioElement.play).not.toHaveBeenCalled();
    expect(audioElement.pause).toHaveBeenCalled();

    // Playing, no auto play, new track should be played
    fireEvent.canPlay(getByTestId('audio-element'));
    fireEvent.click(getByTestId('audio-player-play-button'));
    resetAndReRender({src: 'newtrack-2'});
    expect(audioElement.play).toHaveBeenCalled();
    expect(audioElement.pause).not.toHaveBeenCalled();

    // Playing, with auto play, no need to call play/pause
    fireEvent.click(getByTestId('audio-player-play-button'));
    resetAndReRender({src: 'newtrack-3', autoPlay: true});
    expect(audioElement.play).not.toHaveBeenCalled();
    expect(audioElement.pause).not.toHaveBeenCalled();

    fireEvent.click(getByTestId('audio-player-play-button'));
    resetAndReRender({src: 'newtrack-4', autoPlay: true});
    expect(audioElement.play).not.toHaveBeenCalled();
    expect(audioElement.pause).not.toHaveBeenCalled();
  });

  test('recorded player renders with overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-audio-player-theme',
      overrides: {
        stylePresets: {
          customAudioPlayPauseButton: {
            base: {
              backgroundColor: 'transparent',
              borderRadius: '50%',
              iconColor: '#fff',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: '#243c46',
            },
            hover: {
              backgroundColor: '#243c46',
              borderStyle: 'none',
            },
            active: {
              backgroundColor: '#818f94',
              borderStyle: 'none',
            },
          },
          customAudioForwardButton: {
            base: {
              backgroundColor: 'transparent',
              iconColor: '#fff',
            },
          },
          customAudioPlayerReplayButton: {
            base: {
              backgroundColor: 'transparent',
              iconColor: '#fff',
            },
          },
          customAudioNextButton: {
            base: {
              backgroundColor: 'transparent',
              iconColor: '#fff',
            },
          },
          customAudioPlayerPreviousButton: {
            base: {
              backgroundColor: 'transparent',
            },
            active: {
              color: 'white',
              iconColor: 'white',
            },
            disabled: {
              iconColor: '#9EA9AC',
            },
          },
          customAudioPopoutButton: {
            base: {
              backgroundColor: 'transparent',
              iconColor: '#fff',
            },
          },
          customAudioPlayerThumb: {
            base: {
              backgroundColor: '#f6807e',
              borderRadius: '50%',
            },
          },
          customAudioPlayerSeekBarTrack: {
            base: {
              backgroundColor: '#243c46',
            },
          },
          customAudioPlayerSeekBarIndicator: {
            base: {
              backgroundColor: '#0c2731',
            },
          },
          customAudioPlayerLabels: {
            base: {
              backgroundColor: 'transparent',
              iconColor: '#fff',
              color: '#fff',
            },
          },
          customAudioPlayerSeekBarBuffering: {
            base: {
              backgroundColor: 'rgb(51, 51, 51)',
            },
          },
          customVolumeControlButton: {
            base: {
              backgroundColor: 'transparent',
              iconColor: '#fff',
            },
          },
        },
      },
    });

    const {asFragment} = renderWithTheme(
      AudioPlayer,
      {
        ...recordedAudioProps,
        overrides: {
          seekBar: {
            slider: {
              track: {
                stylePreset: 'customAudioPlayerSeekBarTrack',
                size: 'sizing030',
              },
              indicator: {
                stylePreset: 'customAudioPlayerSeekBarIndicator',
              },
              thumb: {
                stylePreset: 'customAudioPlayerThumb',
                size: 'sizing050',
              },
              thumbLabel: {
                stylePreset: 'customAudioPlayerLabels',
              },
              labels: {
                stylePreset: 'customAudioPlayerLabels',
                typographyPreset: 'utilityMeta010',
              },
            },
            buffering: {
              stylePreset: 'customAudioPlayerSeekBarBuffering',
            },
          },
          controls: {
            space: 'space040',
            previousButton: {
              stylePreset: 'customAudioPlayerPreviousButton',
            },
            replayButton: {
              stylePreset: 'customAudioPlayerReplayButton',
            },
            playPauseButton: {
              stylePreset: 'customAudioPlayPauseButton',
            },
            forwardButton: {
              stylePreset: 'customAudioForwardButton',
            },
            nextButton: {
              stylePreset: 'customAudioNextButton',
            },
            popoutButton: {
              stylePreset: 'customAudioPopoutButton',
            },
          },
          volumeControl: {
            slider: {
              track: {
                stylePreset: 'customAudioPlayerSeekBarTrack',
                size: 'sizing010',
              },
              indicator: {
                stylePreset: 'customAudioPlayerSeekBarIndicator',
              },
              thumb: {
                stylePreset: 'customAudioPlayerThumb',
                size: 'sizing040',
              },
              thumbLabel: {
                stylePreset: 'customAudioPlayerLabels',
              },
              labels: {
                stylePreset: 'customAudioPlayerLabels',
              },
            },
            button: {
              stylePreset: 'customVolumeControlButton',
            },
          },
        },
      },
      myCustomTheme,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test('recorded player renders with logical props overrides', () => {
    const {asFragment} = renderWithTheme(AudioPlayer, {
      ...recordedAudioProps,
      overrides: {
        paddingBlock: '30px',
        marginBlock: '30px',
      },
    });
    expect(asFragment()).toMatchSnapshot();
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
      fireEvent.canPlay(getByTestId('audio-element'));
      fireEvent.click(playStop);
      fireEvent.click(playStop);

      expect(fireEventSpy).toHaveBeenLastCalledWith(expectedObject);
    });

    test('raise event when played', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayer,
        liveAudioProps,
        fireEventSpy,
      );

      const playButton = getByTestId('audio-player-play-button');
      fireEvent.canPlay(getByTestId('audio-element'));
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
      fireEvent.canPlay(getByTestId('audio-element'));
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
        context: {
          event_navigation_name: 'forward skip',
          ...recordedTrackingOutputObject.context,
        },
        originator: 'audio-player-skip-forward',
        trigger: 'click',
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
        context: {
          event_navigation_name: 'backward skip',
          ...recordedTrackingOutputObject.context,
        },
        originator: 'audio-player-skip-backward',
        trigger: 'click',
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

      const player = getByTestId('audio-element');
      fireEvent.ended(player);

      expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
    });

    test('raise event when audio player autoplays', () => {
      const fireEventSpy = jest.fn();
      recordedAudioProps.autoPlay = true;
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
      fireEvent.canPlay(getByTestId('audio-element'));
      fireEvent.click(play);

      expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
      recordedAudioProps.autoPlay = false;
    });

    test('raise event while the audio is being played', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayer,
        recordedAudioProps,
        fireEventSpy,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      fireEvent.durationChange(audioElement, {
        target: {
          duration: 60,
        },
      });
      audioElement.currentTime = 1;
      fireEvent.timeUpdate(audioElement);

      const expectedObject = {
        ...recordedTrackingOutputObject,
        originator: 'audio-player-audio',
        trigger: 'pulse',
        context: {
          media_duration: '01:00',
          media_milestone: '2',
          media_offset: '00:00',
          media_player: 'newskit-audio-player-0.10.0',
          media_segment: 'MockMediaSegment',
          media_type: 'audio',
        },
      };
      expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
    });

    test('should not raise play event if play called twice', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayer,
        recordedAudioProps,
        fireEventSpy,
      );
      const audioElement = getByTestId('audio-element') as HTMLAudioElement;

      // Two play calls, should cause one event
      fireEvent.canPlay(getByTestId('audio-element'));
      fireEvent.play(audioElement);
      fireEvent.play(audioElement);

      expect(fireEventSpy).toHaveBeenCalledTimes(1);
    });

    test('should not raise pause event if play called twice', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayer,
        recordedAudioProps,
        fireEventSpy,
      );
      const audioElement = getByTestId('audio-element') as HTMLAudioElement;

      fireEvent.play(audioElement);
      fireEventSpy.mockReset();

      // Two pause calls, should cause one event
      fireEvent.pause(audioElement);
      fireEvent.pause(audioElement);

      expect(fireEventSpy).toHaveBeenCalledTimes(1);
    });
  });
});
