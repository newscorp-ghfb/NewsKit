import React, {MutableRefObject, useEffect, useRef, useState} from 'react';
import {IconFilledPause} from '../icons/filled/material/icon-filled-pause';
import {IconFilledPlayArrow} from '../icons/filled/material/icon-filled-play-arrow';
import {IconFilledStop} from '../icons/filled/material/icon-filled-stop';
import {AudioElement} from './components/audio-element';
import {useAudioFunctions} from './audio-functions';
import {AudioPlayerProvider} from './context';
import {AudioWithProviderProps} from './types';

export const AudioPlayerComposable = ({
  children,
  src,
  autoPlay = false,
  live = false,
  ariaLandmark,
}: AudioWithProviderProps) => {
  const trackPositionRef = useRef(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const showLoaderTimeoutRef: MutableRefObject<number> = useRef(0);

  const [playing, setPlayState] = useState(autoPlay);
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(0);
  const [trackPositionArr, setTrackPosition] = useState([0]);
  // const [displayDuration, setDisplayDuration] = useState(0);
  // const [buffered, setBuffered] = useState<TimeRanges>();

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
    setPlayState,
    showLoaderTimeoutRef,
    setTrackPosition,
    // setBuffered,
    // setDisplayDuration,
    trackPositionRef,
    duration,
    setDuration,
  });

  const getPlayPauseButtonProps = () => {
    // All the internal logic for defining aria and icon to show
    let playStateIcon = <IconFilledPlayArrow />;
    let ariaLabel = 'Play';
    let ariaPressed = false;

    if (playing) {
      ariaPressed = true;
      if (live) {
        playStateIcon = <IconFilledPause />;
        ariaLabel = 'Pause';
      } else {
        playStateIcon = <IconFilledStop />;
        ariaLabel = 'Stop';
      }
    }

    const onClick = () => {
      togglePlay();
    };

    return {
      'aria-label': ariaLabel,
      'aria-pressed': ariaPressed,
      loading,
      onClick,

      // can  be needed for custom internal logic
      playing,
      canPause: live,
      playStateIcon,
    };
  };

  const value = {
    // Props hooks
    getPlayPauseButtonProps,

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
    <section aria-label={ariaLandmark}>
      <AudioPlayerProvider value={value}>
        <AudioElement />
        {children}
      </AudioPlayerProvider>
    </section>
  );
};
