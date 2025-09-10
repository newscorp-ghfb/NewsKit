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
    var onPreviousTrack = _a.onPreviousTrack, onNextTrack = _a.onNextTrack, autoPlay = _a.autoPlay, disablePreviousTrack = _a.disablePreviousTrack, src = _a.src, live = _a.live, duration = _a.duration, loading = _a.loading, playing = _a.playing, showLoaderTimeoutRef = _a.showLoaderTimeoutRef, trackPositionRef = _a.trackPositionRef, audioRef = _a.audioRef, setLoading = _a.setLoading, setTrackPosition = _a.setTrackPosition, setPlayState = _a.setPlayState, setVolume = _a.setVolume, setDuration = _a.setDuration, setDisplayDuration = _a.setDisplayDuration, setBuffered = _a.setBuffered, setIsPrevTrackBtnDisabled = _a.setIsPrevTrackBtnDisabled;
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
            : tslib_1.__assign(tslib_1.__assign({}, playerData), { media_duration: (0, utils_1.formatTrackTime)(duration), media_milestone: (0, calculate_string_percentage_1.default)(trackPositionRef.current, duration), media_segment: (0, utils_1.getMediaSegment)(duration, trackPositionRef.current), media_offset: (0, utils_1.formatTrackTime)(trackPositionRef.current) });
    }, [duration, live, trackPositionRef]);
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
        setTrackPosition([newPlayerTime]);
        ifPlayer(function (player) {
            player.currentTime = newPlayerTime;
        });
    }, [duration, setTrackPosition, ifPlayer]);
    var updateAudioVolume = (0, react_1.useCallback)(function (vol) {
        window.localStorage.setItem('newskit-audioplayer-volume', vol.toString());
        setVolume(vol);
        ifPlayer(function (player) {
            player.volume = vol;
        });
    }, [ifPlayer, setVolume]);
    var onClickPrevious = (0, react_1.useCallback)(function () {
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
    var onClickNext = (0, react_1.useCallback)(function () {
        // If no function is passed, the button is disabled, check is just to be sure; the else can't be tested.
        /* istanbul ignore else */
        if (onNextTrack) {
            onNextTrack();
        }
    }, [onNextTrack]);
    var onClickBackward = (0, react_1.useCallback)(function () {
        updateAudioTime(trackPositionRef.current - 10);
        var trackingInformation = getTrackingInformation('audio-player-skip-backward', instrumentation_1.EventTrigger.Click, { event_navigation_name: 'backward skip' });
        fireEvent(trackingInformation);
    }, [fireEvent, getTrackingInformation, updateAudioTime, trackPositionRef]);
    var onClickForward = (0, react_1.useCallback)(function () {
        updateAudioTime(trackPositionRef.current + 10);
        var trackingInformation = getTrackingInformation('audio-player-skip-forward', instrumentation_1.EventTrigger.Click, { event_navigation_name: 'forward skip' });
        fireEvent(trackingInformation);
    }, [fireEvent, getTrackingInformation, updateAudioTime, trackPositionRef]);
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
    var onPopoutClick = function () {
        pause();
        fireEvent(getTrackingInformation('audio-player-popout', instrumentation_1.EventTrigger.Click));
    };
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
    var onProgress = function (_a) {
        var target = _a.target;
        setBuffered(target.buffered);
    };
    var onTimeUpdate = function (_a) {
        var target = _a.target;
        var eventTime = Math.floor(target.currentTime);
        if (trackPositionRef.current !== eventTime) {
            setTrackPosition([eventTime]);
            var trackingInformation = getTrackingInformation('audio-player-audio', instrumentation_1.EventTrigger.Pulse);
            fireEvent(trackingInformation);
        }
        if (trackPositionRef.current > 5) {
            setIsPrevTrackBtnDisabled(false);
        }
        else {
            setIsPrevTrackBtnDisabled(Boolean(disablePreviousTrack));
        }
    };
    var onVolumeChange = (0, react_1.useCallback)(function (_a) {
        var target = _a.target;
        updateAudioVolume(target.volume);
    }, [updateAudioVolume]);
    var onChangeSlider = (0, react_1.useCallback)(function (_a) {
        var value = _a[0];
        updateAudioTime(value);
    }, [updateAudioTime]);
    var onChangeVolumeSlider = (0, react_1.useCallback)(function (value) {
        updateAudioVolume(value);
    }, [updateAudioVolume]);
    var onEnded = (0, react_1.useCallback)(function () {
        var trackingInformation = getTrackingInformation('audio-complete', instrumentation_1.EventTrigger.End);
        fireEvent(trackingInformation);
    }, [getTrackingInformation, fireEvent]);
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
    (0, react_1.useEffect)(function () {
        var storedVolume = parseFloat((typeof window !== 'undefined' &&
            window.localStorage.getItem('newskit-audioplayer-volume')) ||
            '');
        updateAudioVolume(Number.isNaN(storedVolume) ? 0.7 : storedVolume);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
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
exports.useAudioFunctions = useAudioFunctions;
//# sourceMappingURL=audio-functions.js.map