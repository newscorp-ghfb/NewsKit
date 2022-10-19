/* eslint-disable no-param-reassign */
import {useCallback, SyntheticEvent, useEffect} from 'react';
import {EventTrigger, useInstrumentation} from '../instrumentation';
import {AudioEvents, AudioFunctionDependencies} from './types';
import {formatTrackTime, getMediaSegment} from './utils';
import calculateStringPercentage from '../utils/calculate-string-percentage';
import {getValueInRange} from '../utils/value-in-range';
import versionNumber from '../version-number.json';

export const useAudioFunctions = ({
  autoPlay,
  src,
  live,
  duration,
  loading,
  playing,
  showLoaderTimeoutRef,
  currentTimeRef,
  audioRef,
  setLoading,
  setCurrentTime,
  setPlayState,
  setVolume,
  setPlaybackSpeed,
  setDuration,
  setDisplayDuration,
  setBuffered,
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
      media_player: `newskit-audio-player-${versionNumber.version}`,
      media_type: 'audio',
    };
    return live
      ? playerData
      : {
          ...playerData,
          media_duration: formatTrackTime(duration),
          media_milestone: calculateStringPercentage(
            currentTimeRef.current,
            duration,
          ),
          media_segment: getMediaSegment(duration, currentTimeRef.current),
          media_offset: formatTrackTime(currentTimeRef.current),
          media_volume: audioRef.current?.volume,
          media_playback_rate: audioRef.current?.playbackRate,
        };
  }, [live, duration, currentTimeRef, audioRef]);

  const getTrackingInformation = useCallback(
    (
      originator: string,
      eventTrigger: EventTrigger,
      eventSpecificInfo?: object,
    ) => {
      const context = {
        ...buildMediaData(),
        ...eventSpecificInfo,
      };
      const trackingInformation = {
        originator,
        trigger: eventTrigger,
        context,
      };

      return trackingInformation;
    },
    [buildMediaData],
  );

  const onWaiting = useCallback(() => {
    clearTimeout(showLoaderTimeoutRef.current);
    // We are giving some extra time before setting loading state
    // to avoid flickering of the play/loading button when
    // skipping back to already buffered time.
    showLoaderTimeoutRef.current = window.setTimeout(
      () => setLoading(true),
      700,
    );
  }, [setLoading, showLoaderTimeoutRef]);

  const onCanPlay = useCallback(() => {
    clearTimeout(showLoaderTimeoutRef.current);
    setLoading(false);
  }, [setLoading, showLoaderTimeoutRef]);

  const updateAudioTime = useCallback(
    (playerTime: number) => {
      const newPlayerTime = getValueInRange(playerTime, [0, duration]);
      setCurrentTime(newPlayerTime);

      ifPlayer(player => {
        player.currentTime = newPlayerTime;
      });
    },
    [duration, setCurrentTime, ifPlayer],
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

  const updatePlaybackSpeed = useCallback(
    (speed: number) => {
      setPlaybackSpeed(speed);

      ifPlayer(player => {
        player.playbackRate = speed;
      });

      const trackingInformation = getTrackingInformation(
        'audio-player-playback-speed',
        EventTrigger.Change,
      );
      fireEvent(trackingInformation);
    },
    [ifPlayer, setPlaybackSpeed, getTrackingInformation, fireEvent],
  );

  const onClickBackward = useCallback(
    /* istanbul ignore next */
    ({seconds = 10}: {seconds: number}) => {
      updateAudioTime(currentTimeRef.current - seconds);
      const trackingInformation = getTrackingInformation(
        'audio-player-skip-backward',
        EventTrigger.Click,
        {event_navigation_name: 'backward skip'},
      );
      fireEvent(trackingInformation);
    },
    [fireEvent, getTrackingInformation, updateAudioTime, currentTimeRef],
  );

  const onClickForward = useCallback(
    /* istanbul ignore next */
    ({seconds = 10}: {seconds: number}) => {
      updateAudioTime(currentTimeRef.current + seconds);

      const trackingInformation = getTrackingInformation(
        'audio-player-skip-forward',
        EventTrigger.Click,
        {event_navigation_name: 'forward skip'},
      );
      fireEvent(trackingInformation);
    },
    [fireEvent, getTrackingInformation, updateAudioTime, currentTimeRef],
  );

  const onDurationChange = useCallback(
    ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
      const tgt = target as HTMLAudioElement;
      setDuration(tgt.duration);
      setDisplayDuration(tgt.duration);
      setBuffered(tgt.buffered);
    },
    [setBuffered, setDuration, setDisplayDuration],
  );

  const play = useCallback(() => {
    ifPlayer(player => {
      setPlayState(true);
      player.play();
    });
  }, [ifPlayer, setPlayState]);

  const onPlay = useCallback(() => {
    if (autoPlay) {
      fireEvent(
        getTrackingInformation('audio-player-audio', EventTrigger.Start),
      );
    }

    if (!playing) {
      play();

      fireEvent(
        getTrackingInformation('audio-player-play-button', EventTrigger.Click),
      );
    }
  }, [autoPlay, fireEvent, playing, getTrackingInformation, play]);

  const pause = useCallback(() => {
    ifPlayer(player => {
      setPlayState(false);
      player.pause();
    });
  }, [ifPlayer, setPlayState]);

  const onPause = useCallback(() => {
    if (playing) {
      pause();

      fireEvent(
        getTrackingInformation(
          live ? 'audio-player-stop-button' : 'audio-player-pause-button',
          EventTrigger.Click,
        ),
      );
    }
  }, [playing, pause, fireEvent, live, getTrackingInformation]);

  const togglePlay = useCallback(() => {
    if (loading) {
      return;
    }

    if (playing) {
      onPause();
    } else {
      onPlay();
    }
  }, [loading, playing, onPause, onPlay]);

  const onProgress = useCallback(
    ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
      setBuffered((target as HTMLAudioElement).buffered);
    },
    [setBuffered],
  );

  const onTimeUpdate = useCallback(
    ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
      const eventTime = Math.floor((target as HTMLAudioElement).currentTime);

      if (currentTimeRef.current !== eventTime) {
        setCurrentTime(eventTime);

        const trackingInformation = getTrackingInformation(
          'audio-player-audio',
          EventTrigger.Pulse,
        );
        fireEvent(trackingInformation);
      }
    },
    [fireEvent, getTrackingInformation, setCurrentTime, currentTimeRef],
  );

  const onVolumeChange = useCallback(
    ({target}: SyntheticEvent<HTMLAudioElement, Event>) => {
      updateAudioVolume((target as HTMLAudioElement).volume);

      const trackingInformation = getTrackingInformation(
        'audio-player-volume',
        EventTrigger.Change,
      );
      fireEvent(trackingInformation);
    },
    [updateAudioVolume, getTrackingInformation, fireEvent],
  );

  const onChangeSlider = useCallback(
    (value: number) => {
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

  const onPlaybackSpeedChange = useCallback(
    (value: number) => {
      updatePlaybackSpeed(value);
    },
    [updatePlaybackSpeed],
  );

  const onEnded = useCallback(() => {
    const trackingInformation = getTrackingInformation(
      'audio-player-complete',
      EventTrigger.End,
    );
    fireEvent(trackingInformation);
  }, [getTrackingInformation, fireEvent]);

  // Preserve audioplayer play state on src change
  useEffect(() => {
    ifPlayer(player => {
      player.load();
      onWaiting();
      if (!autoPlay) {
        if (playing) {
          player.play();
        } else {
          player.pause();
        }
      }
    });

    return () => {
      clearTimeout(showLoaderTimeoutRef.current);
    };
  }, [src]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    audioEvents: {
      [AudioEvents.Play]: onPlay,
      [AudioEvents.Pause]: onPause,
      [AudioEvents.Waiting]: onWaiting,
      [AudioEvents.CanPlay]: onCanPlay,
      [AudioEvents.Ended]: onEnded,
      [AudioEvents.VolumeChange]: onVolumeChange,
      [AudioEvents.DurationChange]: onDurationChange,
      [AudioEvents.TimeUpdate]: onTimeUpdate,
      [AudioEvents.Progress]: onProgress,
    },
    onClickBackward,
    onClickForward,
    togglePlay,
    onChangeSlider,
    onChangeVolumeSlider,
    onPlaybackSpeedChange,
  };
};
