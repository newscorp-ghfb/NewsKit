import React, {
  MutableRefObject,
  useCallback,
  useEffect,
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
import {AudioFunctionDependencies, AudioPlayerComposableProps} from './types';
import {formatFunction} from './components/time-display/utils';
import {IconFilledForward10, IconFilledReplay10} from '../icons';

const defaultKeyboardShortcuts = {
  jumpToStart: ['0', 'Home'],
  jumpToEnd: ['End'],
};

export const AudioPlayerComposable = ({
  children,
  src,
  /* istanbul ignore next */
  autoPlay = false,
  /* istanbul ignore next */
  live = false,
  ariaLandmark,
  keyboardShortcuts: keyboardShortcutsProp,
}: AudioPlayerComposableProps) => {
  const currentTimeRef = useRef(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const audioSectionRef = useRef<HTMLDivElement>(null);
  const showLoaderTimeoutRef: MutableRefObject<number> = useRef(0);

  const [playing, setPlayState] = useState(autoPlay);
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayDuration, setDisplayDuration] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPrevTrackBtnDisabled, setIsPrevTrackBtnDisabled] = useState(false);

  const [buffered, setBuffered] = useState<TimeRanges>();

  useEffect(() => {
    currentTimeRef.current = currentTime;
  });

  useEffect(() => {
    setCurrentTime(0);
    setDisplayDuration(0);
  }, [src]);

  // @ts-ignore as we are not passing all the parameters yet.
  const {
    audioEvents,
    togglePlay,
    onChangeSlider,
    onClickForward,
    onClickBackward,
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
    setIsPrevTrackBtnDisabled,
    currentTimeRef,
    duration,
    setDuration,
    src,
  } as AudioFunctionDependencies);

  const getPlayPauseButtonProps = ({
    onClick: consumerOnClick,
  }: {
    onClick?: () => void;
  }) => {
    // All the internal logic for defining aria and icon to show
    let playStateIcon = <IconFilledPlayArrow />;
    let ariaLabel = 'Play';
    let ariaPressed = false;

    if (playing) {
      ariaPressed = true;
      // TODO remove ignore as we implement the "live" functionality back and write test for it
      /* istanbul ignore next */
      if (live) {
        playStateIcon = <IconFilledPause />;
        ariaLabel = 'Pause';
      } else {
        playStateIcon = <IconFilledStop />;
        ariaLabel = 'Stop';
      }
    }

    const onClick = () => {
      if (consumerOnClick) consumerOnClick();
      togglePlay();
    };

    return {
      ariaLabel,
      ariaPressed,
      loading,
      onClick,

      // can  be needed for custom internal logic
      playing,
      canPause: live,
      playStateIcon,
    };
  };

  const getForwardButtonProps = ({
    onClick: consumerOnClick,
    seconds = 10,
  }: {
    onClick?: () => void;
    seconds?: number;
  }) => {
    const onClick = () => {
      console.log('clicked?');
      if (consumerOnClick) consumerOnClick();
      onClickForward({
        seconds,
      });
    };

    return {
      defaultForwardIcon: <IconFilledForward10 />,
      ariaLabel: `Fast forward for ${seconds} seconds`,
      onClick,
    };
  };

  const getReplayButtonProps = ({
    onClick: consumerOnClick,
    seconds = 10,
  }: {
    onClick?: () => void;
    seconds?: number;
  }) => {
    const onClick = () => {
      if (consumerOnClick) consumerOnClick();
      onClickBackward({
        seconds,
      });
    };

    return {
      defaultReplayIcon: <IconFilledReplay10 />,
      ariaLabel: `Rewind ${seconds} seconds`,
      onClick,
    };
  };

  const getSeekBarProps = () => ({
    duration,
    currentTime,
    onChange: onChangeSlider,
    buffered,
  });

  const getTimeDisplayProps = () => ({
    format: formatFunction,
    currentTime,
    duration,
  });

  const value = {
    // Props function getter
    getPlayPauseButtonProps,
    getTimeDisplayProps,
    getSeekBarProps,
    getForwardButtonProps,
    getReplayButtonProps,

    // Internal for AudioElement
    audioRef,
    audioSectionRef,
    togglePlay,
    audioEvents,
    src,
    autoPlay,
  };

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
        <AudioElement />
        {children}
      </AudioPlayerProvider>
    </section>
  );
};
