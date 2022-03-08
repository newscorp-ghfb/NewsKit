import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {IconFilledPause} from '../icons/filled/material/icon-filled-pause';
import {IconFilledPlayArrow} from '../icons/filled/material/icon-filled-play-arrow';
import {IconFilledStop} from '../icons/filled/material/icon-filled-stop';
import {AudioElement} from './components/audio-element';
import {useAudioFunctions} from './audio-functions';
import {AudioPlayerProvider} from './context';
import {AudioPlayerComposableProps} from './types';
import {formatFunction} from './components/time-display/utils';

export const AudioPlayerComposable = ({
  children,
  src,
  /* istanbul ignore next */
  autoPlay = false,
  /* istanbul ignore next */
  live = false,
  ariaLandmark,
}: AudioPlayerComposableProps) => {
  const trackPositionRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const showLoaderTimeoutRef: MutableRefObject<number> = useRef(0);

  const [playing, setPlayState] = useState(autoPlay);
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [trackPositionArr, setTrackPosition] = useState([0]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [displayDuration, setDisplayDuration] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPrevTrackBtnDisabled, setIsPrevTrackBtnDisabled] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [buffered, setBuffered] = useState<TimeRanges>();

  useEffect(() => {
    [trackPositionRef.current] = trackPositionArr;
  });

  useEffect(() => {
    setTrackPosition([0]);
    // setDisplayDuration(0);
  }, [src]);

  // @ts-ignore as we are not passing all the parameters yet.
  const {audioEvents, togglePlay, onChangeSlider} = useAudioFunctions({
    autoPlay,
    audioRef,
    playing,
    setLoading,
    loading,
    setPlayState,
    showLoaderTimeoutRef,
    setTrackPosition,
    setBuffered,
    setDisplayDuration,
    setIsPrevTrackBtnDisabled,
    trackPositionRef,
    duration,
    setDuration,
    src,
  });

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

  const getTimeDisplayProps = () => ({
    defaultFormat: formatFunction(trackPositionArr![0], duration!),
    currentTime: trackPositionArr[0],
    length: duration,
  });

  const value = {
    // Props function getter
    getPlayPauseButtonProps,
    getTimeDisplayProps,

    // Internal for AudioElement
    audioRef,
    audioEvents,
    src,
    autoPlay,

    // Needed by play-pause button
    playing,
    canPause: live,
    loading,
    togglePlay,

    // Seek bar
    duration,
    trackPositionArr,
    onChangeSlider,
  };

  return (
    <section aria-label={ariaLandmark || 'Audio Player'}>
      <AudioPlayerProvider value={value}>
        <AudioElement />
        {children}
      </AudioPlayerProvider>
    </section>
  );
};
