"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudioFunctions = void 0;
var tslib_1 = require("tslib");
/* eslint-disable no-param-reassign */
var react_1 = require("react");
var instrumentation_1 = require("../instrumentation");
var types_1 = require("./types");
var utils_1 = require("./utils");
var calculate_string_percentage_1 = tslib_1.__importDefault(require("../utils/calculate-string-percentage"));
var value_in_range_1 = require("../utils/value-in-range");
var version_number_json_1 = tslib_1.__importDefault(require("../version-number.json"));
var useAudioFunctions = function (_a) {
    var _b;
    var autoPlay = _a.autoPlay, src = _a.src, live = _a.live, duration = _a.duration, loading = _a.loading, playing = _a.playing, showLoaderTimeoutRef = _a.showLoaderTimeoutRef, currentTimeRef = _a.currentTimeRef, audioRef = _a.audioRef, setLoading = _a.setLoading, setCurrentTime = _a.setCurrentTime, setPlayState = _a.setPlayState, setVolume = _a.setVolume, setPlaybackSpeed = _a.setPlaybackSpeed, setDuration = _a.setDuration, setDisplayDuration = _a.setDisplayDuration, setBuffered = _a.setBuffered;
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var ifPlayer = (0, react_1.useCallback)(function (fn) {
        var player = audioRef.current;
        // No need to test the else, player should always be defined, if not we just ignore.
        /* istanbul ignore else */
        if (player) {
            fn(player);
        }
    }, [audioRef]);
    var buildMediaData = (0, react_1.useCallback)(function () {
        var playerData = {
            media_player: "newskit-audio-player-".concat(version_number_json_1.default.version),
            media_type: 'audio',
        };
        return live
            ? playerData
            : tslib_1.__assign(tslib_1.__assign({}, playerData), { media_duration: (0, utils_1.formatTrackTime)(duration), media_milestone: (0, calculate_string_percentage_1.default)(currentTimeRef.current, duration), media_segment: (0, utils_1.getMediaSegment)(duration, currentTimeRef.current), media_offset: (0, utils_1.formatTrackTime)(currentTimeRef.current), 
                /* istanbul ignore next */
                media_volume: (audioRef.current && audioRef.current.volume) || 0, media_playback_rate: 
                /* istanbul ignore next */
                (audioRef.current && audioRef.current.playbackRate) || 0 });
    }, [live, duration, currentTimeRef, audioRef]);
    var getTrackingInformation = (0, react_1.useCallback)(function (originator, eventTrigger, eventSpecificInfo) {
        var context = tslib_1.__assign(tslib_1.__assign({}, buildMediaData()), eventSpecificInfo);
        var trackingInformation = {
            originator: originator,
            trigger: eventTrigger,
            context: context,
        };
        return trackingInformation;
    }, [buildMediaData]);
    var onWaiting = (0, react_1.useCallback)(function () {
        clearTimeout(showLoaderTimeoutRef.current);
        // We are giving some extra time before setting loading state
        // to avoid flickering of the play/loading button when
        // skipping back to already buffered time.
        showLoaderTimeoutRef.current = window.setTimeout(function () { return setLoading(true); }, 700);
    }, [setLoading, showLoaderTimeoutRef]);
    var onCanPlay = (0, react_1.useCallback)(function () {
        clearTimeout(showLoaderTimeoutRef.current);
        setLoading(false);
    }, [setLoading, showLoaderTimeoutRef]);
    var updateAudioTime = (0, react_1.useCallback)(function (playerTime) {
        var newPlayerTime = (0, value_in_range_1.getValueInRange)(playerTime, [0, duration]);
        setCurrentTime(newPlayerTime);
        ifPlayer(function (player) {
            player.currentTime = newPlayerTime;
        });
    }, [duration, setCurrentTime, ifPlayer]);
    var updateAudioVolume = (0, react_1.useCallback)(function (vol) {
        window.localStorage.setItem('newskit-audioplayer-volume', vol.toString());
        setVolume(vol);
        ifPlayer(function (player) {
            player.volume = vol;
        });
    }, [ifPlayer, setVolume]);
    var updatePlaybackSpeed = (0, react_1.useCallback)(function (speed) {
        setPlaybackSpeed(speed);
        ifPlayer(function (player) {
            player.playbackRate = speed;
        });
        var trackingInformation = getTrackingInformation('audio-player-playback-speed', instrumentation_1.EventTrigger.Change);
        fireEvent(trackingInformation);
    }, [ifPlayer, setPlaybackSpeed, getTrackingInformation, fireEvent]);
    var onClickBackward = (0, react_1.useCallback)(
    /* istanbul ignore next */
    function (_a) {
        var _b = _a.seconds, seconds = _b === void 0 ? 10 : _b;
        updateAudioTime(currentTimeRef.current - seconds);
        var trackingInformation = getTrackingInformation('audio-player-skip-backward', instrumentation_1.EventTrigger.Click, { event_navigation_name: 'backward skip' });
        fireEvent(trackingInformation);
    }, [fireEvent, getTrackingInformation, updateAudioTime, currentTimeRef]);
    var onClickForward = (0, react_1.useCallback)(
    /* istanbul ignore next */
    function (_a) {
        var _b = _a.seconds, seconds = _b === void 0 ? 10 : _b;
        updateAudioTime(currentTimeRef.current + seconds);
        var trackingInformation = getTrackingInformation('audio-player-skip-forward', instrumentation_1.EventTrigger.Click, { event_navigation_name: 'forward skip' });
        fireEvent(trackingInformation);
    }, [fireEvent, getTrackingInformation, updateAudioTime, currentTimeRef]);
    var onDurationChange = (0, react_1.useCallback)(function (_a) {
        var target = _a.target;
        var tgt = target;
        setDuration(tgt.duration);
        setDisplayDuration(tgt.duration);
        setBuffered(tgt.buffered);
    }, [setBuffered, setDuration, setDisplayDuration]);
    var play = (0, react_1.useCallback)(function () {
        ifPlayer(function (player) {
            setPlayState(true);
            player.play();
        });
    }, [ifPlayer, setPlayState]);
    var onPlay = (0, react_1.useCallback)(function () {
        if (autoPlay) {
            fireEvent(getTrackingInformation('audio-player-audio', instrumentation_1.EventTrigger.Start));
        }
        if (!playing) {
            play();
            fireEvent(getTrackingInformation('audio-player-play-button', instrumentation_1.EventTrigger.Click));
        }
    }, [autoPlay, fireEvent, playing, getTrackingInformation, play]);
    var pause = (0, react_1.useCallback)(function () {
        ifPlayer(function (player) {
            setPlayState(false);
            player.pause();
        });
    }, [ifPlayer, setPlayState]);
    var onPause = (0, react_1.useCallback)(function () {
        if (playing) {
            pause();
            fireEvent(getTrackingInformation(live ? 'audio-player-stop-button' : 'audio-player-pause-button', instrumentation_1.EventTrigger.Click));
        }
    }, [playing, pause, fireEvent, live, getTrackingInformation]);
    var togglePlay = (0, react_1.useCallback)(function () {
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
    var onProgress = (0, react_1.useCallback)(function (_a) {
        var target = _a.target;
        setBuffered(target.buffered);
    }, [setBuffered]);
    var onTimeUpdate = (0, react_1.useCallback)(function (_a) {
        var target = _a.target;
        var eventTime = Math.floor(target.currentTime);
        if (currentTimeRef.current !== eventTime) {
            setCurrentTime(eventTime);
            var trackingInformation = getTrackingInformation('audio-player-audio', instrumentation_1.EventTrigger.Pulse);
            fireEvent(trackingInformation);
        }
    }, [fireEvent, getTrackingInformation, setCurrentTime, currentTimeRef]);
    var onVolumeChange = (0, react_1.useCallback)(function (_a) {
        var target = _a.target;
        updateAudioVolume(target.volume);
        var trackingInformation = getTrackingInformation('audio-player-volume', instrumentation_1.EventTrigger.Change);
        fireEvent(trackingInformation);
    }, [updateAudioVolume, getTrackingInformation, fireEvent]);
    var onChangeSlider = (0, react_1.useCallback)(function (value) {
        updateAudioTime(value);
    }, [updateAudioTime]);
    var onChangeVolumeSlider = (0, react_1.useCallback)(function (value) {
        updateAudioVolume(value);
    }, [updateAudioVolume]);
    var onPlaybackSpeedChange = (0, react_1.useCallback)(function (value) {
        updatePlaybackSpeed(value);
    }, [updatePlaybackSpeed]);
    var onEnded = (0, react_1.useCallback)(function () {
        var trackingInformation = getTrackingInformation('audio-player-complete', instrumentation_1.EventTrigger.End);
        fireEvent(trackingInformation);
    }, [getTrackingInformation, fireEvent]);
    // Preserve audioplayer play state on src change
    (0, react_1.useEffect)(function () {
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
            _b[types_1.AudioEvents.Play] = onPlay,
            _b[types_1.AudioEvents.Pause] = onPause,
            _b[types_1.AudioEvents.Waiting] = onWaiting,
            _b[types_1.AudioEvents.CanPlay] = onCanPlay,
            _b[types_1.AudioEvents.Ended] = onEnded,
            _b[types_1.AudioEvents.VolumeChange] = onVolumeChange,
            _b[types_1.AudioEvents.DurationChange] = onDurationChange,
            _b[types_1.AudioEvents.TimeUpdate] = onTimeUpdate,
            _b[types_1.AudioEvents.Progress] = onProgress,
            _b),
        onClickBackward: onClickBackward,
        onClickForward: onClickForward,
        togglePlay: togglePlay,
        onChangeSlider: onChangeSlider,
        onChangeVolumeSlider: onChangeVolumeSlider,
        onPlaybackSpeedChange: onPlaybackSpeedChange,
    };
};
exports.useAudioFunctions = useAudioFunctions;
//# sourceMappingURL=audio-functions.js.map