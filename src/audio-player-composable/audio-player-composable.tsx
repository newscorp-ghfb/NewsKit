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
import {
  AudioFunctionDependencies,
  AudioPlayerComposableProps,
  AudioPlayerIconButtonProps,
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
    currentTimeRef,
    duration,
    setDuration,
    src,
  } as AudioFunctionDependencies);

  const getPlayPauseButtonProps = ({
    onClick: onClickProp,
    ...getterProps
  }: AudioPlayerIconButtonProps): IconButtonProps & {
    playing: boolean;
    canPause: boolean;
  } => {
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

    const onClick = composeEventHandlers([onClickProp, togglePlay]);

    return {
      'aria-label': ariaLabel,
      'aria-pressed': ariaPressed,
      loading,
      onClick,
      children: playStateIcon,
      ...getterProps,

      // can  be needed for custom internal logic
      playing,
      canPause: live,
    };
  };
  const getForwardButtonProps = ({
    onClick: consumerOnClick,
    ...getterProps
  }: AudioPlayerIconButtonProps): IconButtonProps => ({
    children: <IconFilledForward10 />,
    'aria-label': 'Fast forward for 10 seconds',
    onClick: composeEventHandlers([consumerOnClick, onClickForward]),
    ...getterProps,
  });
  const getReplayButtonProps = ({
    onClick: consumerOnClick,
    ...getterProps
  }: AudioPlayerIconButtonProps): IconButtonProps => ({
    children: <IconFilledReplay10 />,
    'aria-label': 'Rewind 10 seconds',
    onClick: composeEventHandlers([consumerOnClick, onClickBackward]),
    ...getterProps,
  });

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

  const getSkipPreviousButtonProps = ({
    onClick: onClickProp,
    ...getterProps
  }: AudioPlayerIconButtonProps): IconButtonProps => {
    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (currentTime > 5) {
        onChangeSlider(0);
      } else if (typeof onClickProp === 'function') {
        onClickProp(event);
      }
    };

    const isDisabled = currentTime <= 5 && !onClickProp;

    return {
      onClick,
      children: <IconFilledSkipPrevious />,
      'aria-label': 'previous',
      disabled: isDisabled,
      ...getterProps,
    };
  };

  const getSkipNextButtonProps = ({
    ...getterProps
  }: AudioPlayerIconButtonProps): IconButtonProps => ({
    children: <IconFilledSkipNext />,
    'aria-label': 'next',
    disabled: typeof getterProps.onClick !== 'function',
    ...getterProps,
  });

  const value = {
    // Props function getter
    getPlayPauseButtonProps,
    getTimeDisplayProps,
    getSeekBarProps,
    getSkipPreviousButtonProps,
    getSkipNextButtonProps,
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
