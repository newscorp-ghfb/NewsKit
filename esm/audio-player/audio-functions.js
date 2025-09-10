import { __assign } from "tslib";
/* eslint-disable no-param-reassign */
import { useCallback, useEffect } from 'react';
import { EventTrigger, useInstrumentation } from '../instrumentation';
import { AudioEvents } from './types';
import { formatTrackTime, getMediaSegment } from './utils';
import calculateStringPercentage from '../utils/calculate-string-percentage';
import { getValueInRange } from '../utils/value-in-range';
import versionNumber from '../version-number.json';
export var useAudioFunctions = function (_a) {
    var _b;
    var onPreviousTrack = _a.onPreviousTrack, onNextTrack = _a.onNextTrack, autoPlay = _a.autoPlay, disablePreviousTrack = _a.disablePreviousTrack, src = _a.src, live = _a.live, duration = _a.duration, loading = _a.loading, playing = _a.playing, showLoaderTimeoutRef = _a.showLoaderTimeoutRef, trackPositionRef = _a.trackPositionRef, audioRef = _a.audioRef, setLoading = _a.setLoading, setTrackPosition = _a.setTrackPosition, setPlayState = _a.setPlayState, setVolume = _a.setVolume, setDuration = _a.setDuration, setDisplayDuration = _a.setDisplayDuration, setBuffered = _a.setBuffered, setIsPrevTrackBtnDisabled = _a.setIsPrevTrackBtnDisabled;
    var fireEvent = useInstrumentation().fireEvent;
    var ifPlayer = useCallback(function (fn) {
        var player = audioRef.current;
        // No need to test the else, player should always be defined, if not we just ignore.
        /* istanbul ignore else */
        if (player) {
            fn(player);
        }
    }, [audioRef]);
    var buildMediaData = useCallback(function () {
        var playerData = {
            media_player: "newskit-audio-player-".concat(versionNumber.version),
            media_type: 'audio',
        };
        return live
            ? playerData
            : __assign(__assign({}, playerData), { media_duration: formatTrackTime(duration), media_milestone: calculateStringPercentage(trackPositionRef.current, duration), media_segment: getMediaSegment(duration, trackPositionRef.current), media_offset: formatTrackTime(trackPositionRef.current) });
    }, [duration, live, trackPositionRef]);
    var getTrackingInformation = useCallback(function (originator, eventTrigger, eventSpecificInfo) {
        var context = __assign(__assign({}, buildMediaData()), eventSpecificInfo);
        var trackingInformation = {
            originator: originator,
            trigger: eventTrigger,
            context: context,
        };
        return trackingInformation;
    }, [buildMediaData]);
    var onWaiting = useCallback(function () {
        clearTimeout(showLoaderTimeoutRef.current);
        // We are giving some extra time before setting loading state
        // to avoid flickering of the play/loading button when
        // skipping back to already buffered time.
        showLoaderTimeoutRef.current = window.setTimeout(function () { return setLoading(true); }, 700);
    }, [setLoading, showLoaderTimeoutRef]);
    var onCanPlay = useCallback(function () {
        clearTimeout(showLoaderTimeoutRef.current);
        setLoading(false);
    }, [setLoading, showLoaderTimeoutRef]);
    var updateAudioTime = useCallback(function (playerTime) {
        var newPlayerTime = getValueInRange(playerTime, [0, duration]);
        setTrackPosition([newPlayerTime]);
        ifPlayer(function (player) {
            player.currentTime = newPlayerTime;
        });
    }, [duration, setTrackPosition, ifPlayer]);
    var updateAudioVolume = useCallback(function (vol) {
        window.localStorage.setItem('newskit-audioplayer-volume', vol.toString());
        setVolume(vol);
        ifPlayer(function (player) {
            player.volume = vol;
        });
    }, [ifPlayer, setVolume]);
    var onClickPrevious = useCallback(function () {
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
    var onClickNext = useCallback(function () {
        // If no function is passed, the button is disabled, check is just to be sure; the else can't be tested.
        /* istanbul ignore else */
        if (onNextTrack) {
            onNextTrack();
        }
    }, [onNextTrack]);
    var onClickBackward = useCallback(function () {
        updateAudioTime(trackPositionRef.current - 10);
        var trackingInformation = getTrackingInformation('audio-player-skip-backward', EventTrigger.Click, { event_navigation_name: 'backward skip' });
        fireEvent(trackingInformation);
    }, [fireEvent, getTrackingInformation, updateAudioTime, trackPositionRef]);
    var onClickForward = useCallback(function () {
        updateAudioTime(trackPositionRef.current + 10);
        var trackingInformation = getTrackingInformation('audio-player-skip-forward', EventTrigger.Click, { event_navigation_name: 'forward skip' });
        fireEvent(trackingInformation);
    }, [fireEvent, getTrackingInformation, updateAudioTime, trackPositionRef]);
    var onDurationChange = useCallback(function (_a) {
        var target = _a.target;
        var tgt = target;
        setDuration(tgt.duration);
        setDisplayDuration(tgt.duration);
        setBuffered(tgt.buffered);
    }, [setBuffered, setDuration, setDisplayDuration]);
    var play = useCallback(function () {
        ifPlayer(function (player) {
            setPlayState(true);
            player.play();
        });
    }, [ifPlayer, setPlayState]);
    var onPlay = useCallback(function () {
        if (autoPlay) {
            fireEvent(getTrackingInformation('audio-player-audio', EventTrigger.Start));
        }
        if (!playing) {
            play();
            fireEvent(getTrackingInformation('audio-player-play-button', EventTrigger.Click));
        }
    }, [autoPlay, fireEvent, playing, getTrackingInformation, play]);
    var pause = useCallback(function () {
        ifPlayer(function (player) {
            setPlayState(false);
            player.pause();
        });
    }, [ifPlayer, setPlayState]);
    var onPause = useCallback(function () {
        if (playing) {
            pause();
            fireEvent(getTrackingInformation(live ? 'audio-player-stop-button' : 'audio-player-pause-button', EventTrigger.Click));
        }
    }, [playing, pause, fireEvent, live, getTrackingInformation]);
    var onPopoutClick = function () {
        pause();
        fireEvent(getTrackingInformation('audio-player-popout', EventTrigger.Click));
    };
    var togglePlay = useCallback(function () {
        if (loading) {
            return;
        }
        if (playing) {
            onPause();
        }
        else {
            onPlay();
        }
    }, [loading, playing, onPause, onPlay]);
    var onProgress = function (_a) {
        var target = _a.target;
        setBuffered(target.buffered);
    };
    var onTimeUpdate = function (_a) {
        var target = _a.target;
        var eventTime = Math.floor(target.currentTime);
        if (trackPositionRef.current !== eventTime) {
            setTrackPosition([eventTime]);
            var trackingInformation = getTrackingInformation('audio-player-audio', EventTrigger.Pulse);
            fireEvent(trackingInformation);
        }
        if (trackPositionRef.current > 5) {
            setIsPrevTrackBtnDisabled(false);
        }
        else {
            setIsPrevTrackBtnDisabled(Boolean(disablePreviousTrack));
        }
    };
    var onVolumeChange = useCallback(function (_a) {
        var target = _a.target;
        updateAudioVolume(target.volume);
    }, [updateAudioVolume]);
    var onChangeSlider = useCallback(function (_a) {
        var value = _a[0];
        updateAudioTime(value);
    }, [updateAudioTime]);
    var onChangeVolumeSlider = useCallback(function (value) {
        updateAudioVolume(value);
    }, [updateAudioVolume]);
    var onEnded = useCallback(function () {
        var trackingInformation = getTrackingInformation('audio-complete', EventTrigger.End);
        fireEvent(trackingInformation);
    }, [getTrackingInformation, fireEvent]);
    useEffect(function () {
        ifPlayer(function (player) {
            player.load();
            onWaiting();
            if (!autoPlay) {
                if (playing) {
                    player.play();
                }
                else {
                    player.pause();
                }
            }
        });
        return function () {
            clearTimeout(showLoaderTimeoutRef.current);
        };
    }, [src]); // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(function () {
        var storedVolume = parseFloat((typeof window !== 'undefined' &&
            window.localStorage.getItem('newskit-audioplayer-volume')) ||
            '');
        updateAudioVolume(Number.isNaN(storedVolume) ? 0.7 : storedVolume);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    return {
        audioEvents: (_b = {},
            _b[AudioEvents.Play] = onPlay,
            _b[AudioEvents.Pause] = onPause,
            _b[AudioEvents.Waiting] = onWaiting,
            _b[AudioEvents.CanPlay] = onCanPlay,
            _b[AudioEvents.Ended] = onEnded,
            _b[AudioEvents.VolumeChange] = onVolumeChange,
            _b[AudioEvents.DurationChange] = onDurationChange,
            _b[AudioEvents.TimeUpdate] = onTimeUpdate,
            _b[AudioEvents.Progress] = onProgress,
            _b),
        onClickPrevious: onClickPrevious,
        onClickNext: onClickNext,
        onClickBackward: onClickBackward,
        onClickForward: onClickForward,
        onPopoutClick: onPopoutClick,
        togglePlay: togglePlay,
        onChangeSlider: onChangeSlider,
        onChangeVolumeSlider: onChangeVolumeSlider,
    };
};
//# sourceMappingURL=audio-functions.js.map