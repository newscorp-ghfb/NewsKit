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
    var autoPlay = _a.autoPlay, src = _a.src, live = _a.live, duration = _a.duration, loading = _a.loading, playing = _a.playing, showLoaderTimeoutRef = _a.showLoaderTimeoutRef, currentTimeRef = _a.currentTimeRef, audioRef = _a.audioRef, setLoading = _a.setLoading, setCurrentTime = _a.setCurrentTime, setPlayState = _a.setPlayState, setVolume = _a.setVolume, setPlaybackSpeed = _a.setPlaybackSpeed, setDuration = _a.setDuration, setDisplayDuration = _a.setDisplayDuration, setBuffered = _a.setBuffered;
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
            : __assign(__assign({}, playerData), { media_duration: formatTrackTime(duration), media_milestone: calculateStringPercentage(currentTimeRef.current, duration), media_segment: getMediaSegment(duration, currentTimeRef.current), media_offset: formatTrackTime(currentTimeRef.current), 
                /* istanbul ignore next */
                media_volume: (audioRef.current && audioRef.current.volume) || 0, media_playback_rate: 
                /* istanbul ignore next */
                (audioRef.current && audioRef.current.playbackRate) || 0 });
    }, [live, duration, currentTimeRef, audioRef]);
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
        setCurrentTime(newPlayerTime);
        ifPlayer(function (player) {
            player.currentTime = newPlayerTime;
        });
    }, [duration, setCurrentTime, ifPlayer]);
    var updateAudioVolume = useCallback(function (vol) {
        window.localStorage.setItem('newskit-audioplayer-volume', vol.toString());
        setVolume(vol);
        ifPlayer(function (player) {
            player.volume = vol;
        });
    }, [ifPlayer, setVolume]);
    var updatePlaybackSpeed = useCallback(function (speed) {
        setPlaybackSpeed(speed);
        ifPlayer(function (player) {
            player.playbackRate = speed;
        });
        var trackingInformation = getTrackingInformation('audio-player-playback-speed', EventTrigger.Change);
        fireEvent(trackingInformation);
    }, [ifPlayer, setPlaybackSpeed, getTrackingInformation, fireEvent]);
    var onClickBackward = useCallback(
    /* istanbul ignore next */
    function (_a) {
        var _b = _a.seconds, seconds = _b === void 0 ? 10 : _b;
        updateAudioTime(currentTimeRef.current - seconds);
        var trackingInformation = getTrackingInformation('audio-player-skip-backward', EventTrigger.Click, { event_navigation_name: 'backward skip' });
        fireEvent(trackingInformation);
    }, [fireEvent, getTrackingInformation, updateAudioTime, currentTimeRef]);
    var onClickForward = useCallback(
    /* istanbul ignore next */
    function (_a) {
        var _b = _a.seconds, seconds = _b === void 0 ? 10 : _b;
        updateAudioTime(currentTimeRef.current + seconds);
        var trackingInformation = getTrackingInformation('audio-player-skip-forward', EventTrigger.Click, { event_navigation_name: 'forward skip' });
        fireEvent(trackingInformation);
    }, [fireEvent, getTrackingInformation, updateAudioTime, currentTimeRef]);
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
    var onProgress = useCallback(function (_a) {
        var target = _a.target;
        setBuffered(target.buffered);
    }, [setBuffered]);
    var onTimeUpdate = useCallback(function (_a) {
        var target = _a.target;
        var eventTime = Math.floor(target.currentTime);
        if (currentTimeRef.current !== eventTime) {
            setCurrentTime(eventTime);
            var trackingInformation = getTrackingInformation('audio-player-audio', EventTrigger.Pulse);
            fireEvent(trackingInformation);
        }
    }, [fireEvent, getTrackingInformation, setCurrentTime, currentTimeRef]);
    var onVolumeChange = useCallback(function (_a) {
        var target = _a.target;
        updateAudioVolume(target.volume);
        var trackingInformation = getTrackingInformation('audio-player-volume', EventTrigger.Change);
        fireEvent(trackingInformation);
    }, [updateAudioVolume, getTrackingInformation, fireEvent]);
    var onChangeSlider = useCallback(function (value) {
        updateAudioTime(value);
    }, [updateAudioTime]);
    var onChangeVolumeSlider = useCallback(function (value) {
        updateAudioVolume(value);
    }, [updateAudioVolume]);
    var onPlaybackSpeedChange = useCallback(function (value) {
        updatePlaybackSpeed(value);
    }, [updatePlaybackSpeed]);
    var onEnded = useCallback(function () {
        var trackingInformation = getTrackingInformation('audio-player-complete', EventTrigger.End);
        fireEvent(trackingInformation);
    }, [getTrackingInformation, fireEvent]);
    // Preserve audioplayer play state on src change
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
        onClickBackward: onClickBackward,
        onClickForward: onClickForward,
        togglePlay: togglePlay,
        onChangeSlider: onChangeSlider,
        onChangeVolumeSlider: onChangeVolumeSlider,
        onPlaybackSpeedChange: onPlaybackSpeedChange,
    };
};
//# sourceMappingURL=audio-functions.js.map