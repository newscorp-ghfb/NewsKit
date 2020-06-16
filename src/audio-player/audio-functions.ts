/* eslint-disable no-param-reassign */
import {useCallback, SyntheticEvent, useEffect} from 'react';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {AudioPlayerProps} from './types';
import {formatTrackTime, getMediaSegment} from './utils';
import calculateStringPercentage from '../utils/calculate-string-percentage';
import {getValueInRange} from '../utils/value-in-range';

import {version} from '../version-number.json';

export interface AudioFunctionDependencies {
  onPreviousTrack: AudioPlayerProps['onPreviousTrack'];
  onNextTrack: AudioPlayerProps['onNextTrack'];
  autoPlay: AudioPlayerProps['autoPlay'];
  disablePreviousTrack: AudioPlayerProps['disablePreviousTrack'];
  src: AudioPlayerProps['src'];
  live: NonNullable<AudioPlayerProps['live']>;

  isLoading: boolean;
  duration: number;
  isPlaying: boolean;

  showLoaderTimeoutRef: React.MutableRefObject<number>;
  trackPositionRef: React.MutableRefObject<number>;
  audioRef: React.RefObject<HTMLAudioElement>;

  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setTrackPosition: React.Dispatch<React.SetStateAction<number[]>>;
  setPlayState: React.Dispatch<React.SetStateAction<boolean>>;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
  setDisplayDuration: React.Dispatch<React.SetStateAction<number>>;
  setBuffered: React.Dispatch<React.SetStateAction<TimeRanges | undefined>>;
  setIsPrevTrackBtnDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useAudioFunctions = ({
  onPreviousTrack,
  onNextTrack,
  autoPlay,
  disablePreviousTrack,
  src,
  live,
  duration,
  isLoading,
  isPlaying,
  showLoaderTimeoutRef,
  trackPositionRef,
  audioRef,
  setIsLoading,
  setTrackPosition,
  setPlayState,
  setVolume,
  setDuration,
  setDisplayDuration,
  setBuffered,
  setIsPrevTrackBtnDisabled,
}: AudioFunctionDependencies) => {
  const {fireEvent} = useInstrumentation();

  const ifPlayer = useCallback(
    (fn: (p: HTMLAudioElement) => void) => {
      const player = audioRef.current;
      // No need to test the else, player should always be defined, if not we just ignore.
      /* istanbul ignore else */
      if (player) {
        fn(player);
      }
    },
    [audioRef],
  );

  const buildMediaData = useCallback(() => {
    const playerData = {
      media_player: `newskit-audio-player-${version}`,
      media_type: 'audio',
    };
    return live
      ? playerData
      : {
          ...playerData,
          media_duration: formatTrackTime(duration),
          media_milestone: calculateStringPercentage(
            trackPositionRef.current,
            duration,
          ),
          media_segment: getMediaSegment(duration, trackPositionRef.current),
          media_offset: formatTrackTime(trackPositionRef.current),
        };
  }, [duration, live, trackPositionRef]);

  const getTrackingInformation = useCallback(
    (
      originator: string,
      eventTrigger: EventTrigger,
      eventSpecificInfo?: object,
    ) => {
      const data = {
        ...buildMediaData(),
        ...eventSpecificInfo,
      };
      const trackingInformation = {
        originator,
        trigger: eventTrigger,
        data,
      };

      return trackingInformation;
    },
    [buildMediaData],
  );

  const onWaiting = useCallback(() => {
    clearTimeout(showLoaderTimeoutRef.current);
    // We are giving some extra time before setting isLoading state
    // to avoid flickering of the play/loading button when
    // skipping back to already buffered time.
    showLoaderTimeoutRef.current = window.setTimeout(
      () => setIsLoading(true),
      700,
    );
  }, [setIsLoading, showLoaderTimeoutRef]);

  const onCanPlay = useCallback(() => {
    clearTimeout(showLoaderTimeoutRef.current);
    setIsLoading(false);
  }, [setIsLoading, showLoaderTimeoutRef]);

  const updateAudioTime = useCallback(
    (playerTime: number) => {
      const newPlayerTime = getValueInRange(playerTime, [0, duration]);
      setTrackPosition([newPlayerTime]);

      ifPlayer(player => {
        player.currentTime = newPlayerTime;
      });
    },
    [duration, setTrackPosition, ifPlayer],
  );

  const updateAudioVolume = useCallback(
    (vol: number) => {
      window.localStorage.setItem('newskit-audioplayer-volume', vol.toString());
      setVolume(vol);

      ifPlayer(player => {
        player.volume = vol;
      });
    },
    [ifPlayer, setVolume],
  );

  const onClickPrevious = useCallback(() => {
    if (trackPositionRef.current > 5) {
      updateAudioTime(0);
      return;
    }

    // If no function is passed, the button is disabled, check is just to be sure; the else can't be tested.
    /* istanbul ignore else */
    if (onPreviousTrack) {
      onPreviousTrack();
    }
  }, [trackPositionRef, onPreviousTrack, updateAudioTime]);

  const onClickNext = useCallback(() => {
    // If no function is passed, the button is disabled, check is just to be sure; the else can't be tested.
    /* istanbul ignore else */
    if (onNextTrack) {
      onNextTrack();
    }
  }, [onNextTrack]);

  const onClickBackward = useCallback(() => {
    updateAudioTime(trackPositionRef.current - 10);
    const trackingInformation = getTrackingInformation(
      'audio-player-skip-backward',
      EventTrigger.Click,
      {event_navigation_name: 'backward skip'},
    );
    fireEvent(trackingInformation);
  }, [fireEvent, getTrackingInformation, updateAudioTime, trackPositionRef]);

  const onClickForward = useCallback(() => {
    updateAudioTime(trackPositionRef.current + 10);

    const trackingInformation = getTrackingInformation(
      'audio-player-skip-forward',
      EventTrigger.Click,
      {event_navigation_name: 'forward skip'},
    );
    fireEvent(trackingInformation);
  }, [fireEvent, getTrackingInformation, updateAudioTime, trackPositionRef]);

  const onDurationChange = useCallback(
    ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
      const tgt = target as HTMLAudioElement;
      setDuration(tgt.duration);
      setDisplayDuration(tgt.duration);
      setBuffered(tgt.buffered);
    },
    [setBuffered, setDuration, setDisplayDuration],
  );

  const play = () => {
    ifPlayer(player => {
      setPlayState(true);
      player.play();
    });
  };
  const onPlay = () => {
    if (autoPlay) {
      fireEvent(
        getTrackingInformation('audio-player-audio', EventTrigger.Start),
      );
    }

    if (!isPlaying) {
      play();

      fireEvent(
        getTrackingInformation('audio-player-play-button', EventTrigger.Click),
      );
    }
  };

  const pause = () => {
    ifPlayer(player => {
      setPlayState(false);
      player.pause();
    });
  };
  const onPause = () => {
    if (isPlaying) {
      pause();

      fireEvent(
        getTrackingInformation(
          live ? 'audio-player-stop-button' : 'audio-player-pause-button',
          EventTrigger.Click,
        ),
      );
    }
  };

  const onPopoutClick = () => {
    pause();

    fireEvent(
      getTrackingInformation('audio-player-popout', EventTrigger.Click),
    );
  };

  const togglePlay = () => {
    if (isLoading) {
      return;
    }

    if (isPlaying) {
      onPause();
    } else {
      onPlay();
    }
  };

  const onProgress = ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
    setBuffered((target as HTMLAudioElement).buffered);
  };

  const onTimeUpdate = ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
    const eventTime = Math.floor((target as HTMLAudioElement).currentTime);
    if (trackPositionRef.current !== eventTime) {
      setTrackPosition([eventTime]);

      const trackingInformation = getTrackingInformation(
        'audio-player-audio',
        EventTrigger.Pulse,
      );
      fireEvent(trackingInformation);
    }
    if (trackPositionRef.current > 5) {
      setIsPrevTrackBtnDisabled(false);
    } else {
      setIsPrevTrackBtnDisabled(Boolean(disablePreviousTrack));
    }
  };

  const onVolumeChange = useCallback(
    ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
      updateAudioVolume((target as HTMLAudioElement).volume);
    },
    [updateAudioVolume],
  );

  const onChangeSlider = useCallback(
    ([value]: number[]) => {
      updateAudioTime(value);
    },
    [updateAudioTime],
  );

  const onChangeVolumeSlider = useCallback(
    (value: number) => {
      updateAudioVolume(value);
    },
    [updateAudioVolume],
  );

  const onEnded = useCallback(() => {
    const trackingInformation = getTrackingInformation(
      'audio-complete',
      EventTrigger.End,
    );
    fireEvent(trackingInformation);
  }, [getTrackingInformation, fireEvent]);

  // Alias useEffect hook to avoid 'ifPlayer' and 'autoPlay' being added to hook dependencies.
  const ue = useEffect;
  ue(() => {
    ifPlayer(player => {
      player.load();
      onWaiting();
      if (!autoPlay) {
        if (isPlaying) {
          player.play();
        } else {
          player.pause();
        }
      }
    });

    return () => {
      clearTimeout(showLoaderTimeoutRef.current);
    };
  }, [src]);

  // Set initial volume value on player, don't want to re-run this.
  ue(() => {
    const storedVolume = parseFloat(
      (typeof window !== 'undefined' &&
        window.localStorage.getItem('newskit-audioplayer-volume')) ||
        '',
    );
    updateAudioVolume(Number.isNaN(storedVolume) ? 0.7 : storedVolume);
  }, []);

  return {
    onClickPrevious,
    onClickNext,
    onClickBackward,
    onClickForward,
    onPopoutClick,
    onCanPlay,
    onWaiting,
    togglePlay,
    onPlay,
    onPause,
    onProgress,
    onDurationChange,
    onTimeUpdate,
    onVolumeChange,
    onEnded,
    onChangeSlider,
    onChangeVolumeSlider,
  };
};
