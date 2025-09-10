"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerComposable = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var icon_filled_pause_1 = require("../icons/filled/material/icon-filled-pause");
var icon_filled_play_arrow_1 = require("../icons/filled/material/icon-filled-play-arrow");
var icon_filled_stop_1 = require("../icons/filled/material/icon-filled-stop");
var audio_element_1 = require("./components/audio-element");
var audio_functions_1 = require("./audio-functions");
var context_1 = require("./context");
var use_keypress_1 = require("../utils/hooks/use-keypress");
var types_1 = require("./types");
var utils_1 = require("./components/time-display/utils");
var icons_1 = require("../icons");
var compose_event_handlers_1 = require("../utils/compose-event-handlers");
var defaultKeyboardShortcuts = {
    jumpToStart: ['0', 'Home'],
    jumpToEnd: ['End'],
};
var AudioPlayerComposable = function (_a) {
    var children = _a.children, src = _a.src, _b = _a.autoPlay, autoPlay = _b === void 0 ? false : _b, _c = _a.live, live = _c === void 0 ? false : _c, ariaLandmark = _a.ariaLandmark, keyboardShortcutsProp = _a.keyboardShortcuts, _d = _a.initialVolume, initialVolume = _d === void 0 ? 0.7 : _d, _e = _a.initialTime, initialTime = _e === void 0 ? 0 : _e, props = tslib_1.__rest(_a, ["children", "src", "autoPlay", "live", "ariaLandmark", "keyboardShortcuts", "initialVolume", "initialTime"]);
    var currentTimeRef = (0, react_1.useRef)(0);
    var audioRef = (0, react_1.useRef)(null);
    var audioSectionRef = (0, react_1.useRef)(null);
    var showLoaderTimeoutRef = (0, react_1.useRef)(0);
    var _f = (0, react_1.useState)(autoPlay), playing = _f[0], setPlayState = _f[1];
    var _g = (0, react_1.useState)(true), loading = _g[0], setLoading = _g[1];
    var _h = (0, react_1.useState)(0), duration = _h[0], setDuration = _h[1];
    var _j = (0, react_1.useState)(0), currentTime = _j[0], setCurrentTime = _j[1];
    var _k = (0, react_1.useState)(0), volume = _k[0], setVolume = _k[1];
    var _l = (0, react_1.useState)(1), playbackSpeed = _l[0], setPlaybackSpeed = _l[1];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _m = (0, react_1.useState)(0), displayDuration = _m[0], setDisplayDuration = _m[1];
    var _o = (0, react_1.useState)(), buffered = _o[0], setBuffered = _o[1];
    (0, react_1.useEffect)(function () {
        currentTimeRef.current = currentTime;
    });
    (0, react_1.useEffect)(function () {
        // On render onTimeUpdate will be fired and initialTime will be set as a value for currentTime state.
        // I can't set this one to the setCurrentTime state directly as the audioElement time
        // will still be 0, currentTime will be overridden to 0 and the audio will start from 0
        if (audioRef && audioRef.current) {
            audioRef.current.currentTime = initialTime;
        }
        setCurrentTime(0);
        setDisplayDuration(0);
    }, [src, initialTime]);
    var _p = (0, audio_functions_1.useAudioFunctions)({
        autoPlay: autoPlay,
        audioRef: audioRef,
        playing: playing,
        setLoading: setLoading,
        loading: loading,
        setPlayState: setPlayState,
        showLoaderTimeoutRef: showLoaderTimeoutRef,
        setCurrentTime: setCurrentTime,
        setBuffered: setBuffered,
        setDisplayDuration: setDisplayDuration,
        currentTimeRef: currentTimeRef,
        duration: duration,
        setDuration: setDuration,
        setVolume: setVolume,
        setPlaybackSpeed: setPlaybackSpeed,
        src: src,
        live: live,
    }), audioEvents = _p.audioEvents, togglePlay = _p.togglePlay, onChangeSlider = _p.onChangeSlider, onClickForward = _p.onClickForward, onClickBackward = _p.onClickBackward, onChangeVolumeSlider = _p.onChangeVolumeSlider, onPlaybackSpeedChange = _p.onPlaybackSpeedChange;
    var getPlayPauseButtonProps = (0, react_1.useCallback)(function (_a) {
        var consumerOnClick = _a.onClick, getterProps = tslib_1.__rest(_a, ["onClick"]);
        // All the internal logic for defining aria and icon to show
        var playStateIcon = react_1.default.createElement(icon_filled_play_arrow_1.IconFilledPlayArrow, null);
        var ariaLabel = 'Play';
        var ariaPressed = false;
        var canPause = !live;
        if (playing) {
            ariaPressed = true;
            if (canPause) {
                playStateIcon = react_1.default.createElement(icon_filled_pause_1.IconFilledPause, null);
                ariaLabel = 'Pause';
            }
            else {
                playStateIcon = react_1.default.createElement(icon_filled_stop_1.IconFilledStop, null);
                ariaLabel = 'Stop';
            }
        }
        var onClick = (0, compose_event_handlers_1.composeEventHandlers)([consumerOnClick, togglePlay]);
        return tslib_1.__assign(tslib_1.__assign({ 'aria-label': ariaLabel, 'aria-pressed': ariaPressed, loading: loading, onClick: onClick, children: playStateIcon }, getterProps), { 
            // can  be needed for custom internal logic
            playing: playing, canPause: canPause });
    }, [live, loading, playing, togglePlay]);
    var getForwardButtonProps = (0, react_1.useCallback)(function (_a) {
        var consumerOnClick = _a.onClick, _b = _a.seconds, seconds = _b === void 0 ? 10 : _b, getterProps = tslib_1.__rest(_a, ["onClick", "seconds"]);
        var onClickForwardWithSeconds = function () { return onClickForward({ seconds: seconds }); };
        return tslib_1.__assign({ children: react_1.default.createElement(icons_1.IconFilledForward10, null), 'aria-label': "Fast forward for ".concat(seconds, " seconds"), onClick: (0, compose_event_handlers_1.composeEventHandlers)([
                consumerOnClick,
                onClickForwardWithSeconds,
            ]) }, getterProps);
    }, [onClickForward]);
    var getReplayButtonProps = (0, react_1.useCallback)(function (_a) {
        var consumerOnClick = _a.onClick, _b = _a.seconds, seconds = _b === void 0 ? 10 : _b, getterProps = tslib_1.__rest(_a, ["onClick", "seconds"]);
        var onClickWithBackwardWithSeconds = function () { return onClickBackward({ seconds: seconds }); };
        return tslib_1.__assign({ children: react_1.default.createElement(icons_1.IconFilledReplay10, null), 'aria-label': "Rewind ".concat(seconds, " seconds"), onClick: (0, compose_event_handlers_1.composeEventHandlers)([
                consumerOnClick,
                onClickWithBackwardWithSeconds,
            ]) }, getterProps);
    }, [onClickBackward]);
    var getSeekBarProps = (0, react_1.useCallback)(function () { return ({
        duration: duration,
        currentTime: currentTime,
        onChange: onChangeSlider,
        buffered: buffered,
    }); }, [buffered, currentTime, duration, onChangeSlider]);
    var getTimeDisplayProps = (0, react_1.useCallback)(function () { return ({
        format: utils_1.formatFunction,
        currentTime: currentTime,
        duration: duration,
    }); }, [currentTime, duration]);
    var getVolumeControlProps = (0, react_1.useCallback)(function (_a) {
        var layout = _a.layout, overrides = _a.overrides, keyboardShortcuts = _a.keyboardShortcuts, muteButtonSize = _a.muteButtonSize;
        return ({
            keyboardShortcuts: keyboardShortcuts,
            layout: layout,
            overrides: overrides || {},
            onChange: onChangeVolumeSlider,
            volume: volume,
            initialVolume: initialVolume,
            muteButtonSize: muteButtonSize,
        });
    }, [volume, initialVolume, onChangeVolumeSlider]);
    var getPlaybackSpeedControlProps = (0, react_1.useCallback)(function (_a) {
        var overrides = _a.overrides, buttonSize = _a.buttonSize, _b = _a.useModal, useModal = _b === void 0 ? {} : _b;
        return ({
            overrides: overrides || {},
            onChange: onPlaybackSpeedChange,
            buttonSize: buttonSize,
            useModal: useModal,
            playbackSpeed: playbackSpeed,
        });
    }, [onPlaybackSpeedChange, playbackSpeed]);
    var getSkipPreviousButtonProps = (0, react_1.useCallback)(function (_a) {
        var consumerOnClick = _a.onClick, getterProps = tslib_1.__rest(_a, ["onClick"]);
        var onClick = function (event) {
            if (currentTime > 5) {
                onChangeSlider(0);
            }
            else if (typeof consumerOnClick === 'function') {
                consumerOnClick(event);
            }
        };
        var isDisabled = currentTime <= 5 && !consumerOnClick;
        return tslib_1.__assign({ onClick: onClick, children: react_1.default.createElement(icons_1.IconFilledSkipPrevious, null), 'aria-label': 'previous', disabled: isDisabled }, getterProps);
    }, [currentTime, onChangeSlider]);
    var getSkipNextButtonProps = (0, react_1.useCallback)(function (_a) {
        var getterProps = tslib_1.__rest(_a, []);
        return (tslib_1.__assign({ children: react_1.default.createElement(icons_1.IconFilledSkipNext, null), 'aria-label': 'next', disabled: typeof getterProps.onClick !== 'function' }, getterProps));
    }, []);
    var value = (0, react_1.useMemo)(function () { return ({
        audioRef: audioRef,
        audioSectionRef: audioSectionRef,
        playbackSpeed: playbackSpeed,
        togglePlay: togglePlay,
        // Props function getter
        getPlayPauseButtonProps: getPlayPauseButtonProps,
        getTimeDisplayProps: getTimeDisplayProps,
        getSeekBarProps: getSeekBarProps,
        getSkipPreviousButtonProps: getSkipPreviousButtonProps,
        getSkipNextButtonProps: getSkipNextButtonProps,
        getForwardButtonProps: getForwardButtonProps,
        getReplayButtonProps: getReplayButtonProps,
        getVolumeControlProps: getVolumeControlProps,
        getPlaybackSpeedControlProps: getPlaybackSpeedControlProps,
    }); }, [
        playbackSpeed,
        togglePlay,
        getPlayPauseButtonProps,
        getTimeDisplayProps,
        getSeekBarProps,
        getSkipPreviousButtonProps,
        getSkipNextButtonProps,
        getForwardButtonProps,
        getReplayButtonProps,
        getVolumeControlProps,
        getPlaybackSpeedControlProps,
    ]);
    var eventHandler = (0, react_1.useCallback)(function (eventName) {
        var propEvent = props[eventName];
        var internalEvent = audioEvents[eventName];
        return (0, compose_event_handlers_1.composeEventHandlers)([propEvent, internalEvent]);
    }, [audioEvents, props]);
    // Keyboard shortcuts
    var options = { target: audioSectionRef, preventDefault: false };
    var keyboardShortcuts = tslib_1.__assign(tslib_1.__assign({}, defaultKeyboardShortcuts), keyboardShortcutsProp);
    var pressJumpToStart = (0, react_1.useCallback)(function () {
        onChangeSlider(0);
    }, [onChangeSlider]);
    var pressJumpToEnd = (0, react_1.useCallback)(function () {
        onChangeSlider(duration);
    }, [onChangeSlider, duration]);
    (0, use_keypress_1.useKeypress)(keyboardShortcuts.jumpToStart, pressJumpToStart, options);
    (0, use_keypress_1.useKeypress)(keyboardShortcuts.jumpToEnd, pressJumpToEnd, options);
    return (react_1.default.createElement("section", { "aria-label": ariaLandmark || 'Audio Player', ref: audioSectionRef },
        react_1.default.createElement(context_1.AudioPlayerProvider, { value: value },
            react_1.default.createElement(audio_element_1.AudioElement, tslib_1.__assign({ audioRef: audioRef, src: src, autoPlay: autoPlay }, props, { onCanPlay: eventHandler(types_1.AudioEvents.CanPlay), onWaiting: eventHandler(types_1.AudioEvents.Waiting), onPlay: eventHandler(types_1.AudioEvents.Play), onPause: eventHandler(types_1.AudioEvents.Pause), onEnded: eventHandler(types_1.AudioEvents.Ended), onDurationChange: eventHandler(types_1.AudioEvents.DurationChange), onTimeUpdate: eventHandler(types_1.AudioEvents.TimeUpdate), onProgress: eventHandler(types_1.AudioEvents.Progress), onVolumeChange: eventHandler(types_1.AudioEvents.VolumeChange) })),
            children)));
};
exports.AudioPlayerComposable = AudioPlayerComposable;
//# sourceMappingURL=audio-player-composable.js.map