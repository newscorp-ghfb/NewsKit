import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {IconFilledPause} from '../icons/filled/material/icon-filled-pause';
import {IconFilledPlayArrow} from '../icons/filled/material/icon-filled-play-arrow';
import {IconFilledStop} from '../icons/filled/material/icon-filled-stop';
import {AudioElement} from './components/audio-element';
import {useAudioFunctions} from './audio-functions';
import {AudioPlayerProvider} from './context';
import {useKeypress} from '../utils/hooks/use-keypress';
import {
  AudioEvents,
  AudioFunctionDependencies,
  AudioPlayerComposableProps,
} from './types';
import {formatFunction} from './components/time-display/utils';
import {
  IconFilledSkipNext,
  IconFilledSkipPrevious,
  IconFilledForward10,
  IconFilledReplay10,
} from '../icons';
import {IconButtonProps} from '../icon-button/types';
import {composeEventHandlers} from '../utils/compose-event-handlers';
import {AudioPlayerPlayPauseButtonProps} from './components/play-pause-button/types';
import {AudioPlayerForwardButtonProps} from './components/forward-button/types';
import {AudioPlayerReplayButtonProps} from './components/replay-button/types';
import {AudioPlayerSkipNextButtonProps} from './components/skip-next-button/types';
import {AudioPlayerSkipPreviousButtonProps} from './components/skip-previous-button/types';
import {AudioPlayerVolumeControlProps} from './components/volume-control/types';
import {AudioPlayerPlaybackSpeedControlProps} from './components/playback-speed-control';

const defaultKeyboardShortcuts = {
  jumpToStart: ['0', 'Home'],
  jumpToEnd: ['End'],
};

export const AudioPlayerComposable = ({
  children,
  src,
  autoPlay = false,
  live = false,
  ariaLandmark,
  keyboardShortcuts: keyboardShortcutsProp,
  initialVolume = 0.7,
  initialTime = 0,
  ...props
}: AudioPlayerComposableProps) => {
  const currentTimeRef = useRef(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSectionRef = useRef<HTMLDivElement>(null);
  const showLoaderTimeoutRef: MutableRefObject<number> = useRef(0);

  const [playing, setPlayState] = useState(autoPlay);
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayDuration, setDisplayDuration] = useState(0);

  const [buffered, setBuffered] = useState<TimeRanges>();

  useEffect(() => {
    currentTimeRef.current = currentTime;
  });

  useEffect(() => {
    // On render onTimeUpdate will be fired and initialTime will be set as a value for currentTime state.
    // I can't set this one to the setCurrentTime state directly as the audioElement time
    // will still be 0, currentTime will be overridden to 0 and the audio will start from 0
    if (audioRef && audioRef.current && duration) {
      audioRef.current.currentTime = initialTime;
    }
    setCurrentTime(0);
    setDisplayDuration(0);
  }, [src, initialTime, duration]);

  const {
    audioEvents,
    togglePlay,
    onChangeSlider,
    onClickForward,
    onClickBackward,
    onChangeVolumeSlider,
    onPlaybackSpeedChange,
  } = useAudioFunctions({
    autoPlay,
    audioRef,
    playing,
    setLoading,
    loading,
    setPlayState,
    showLoaderTimeoutRef,
    setCurrentTime,
    setBuffered,
    setDisplayDuration,
    currentTimeRef,
    duration,
    setDuration,
    setVolume,
    setPlaybackSpeed,
    src,
    live,
  } as AudioFunctionDependencies);

  const getPlayPauseButtonProps = useCallback(
    ({
      onClick: consumerOnClick,
      ...getterProps
    }: AudioPlayerPlayPauseButtonProps): IconButtonProps & {
      playing: boolean;
      canPause: boolean;
    } => {
      // All the internal logic for defining aria and icon to show
      let playStateIcon = <IconFilledPlayArrow />;
      let ariaLabel = 'Play';
      let ariaPressed = false;
      const canPause = !live;

      if (playing) {
        ariaPressed = true;
        if (canPause) {
          playStateIcon = <IconFilledPause />;
          ariaLabel = 'Pause';
        } else {
          playStateIcon = <IconFilledStop />;
          ariaLabel = 'Stop';
        }
      }

      const onClick = composeEventHandlers([consumerOnClick, togglePlay]);

      return {
        'aria-label': ariaLabel,
        'aria-pressed': ariaPressed,
        loading,
        onClick,
        children: playStateIcon,
        ...getterProps,

        // can  be needed for custom internal logic
        playing,
        canPause,
      } as IconButtonProps & {
        playing: boolean;
        canPause: boolean;
      };
    },
    [live, loading, playing, togglePlay],
  );

  const getForwardButtonProps = useCallback(
    ({
      onClick: consumerOnClick,
      seconds = 10,
      ...getterProps
    }: AudioPlayerForwardButtonProps): IconButtonProps => {
      const onClickForwardWithSeconds = () => onClickForward({seconds});

      return {
        children: <IconFilledForward10 />,
        'aria-label': `Fast forward for ${seconds} seconds`,
        onClick: composeEventHandlers([
          consumerOnClick,
          onClickForwardWithSeconds,
        ]),
        ...getterProps,
      } as IconButtonProps;
    },
    [onClickForward],
  );

  const getReplayButtonProps = useCallback(
    ({
      onClick: consumerOnClick,
      seconds = 10,
      ...getterProps
    }: AudioPlayerReplayButtonProps): IconButtonProps => {
      const onClickWithBackwardWithSeconds = () => onClickBackward({seconds});
      return {
        children: <IconFilledReplay10 />,
        'aria-label': `Rewind ${seconds} seconds`,
        onClick: composeEventHandlers([
          consumerOnClick,
          onClickWithBackwardWithSeconds,
        ]),
        ...getterProps,
      } as IconButtonProps;
    },
    [onClickBackward],
  );

  const getSeekBarProps = useCallback(
    () => ({
      duration,
      currentTime,
      onChange: onChangeSlider,
      buffered,
    }),
    [buffered, currentTime, duration, onChangeSlider],
  );

  const getTimeDisplayProps = useCallback(
    () => ({
      format: formatFunction,
      currentTime,
      duration,
    }),
    [currentTime, duration],
  );

  const getVolumeControlProps = useCallback(
    ({
      layout,
      overrides,
      keyboardShortcuts,
      muteButtonSize,
    }: AudioPlayerVolumeControlProps) => ({
      keyboardShortcuts,
      layout,
      overrides: overrides || {},
      onChange: onChangeVolumeSlider,
      volume,
      initialVolume,
      muteButtonSize,
    }),
    [volume, initialVolume, onChangeVolumeSlider],
  );

  const getPlaybackSpeedControlProps = useCallback(
    ({
      overrides,
      buttonSize,
      useModal = {},
    }: AudioPlayerPlaybackSpeedControlProps) => ({
      overrides: overrides || {},
      onChange: onPlaybackSpeedChange,
      buttonSize,
      useModal,
      playbackSpeed,
    }),
    [onPlaybackSpeedChange, playbackSpeed],
  );

  const getSkipPreviousButtonProps = useCallback(
    ({
      onClick: consumerOnClick,
      ...getterProps
    }: AudioPlayerSkipPreviousButtonProps): IconButtonProps => {
      const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (currentTime > 5) {
          onChangeSlider(0);
        } else if (typeof consumerOnClick === 'function') {
          consumerOnClick(event);
        }
      };

      const isDisabled = currentTime <= 5 && !consumerOnClick;

      return {
        onClick,
        children: <IconFilledSkipPrevious />,
        'aria-label': 'previous',
        disabled: isDisabled,
        ...getterProps,
      } as IconButtonProps;
    },
    [currentTime, onChangeSlider],
  );

  const getSkipNextButtonProps = useCallback(
    ({...getterProps}: AudioPlayerSkipNextButtonProps): IconButtonProps =>
      ({
        children: <IconFilledSkipNext />,
        'aria-label': 'next',
        disabled: typeof getterProps.onClick !== 'function',
        ...getterProps,
      } as IconButtonProps),
    [],
  );

  const value = useMemo(
    () => ({
      audioRef,
      audioSectionRef,
      playbackSpeed,
      togglePlay,
      // Props function getter
      getPlayPauseButtonProps,
      getTimeDisplayProps,
      getSeekBarProps,
      getSkipPreviousButtonProps,
      getSkipNextButtonProps,
      getForwardButtonProps,
      getReplayButtonProps,
      getVolumeControlProps,
      getPlaybackSpeedControlProps,
    }),
    [
      playbackSpeed,
      togglePlay,
      getPlayPauseButtonProps,
      getTimeDisplayProps,
      getSeekBarProps,
      getSkipPreviousButtonProps,
      getSkipNextButtonProps,
      getForwardButtonProps,
      getReplayButtonProps,
      getVolumeControlProps,
      getPlaybackSpeedControlProps,
    ],
  );

  const eventHandler = useCallback(
    (eventName: AudioEvents) => {
      const propEvent = props[eventName];
      const internalEvent = audioEvents[eventName];
      return composeEventHandlers([propEvent, internalEvent]);
    },
    [audioEvents, props],
  );

  // Keyboard shortcuts
  const options = {target: audioSectionRef, preventDefault: false};
  const keyboardShortcuts = {
    ...defaultKeyboardShortcuts,
    ...keyboardShortcutsProp,
  };

  const pressJumpToStart = useCallback(() => {
    onChangeSlider(0);
  }, [onChangeSlider]);

  const pressJumpToEnd = useCallback(() => {
    onChangeSlider(duration);
  }, [onChangeSlider, duration]);

  useKeypress(keyboardShortcuts.jumpToStart, pressJumpToStart, options);
  useKeypress(keyboardShortcuts.jumpToEnd, pressJumpToEnd, options);

  return (
    <section aria-label={ariaLandmark || 'Audio Player'} ref={audioSectionRef}>
      <AudioPlayerProvider value={value}>
        <AudioElement
          audioRef={audioRef}
          src={src}
          autoPlay={autoPlay}
          {...props}
          onCanPlay={eventHandler(AudioEvents.CanPlay)}
          onWaiting={eventHandler(AudioEvents.Waiting)}
          onPlay={eventHandler(AudioEvents.Play)}
          onPause={eventHandler(AudioEvents.Pause)}
          onEnded={eventHandler(AudioEvents.Ended)}
          onDurationChange={eventHandler(AudioEvents.DurationChange)}
          onTimeUpdate={eventHandler(AudioEvents.TimeUpdate)}
          onProgress={eventHandler(AudioEvents.Progress)}
          onVolumeChange={eventHandler(AudioEvents.VolumeChange)}
        />
        {children}
      </AudioPlayerProvider>
    </section>
  );
};
