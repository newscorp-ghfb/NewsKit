/* eslint-disable no-console */
import React from 'react';
import {fireEvent, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  renderWithImplementation,
  renderWithTheme,
  renderWithThemeInBody,
} from '../../test/test-utils';
import {AudioPlayerComposableProps} from '../types';
import {formatFunction} from '../components/time-display/utils';
import {compileTheme, createTheme} from '../../theme';
import seekBarStylePresets from '../components/seek-bar/style-presets';
import {Button, ButtonSize} from '../../button';
import {
  AudioPlayerComposable,
  AudioPlayerTimeDisplay,
  AudioPlayerPlayPauseButton,
  AudioPlayerSkipNextButton,
  AudioPlayerSkipPreviousButton,
  AudioPlayerForwardButton,
  AudioPlayerReplayButton,
  AudioPlayerSeekBar,
  AudioPlayerVolumeControl,
  AudioPlayerPlaybackSpeedControl,
} from '..';

const version = '0.10.0';

const liveAudioProps: AudioPlayerComposableProps = {
  src: 'https://radio.talkradio.co.uk/stream',
  title: 'The Breakfast Show with Giles Coren',
  live: true,
  children: <AudioPlayerPlayPauseButton />,
};

const recordedAudioProps: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  autoPlay: false,
  children: (
    <>
      <AudioPlayerSeekBar />
      <AudioPlayerPlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <AudioPlayerTimeDisplay data-testid="audio-player-time-display" />
      <Button href="/">read more</Button>
      <AudioPlayerVolumeControl />
      <AudioPlayerSkipNextButton
        onClick={() => {
          console.log('customer click function for skip next');
        }}
      />
      <AudioPlayerSkipPreviousButton
        onClick={() => {
          console.log('customer click function for skip prev');
        }}
      />
      <AudioPlayerForwardButton
        onClick={() => {
          console.log('customer click function for forward');
        }}
      />
      <AudioPlayerReplayButton
        onClick={() => {
          console.log('customer click function for replay');
        }}
      />
    </>
  ),
};

const AudioPropsAndVolumeControlWithInitialVolumeCollapsed: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  initialVolume: 0.2,
  children: (
    <>
      <AudioPlayerVolumeControl collapsed />
    </>
  ),
};

const AudioPropsWithInitialTime: AudioPlayerComposableProps = {
  initialTime: 50,
  src: '/audio_file_1.mp3',
  children: (
    <>
      <AudioPlayerTimeDisplay />
      <AudioPlayerSeekBar />
    </>
  ),
};

const AudioPropsAndVolumeControlVertical: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  initialVolume: 0.2,
  children: (
    <>
      <AudioPlayerVolumeControl layout="vertical" />
    </>
  ),
};

const AudioPropsAndVolumeControlOverridenShortcuts: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  children: (
    <>
      <AudioPlayerVolumeControl keyboardShortcuts={{muteToggle: 'y'}} />
    </>
  ),
};

const AudioPropsAndPlaybackSpeedPopover: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  children: (
    <>
      <AudioPlayerPlaybackSpeedControl />
    </>
  ),
};

const AudioPropsAndPlaybackSpeedModal: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  children: (
    <>
      <AudioPlayerPlaybackSpeedControl useModal />
    </>
  ),
};

const AudioPropsAndPlaybackSpeedWithOverrides: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  children: (
    <>
      <AudioPlayerPlaybackSpeedControl
        buttonSize={ButtonSize.Medium}
        overrides={{
          iconButton: {
            stylePreset: 'customButtonStylePreset',
          },
        }}
      />
    </>
  ),
};

const recordedAudioPropsAutoplay: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  autoPlay: true,
  children: (
    <>
      <AudioPlayerSeekBar />
      <AudioPlayerPlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
    </>
  ),
};

const recordedTrackingOutputObject = {
  originator: 'audio-player-play-pause-button',
  trigger: 'click',
  context: {
    media_player: `newskit-audio-player-${version}`,
    media_duration: '00:00',
    media_type: 'audio',
    // TODO media_milestone should be "2" once implemented the control
    media_milestone: 'NaN',
    media_offset: '00:00',
    media_segment: 'MockMediaSegment',
  },
};

const liveTrackingOutputObject = {
  originator: 'audio-player-play-button',
  trigger: 'click',
  context: {
    media_player: `newskit-audio-player-${version}`,
    media_type: 'audio',
  },
};

const recordedSeekBarOverrides: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  autoPlay: false,
  children: (
    <>
      <AudioPlayerSeekBar
        overrides={{
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
          },
          buffering: {
            stylePreset: 'customAudioPlayerSeekBarBuffering',
          },
        }}
      />
      <AudioPlayerPlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <AudioPlayerTimeDisplay
        format={({currentTime, duration}) =>
          formatFunction({currentTime, duration})
        }
      />
    </>
  ),
};

const recordedTimeDisplayOverrides: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  autoPlay: true,
  children: (
    <>
      <AudioPlayerPlayPauseButton
        onClick={() => {
          console.log('customer click function');
        }}
      />
      <AudioPlayerTimeDisplay overrides={{stylePreset: 'myTimeDisplay'}} />
    </>
  ),
};

const audioPlayerSecondsProps: AudioPlayerComposableProps = {
  src: '/audio_file_1.mp3',
  children: (
    <>
      <AudioPlayerForwardButton
        seconds={20}
        onClick={() => {
          console.log('customer click function for forward');
        }}
      />
      <AudioPlayerReplayButton
        seconds={20}
        onClick={() => {
          console.log('customer click function for replay');
        }}
      />
    </>
  ),
};

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

describe('Audio Player Composable', () => {
  const mediaElement = (window as any).HTMLMediaElement.prototype;

  beforeAll(() => {
    ['duration', 'seekable', 'buffered', 'paused', 'volume'].forEach(k => {
      Object.defineProperty(mediaElement, k, {
        writable: true,
      });
    });
  });

  beforeEach(() => {
    mediaElement.load = jest.fn(() => {
      mediaElement.duration = 100;
    });
    mediaElement.play = jest.fn(() => {
      mediaElement.paused = false;
    });
    mediaElement.pause = jest.fn(() => {
      mediaElement.paused = true;
    });
    mediaElement.onDurationChange = jest.fn(val => {
      mediaElement.duration = val;
    });
    mediaElement.onVolumeChange = jest.fn(val => {
      mediaElement.volume = val;
    });
    window.open = jest.fn();
    jest.useFakeTimers('legacy');
  });

  it('should render with no errors', () => {
    const {asFragment} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly when in autoplay', () => {
    const {asFragment} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioPropsAutoplay,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should play and pause on playPause button click', () => {
    const {getByTestId} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );

    const audioElement = getByTestId('audio-element') as HTMLAudioElement;
    const playPauseButton = getByTestId('audio-player-play-pause-button');

    fireEvent.canPlay(getByTestId('audio-element'));
    fireEvent.click(playPauseButton);
    expect(audioElement.paused).toBe(false);
    fireEvent.click(playPauseButton);
    expect(audioElement.paused).toBe(true);
  });

  it('should have play or stop label when live', () => {
    const {getByTestId} = renderWithTheme(
      AudioPlayerComposable,
      liveAudioProps,
    );

    const playPauseButton = getByTestId('audio-player-play-pause-button');

    fireEvent.canPlay(getByTestId('audio-element'));
    fireEvent.click(playPauseButton);
    expect(playPauseButton.getAttribute('aria-label')).toBe('Stop');
    fireEvent.click(playPauseButton);
    expect(playPauseButton.getAttribute('aria-label')).toBe('Play');
  });

  it('should have play or pause label when recorded', () => {
    const {getByTestId} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );

    const playPauseButton = getByTestId('audio-player-play-pause-button');

    fireEvent.canPlay(getByTestId('audio-element'));
    fireEvent.click(playPauseButton);
    expect(playPauseButton.getAttribute('aria-label')).toBe('Pause');
    fireEvent.click(playPauseButton);
    expect(playPauseButton.getAttribute('aria-label')).toBe('Play');
  });

  it('should skip 10 seconds with forward or replay button button click', () => {
    const {getByTestId} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );

    const audioElement = getByTestId('audio-element') as HTMLAudioElement;
    fireEvent.durationChange(audioElement, {
      target: {
        duration: 6610,
      },
    });
    const forwardButton = getByTestId('audio-player-forward-button');
    const replayButton = getByTestId('audio-player-replay-button');
    fireEvent.canPlay(getByTestId('audio-element'));
    fireEvent.click(getByTestId('audio-player-play-pause-button'));

    expect(audioElement.play).toHaveBeenCalled();

    fireEvent.click(forwardButton);
    fireEvent.click(forwardButton);

    expect(audioElement.currentTime).toEqual(20);

    fireEvent.click(replayButton);
    expect(audioElement.currentTime).toEqual(10);
  });

  it('should use custom seconds props for forward and replay button', () => {
    const {getByTestId} = renderWithTheme(
      AudioPlayerComposable,
      audioPlayerSecondsProps,
    );
    const audioElement = getByTestId('audio-element') as HTMLAudioElement;
    fireEvent.durationChange(audioElement, {
      target: {
        duration: 6610,
      },
    });
    const forwardButton = getByTestId('audio-player-forward-button');
    const replayButton = getByTestId('audio-player-replay-button');
    fireEvent.click(forwardButton);
    fireEvent.click(forwardButton);
    expect(audioElement.currentTime).toEqual(40);
    fireEvent.click(replayButton);
    expect(audioElement.currentTime).toEqual(20);
  });

  it('should phasing playPause button loading state as expected', () => {
    const {getByTestId} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );
    const playPauseButton = getByTestId('audio-player-play-pause-button');
    const audioElement = getByTestId('audio-element') as HTMLAudioElement;

    fireEvent.click(playPauseButton);
    // playButton should be in initial loading state
    expect(playPauseButton).toMatchSnapshot();

    fireEvent.canPlay(getByTestId('audio-element'));

    // playButton should be enabled
    expect(playPauseButton).toMatchSnapshot();

    fireEvent.waiting(audioElement);
    act(() => {
      jest.advanceTimersByTime(750);
    });
    // playButton should go back to loading state
    expect(playPauseButton).toMatchSnapshot();
  });

  it('should preserve playing state when changing track', () => {
    const {getByTestId, rerender} = renderWithTheme(
      AudioPlayerComposable,
      recordedAudioProps,
    );

    let audioElement: any = getByTestId('audio-element');

    const resetAndReRender = (props: Partial<AudioPlayerComposableProps>) => {
      audioElement.play.mockReset();
      audioElement.pause.mockReset();

      rerender(<AudioPlayerComposable {...recordedAudioProps} {...props} />);
      audioElement = getByTestId('audio-element');
    };

    // Not playing, no auto play, new track should be paused
    resetAndReRender({src: 'newtrack-1'});
    expect(audioElement.play).not.toHaveBeenCalled();
    expect(audioElement.pause).toHaveBeenCalled();

    // Playing, no auto play, new track should be played
    fireEvent.canPlay(getByTestId('audio-element'));
    fireEvent.click(getByTestId('audio-player-play-pause-button'));
    resetAndReRender({src: 'newtrack-2'});
    expect(audioElement.play).toHaveBeenCalled();
    expect(audioElement.pause).not.toHaveBeenCalled();

    // Playing, with auto play, no need to call play/pause
    fireEvent.click(getByTestId('audio-player-play-pause-button'));
    resetAndReRender({src: 'newtrack-3', autoPlay: true});
    expect(audioElement.play).not.toHaveBeenCalled();
    expect(audioElement.pause).not.toHaveBeenCalled();

    fireEvent.click(getByTestId('audio-player-play-pause-button'));
    resetAndReRender({src: 'newtrack-4', autoPlay: true});
    expect(audioElement.play).not.toHaveBeenCalled();
    expect(audioElement.pause).not.toHaveBeenCalled();
  });

  it('renders with TimeDisplay label overrides', () => {
    const myCustomTheme = createTheme({
      name: 'my-custom-seek-bar-theme',
      overrides: {
        stylePresets: {
          myTimeDisplay: {
            base: {
              backgroundColor: '{{colors.interactivePrimary030}}',
            },
          },
        },
      },
    });
    const {asFragment} = renderWithTheme(
      AudioPlayerComposable,
      recordedTimeDisplayOverrides,
      myCustomTheme,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it('calls event handler passed from the props', () => {
    const onDurationChange = jest.fn();
    const props = {
      ...recordedAudioProps,
      onDurationChange,
    };
    const {getByTestId} = renderWithTheme(AudioPlayerComposable, props);
    fireEvent.durationChange(getByTestId('audio-element'), {
      target: {duration: 10},
    });

    expect(onDurationChange).toHaveBeenCalledTimes(1);
    expect(onDurationChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({duration: 10}),
      }),
    );
  });

  it('skip-prev button should move track to beginning', () => {
    const {getByTestId} = renderWithTheme(AudioPlayerComposable, {
      ...recordedAudioProps,

      children: (
        <>
          <AudioPlayerSkipPreviousButton />
        </>
      ),
    });

    const prevButton = getByTestId('audio-player-skip-previous-button');
    const audioElement = getByTestId('audio-element') as HTMLAudioElement;

    // set initial duration and currentTime
    audioElement.currentTime = 10;
    fireEvent.durationChange(audioElement, {
      target: {
        duration: 100,
      },
    });
    fireEvent.timeUpdate(audioElement, {
      target: {
        currentTime: 10,
      },
    });

    // after 5 seconds the button should not be disabled
    expect(prevButton).not.toBeDisabled();

    fireEvent.click(prevButton);

    // audio player should be at the beginning
    expect(audioElement.currentTime).toBe(0);
    expect(prevButton).toBeDisabled();
  });

  it('skip-prev/next should be disabled when onClick is not provided', () => {
    const {getByTestId} = renderWithTheme(AudioPlayerComposable, {
      ...recordedAudioProps,

      children: (
        <>
          <AudioPlayerSkipPreviousButton />
          <AudioPlayerSkipNextButton />
        </>
      ),
    });

    const prevButton = getByTestId('audio-player-skip-previous-button');
    const nextButton = getByTestId('audio-player-skip-next-button');

    expect(prevButton).toBeDisabled();
    expect(nextButton).toBeDisabled();
  });

  it('skip-prev/next should invoke onClick when clicked', () => {
    const mockOnPrevClick = jest.fn();
    const mockOnNextClick = jest.fn();
    const {getByTestId} = renderWithTheme(AudioPlayerComposable, {
      ...recordedAudioProps,

      children: (
        <>
          <AudioPlayerSkipPreviousButton onClick={mockOnPrevClick} />
          <AudioPlayerSkipNextButton onClick={mockOnNextClick} />
        </>
      ),
    });

    const prevButton = getByTestId('audio-player-skip-previous-button');
    const nextButton = getByTestId('audio-player-skip-next-button');

    fireEvent.click(prevButton);
    fireEvent.click(nextButton);
    expect(mockOnPrevClick).toHaveBeenCalled();
    expect(mockOnNextClick).toHaveBeenCalled();
  });

  describe('seekBar should', () => {
    it('renders and behaves as expected', () => {
      const {asFragment, getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        recordedAudioProps,
      );

      const audioElement = getByTestId('audio-element') as any;
      const playPauseButton = getByTestId('audio-player-play-pause-button');

      fireEvent.durationChange(audioElement, {
        target: {
          duration: 6610,
        },
      });
      // Play
      audioElement.play.mockReset();
      fireEvent.canPlay(audioElement);
      fireEvent.click(playPauseButton);
      expect(audioElement.play).toHaveBeenCalled();

      // Move forward 1 second
      fireEvent.keyDown(getByTestId('audio-slider-thumb'), {
        key: 'ArrowRight',
        code: 39,
      });
      expect(audioElement.currentTime).toEqual(1);

      // Pause
      audioElement.pause.mockReset();
      fireEvent.click(getByTestId('audio-player-play-pause-button'));
      expect(audioElement.pause).toHaveBeenCalled();

      // Move slider forward 10 seconds
      fireEvent.keyDown(getByTestId('audio-slider-thumb'), {
        key: 'PageUp',
        code: 33,
      });
      expect(audioElement.currentTime).toEqual(11);

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
          stylePresets: seekBarStylePresets,
        },
      });

      const compiledNKLightThemeStylePresets = compileTheme(audioPlayerTheme)
        .stylePresets;

      const {
        seekBarTrack,
        seekBarIndicator,
        seekBarBuffering,
      } = compiledNKLightThemeStylePresets;

      expect(mockGetTrackBackground).toHaveBeenCalledWith({
        colors: [
          `${seekBarIndicator.base!.backgroundColor}`, // indicator
          `${seekBarBuffering.base!.backgroundColor}`, // buffered// track background
          `${seekBarTrack.base!.backgroundColor}`, // track background
        ],
        max: 6610,
        min: 0,
        values: [10, 14],
      });

      // Audio player snapshot last (so that buffering is included)
      expect(asFragment()).toMatchSnapshot();

      // Time should round to nearest second (so we don't update slider value needlessly)
      audioElement.currentTime = 35.45231;
      fireEvent.timeUpdate(audioElement);
      expect(getByTestId('audio-slider-thumb')).toMatchSnapshot();
    });

    it('renders with overrides', () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-seek-bar-theme',
        overrides: {
          stylePresets: {
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
            customAudioPlayerSeekBarBuffering: {
              base: {
                backgroundColor: 'rgb(51, 51, 51)',
              },
            },
          },
        },
      });

      const {asFragment} = renderWithTheme(
        AudioPlayerComposable,
        recordedSeekBarOverrides,
        myCustomTheme,
      );

      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('Keyboard shortcuts', () => {
    it('should play and pause on press K key', () => {
      const {getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        recordedAudioProps,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      const playPauseButton = getByTestId('audio-player-play-pause-button');
      playPauseButton.focus();
      fireEvent.canPlay(audioElement);
      userEvent.keyboard('k');
      expect(audioElement.paused).toBe(false);
      userEvent.keyboard('k');
      expect(audioElement.paused).toBe(true);
    });

    it('should NOT play on space key when focus on an active element', () => {
      const {getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        recordedAudioProps,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      const link = getByTestId('buttonLink');
      link.focus();
      fireEvent.canPlay(audioElement);
      userEvent.keyboard(' ');
      expect(audioElement.paused).toBe(true);
    });

    it('should change current time via Home and End key', () => {
      const {getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        recordedAudioProps,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      const playPauseButton = getByTestId('audio-player-play-pause-button');
      playPauseButton.focus();

      // set initial duration
      fireEvent.durationChange(audioElement, {
        target: {
          duration: 100,
        },
      });

      fireEvent.canPlay(audioElement);

      // move to end
      userEvent.keyboard('{End}');
      expect(audioElement.currentTime).toBe(100);

      userEvent.keyboard('{Home}');
      expect(audioElement.currentTime).toBe(0);
    });

    it('should forward and replay 10 sec when press j / l', () => {
      const {getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        recordedAudioProps,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      const playPauseButton = getByTestId('audio-player-play-pause-button');
      playPauseButton.focus();
      fireEvent.durationChange(audioElement, {
        target: {
          duration: 6610,
        },
      });

      userEvent.keyboard('l');
      userEvent.keyboard('l');

      expect(audioElement.currentTime).toEqual(20);

      userEvent.keyboard('j');
      expect(audioElement.currentTime).toEqual(10);
    });

    it('should move to prev/next track on shift + p / shift + n', () => {
      const mockOnPrevClick = jest.fn();
      const mockOnNextClick = jest.fn();
      const {getByTestId} = renderWithTheme(AudioPlayerComposable, {
        ...recordedAudioProps,
        children: (
          <>
            <AudioPlayerSkipPreviousButton
              onClick={mockOnPrevClick}
              data-testid="skip"
            />
            <AudioPlayerSkipNextButton onClick={mockOnNextClick} />
          </>
        ),
      });
      const button = getByTestId('skip');
      button.focus();

      userEvent.keyboard('{shift}{p}');
      userEvent.keyboard('{Shift}{n}');
      expect(mockOnPrevClick).toHaveBeenCalled();
      expect(mockOnNextClick).toHaveBeenCalled();
    });
  });

  describe('Playback Speed', () => {
    // ResizeObserver is not implemented by JSDom but is needed by the lib
    const mockResizeObserver = jest.fn(() => ({
      observe: jest.fn(),
      disconnect: jest.fn(),
    }));

    beforeAll(() => {
      // @ts-ignore
      global.ResizeObserver = mockResizeObserver;
    });

    afterAll(() => {
      // @ts-ignore
      global.ResizeObserver = null;
    });

    it('should render correctly in popover', () => {
      const {asFragment, getByTestId} = renderWithThemeInBody(
        AudioPlayerComposable,
        AudioPropsAndPlaybackSpeedPopover,
      );

      fireEvent.click(getByTestId('audio-player-playback-speed-control'));

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render correctly in modal', () => {
      const {asFragment, getByTestId} = renderWithThemeInBody(
        AudioPlayerComposable,
        AudioPropsAndPlaybackSpeedModal,
      );
      fireEvent.click(getByTestId('audio-player-playback-speed-control'));

      expect(asFragment()).toMatchSnapshot();
    });

    it('should render correctly with overrides', () => {
      const {asFragment, getByTestId} = renderWithThemeInBody(
        AudioPlayerComposable,
        AudioPropsAndPlaybackSpeedWithOverrides,
      );

      fireEvent.click(getByTestId('audio-player-playback-speed-control'));

      expect(asFragment()).toMatchSnapshot();
    });

    it('should close modal on X click', () => {
      const {asFragment, getByTestId, getByLabelText} = renderWithThemeInBody(
        AudioPlayerComposable,
        AudioPropsAndPlaybackSpeedModal,
      );

      fireEvent.click(getByTestId('audio-player-playback-speed-control'));
      fireEvent.click(getByLabelText('close'));

      expect(asFragment()).toMatchSnapshot();
    });

    it('should update playback speed', () => {
      const {getByTestId} = renderWithThemeInBody(
        AudioPlayerComposable,
        AudioPropsAndPlaybackSpeedPopover,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      expect(audioElement.playbackRate).toEqual(1);
      fireEvent.click(getByTestId('audio-player-playback-speed-control'));
      userEvent.keyboard('[ArrowUp][Enter]');
      expect(audioElement.playbackRate).toEqual(0.8);
    });
  });

  describe('VolumeControl', () => {
    it('calls event handler passed from the props', () => {
      const onVolumeChange = jest.fn();
      const props = {
        ...recordedAudioProps,
        onVolumeChange,
      };
      const {getByTestId} = renderWithTheme(AudioPlayerComposable, props);
      fireEvent.volumeChange(getByTestId('audio-element'), {
        target: {volume: 0.6},
      });

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;

      expect(audioElement.volume).toBe(0.6);
      expect(onVolumeChange).toHaveBeenCalledTimes(1);
      expect(onVolumeChange).toHaveBeenCalledWith(
        expect.objectContaining({
          target: expect.objectContaining({volume: 0.6}),
        }),
      );
    });

    it('should have mute unmute functionality', () => {
      // Clearing localStorage so not using any cashed initial volume
      localStorage.clear();

      const {getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        recordedAudioProps,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      const muteButton = getByTestId('mute-button');
      muteButton.focus();

      // Should default to 0.7
      expect(audioElement.volume).toEqual(0.7);
      // Mute with button click
      fireEvent.click(getByTestId('mute-button'));
      expect(audioElement.volume).toEqual(0);
      // unMute
      fireEvent.click(getByTestId('mute-button'));
      expect(audioElement.volume).toEqual(0.7);

      userEvent.keyboard('m');
      expect(audioElement.volume).toEqual(0);

      // Increase volume 0.1
      fireEvent.keyDown(getByTestId('volume-control-slider-thumb'), {
        key: 'ArrowRight',
        code: 39,
      });
      expect(audioElement.volume).toEqual(0.1);
    });

    it('unmute keyshortcut should be overriden', () => {
      // Clearing localStorage so not using any cashed initial volume
      localStorage.clear();

      const {getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        AudioPropsAndVolumeControlOverridenShortcuts,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      const muteButton = getByTestId('mute-button');
      muteButton.focus();

      // Should default to 0.7
      expect(audioElement.volume).toEqual(0.7);
      userEvent.keyboard('y');
      expect(audioElement.volume).toEqual(0);

      // Increase volume 0.1
      fireEvent.keyDown(getByTestId('volume-control-slider-thumb'), {
        key: 'ArrowRight',
        code: 39,
      });
      expect(audioElement.volume).toEqual(0.1);
    });

    it('should render correctly with collapsed and initialVolume', () => {
      // Clearing localStorage before render for allowing
      // InitialVolume to be used instead.
      localStorage.clear();

      const {queryByTestId, getByTestId, asFragment} = renderWithTheme(
        AudioPlayerComposable,
        AudioPropsAndVolumeControlWithInitialVolumeCollapsed,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      const volumeSlider = queryByTestId('volume-slider');

      // Slider should no exist, given that collapsed is set to true
      expect(volumeSlider).not.toBeInTheDocument();

      // Initial volume should be 0.2, as by props
      expect(audioElement.volume).toBe(0.2);
      expect(asFragment()).toMatchSnapshot();
    });

    it('should render correctly with vertical prop', () => {
      const {asFragment} = renderWithTheme(
        AudioPlayerComposable,
        AudioPropsAndVolumeControlVertical,
      );
      expect(asFragment()).toMatchSnapshot();
    });
    it('should render correctly with overrides', () => {
      const myCustomTheme = createTheme({
        name: 'my-custom-volume-control-theme',
        overrides: {
          stylePresets: {
            customAudioPlayerVolumeControlHorizontalContainer: {
              base: {
                backgroundColor: 'grey',
              },
            },
            customTrackStylePreset: {
              base: {
                backgroundColor: 'red',
                borderColor: 'blue',
                borderWidth: '1px',
                borderStyle: 'solid',
              },
            },
            customIndicatorStylePreset: {
              base: {
                backgroundColor: 'yellow',
              },
            },
            customThumbStylePreset: {
              base: {
                backgroundColor: 'green',
                borderColor: 'black',
              },
            },
            customLabelStylePreset: {
              base: {
                borderColor: 'purple',
                color: 'purple',
              },
            },
            customThumbLabelStylePreset: {
              base: {
                borderColor: 'black',
                color: 'green',
              },
            },
            customFeedback: {
              base: {
                backgroundColor: '{{colors.red060}}',
                borderRadius: '{{borders.borderRadiusCircle}}',
                opacity: '{{overlays.opacity000}}',
              },
            },
          },
        },
      });
      const recordedVolumeControlOverrides: AudioPlayerComposableProps = {
        src: '/audio_file_1.mp3',
        autoPlay: false,
        children: (
          <AudioPlayerVolumeControl
            overrides={{
              stylePreset: 'customAudioPlayerVolumeControlHorizontalContainer',
              spaceBetween: 'space050',
              slider: {
                track: {
                  stylePreset: 'customTrackStylePreset',
                  size: 'sizing020',
                  length: '100px',
                },
                indicator: {
                  stylePreset: 'customIndicatorStylePreset',
                },
                thumb: {
                  stylePreset: 'customThumbStylePreset',
                  size: 'sizing040',
                },
                labels: {
                  stylePreset: 'customLabelStylePreset',
                  space: 'spacing060',
                },
                thumbLabel: {
                  stylePreset: 'customThumbLabelStylePreset',
                },
                feedback: {
                  size: 'sizing070',
                  stylePreset: 'customFeedback',
                },
              },
            }}
          />
        ),
      };
      const {asFragment} = renderWithTheme(
        AudioPlayerComposable,
        recordedVolumeControlOverrides,
        myCustomTheme,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('initialTime prop', () => {
    it('should render correctly with initial time', () => {
      const {getByTestId} = renderWithTheme(
        AudioPlayerComposable,
        AudioPropsWithInitialTime,
      );

      const audioElement = getByTestId('audio-element') as HTMLAudioElement;
      const audioTimeLabel = getByTestId(
        'audio-player-time-display',
      ) as HTMLParagraphElement;

      const seekBar = getByTestId('audio-slider-track') as HTMLDivElement;
      fireEvent.timeUpdate(audioElement);
      expect(audioElement.currentTime).toEqual(50);
      expect(audioTimeLabel.innerHTML).toEqual('00:50/00:00 ');
      expect(seekBar.getAttribute('values')).toEqual('50');
    });
  });

  describe('Instrumentation tests', () => {
    test('should raise "end" event when the track has ended', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
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

    test('should raise "click" event when recorded is paused', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
        recordedAudioProps,
        fireEventSpy,
      );
      const expectedObject = {
        ...recordedTrackingOutputObject,
        originator: 'audio-player-pause-button',
        trigger: 'click',
      };

      const playPause = getByTestId('audio-player-play-pause-button');
      fireEvent.canPlay(getByTestId('audio-element'));
      fireEvent.click(playPause);
      fireEvent.click(playPause);

      expect(fireEventSpy).toHaveBeenLastCalledWith(expectedObject);
    });

    test('should raise "click" event when recorded is played', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
        recordedAudioProps,
        fireEventSpy,
      );

      const expectedObject = {
        ...recordedTrackingOutputObject,
        originator: 'audio-player-play-button',
        trigger: 'click',
      };

      const playButton = getByTestId('audio-player-play-pause-button');
      fireEvent.canPlay(getByTestId('audio-element'));
      fireEvent.click(playButton);

      expect(fireEventSpy).toHaveBeenLastCalledWith(expectedObject);
    });

    test('should raise "click" event when live is stopped', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
        liveAudioProps,
        fireEventSpy,
      );
      const expectedObject = {
        ...liveTrackingOutputObject,
        originator: 'audio-player-stop-button',
        trigger: 'click',
      };

      const playStop = getByTestId('audio-player-play-pause-button');
      fireEvent.canPlay(getByTestId('audio-element'));
      fireEvent.click(playStop);
      fireEvent.click(playStop);

      expect(fireEventSpy).toHaveBeenLastCalledWith(expectedObject);
    });

    test('should raise "click" event when live is played', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
        liveAudioProps,
        fireEventSpy,
      );

      const playButton = getByTestId('audio-player-play-pause-button');
      fireEvent.canPlay(getByTestId('audio-element'));
      fireEvent.click(playButton);

      expect(fireEventSpy).toHaveBeenLastCalledWith(liveTrackingOutputObject);
    });

    test('should raise "click" event when skip forward button is clicked', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
        recordedAudioProps,
        fireEventSpy,
      );

      const forwardButton = getByTestId('audio-player-forward-button');
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

    test('should raise "click" event when backward button is clicked', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
        recordedAudioProps,
        fireEventSpy,
      );

      const backwardButton = getByTestId('audio-player-replay-button');
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

    test('should raise event when the track has ended', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
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

    test('raise event when audio player autoplay', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
        recordedAudioPropsAutoplay,
        fireEventSpy,
      );

      const expectedObject = {
        ...recordedTrackingOutputObject,
        originator: 'audio-player-audio',
        trigger: 'start',
      };

      const play = getByTestId('audio-player-play-pause-button');
      fireEvent.canPlay(getByTestId('audio-element'));
      fireEvent.click(play);
      fireEvent.click(play);

      expect(fireEventSpy).toHaveBeenCalledWith(expectedObject);
    });

    test('should raise event while the audio is being played', () => {
      const fireEventSpy = jest.fn();
      const {getByTestId} = renderWithImplementation(
        AudioPlayerComposable,
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
          media_milestone: '0',
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
        AudioPlayerComposable,
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
        AudioPlayerComposable,
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
