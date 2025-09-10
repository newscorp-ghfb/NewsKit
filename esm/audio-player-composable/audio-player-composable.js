import { __assign, __rest } from "tslib";
import React, { useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { IconFilledPause } from '../icons/filled/material/icon-filled-pause';
import { IconFilledPlayArrow } from '../icons/filled/material/icon-filled-play-arrow';
import { IconFilledStop } from '../icons/filled/material/icon-filled-stop';
import { AudioElement } from './components/audio-element';
import { useAudioFunctions } from './audio-functions';
import { AudioPlayerProvider } from './context';
import { useKeypress } from '../utils/hooks/use-keypress';
import { AudioEvents, } from './types';
import { formatFunction } from './components/time-display/utils';
import { IconFilledSkipNext, IconFilledSkipPrevious, IconFilledForward10, IconFilledReplay10, } from '../icons';
import { composeEventHandlers } from '../utils/compose-event-handlers';
var defaultKeyboardShortcuts = {
    jumpToStart: ['0', 'Home'],
    jumpToEnd: ['End'],
};
export var AudioPlayerComposable = function (_a) {
    var children = _a.children, src = _a.src, _b = _a.autoPlay, autoPlay = _b === void 0 ? false : _b, _c = _a.live, live = _c === void 0 ? false : _c, ariaLandmark = _a.ariaLandmark, keyboardShortcutsProp = _a.keyboardShortcuts, _d = _a.initialVolume, initialVolume = _d === void 0 ? 0.7 : _d, _e = _a.initialTime, initialTime = _e === void 0 ? 0 : _e, props = __rest(_a, ["children", "src", "autoPlay", "live", "ariaLandmark", "keyboardShortcuts", "initialVolume", "initialTime"]);
    var currentTimeRef = useRef(0);
    var audioRef = useRef(null);
    var audioSectionRef = useRef(null);
    var showLoaderTimeoutRef = useRef(0);
    var _f = useState(autoPlay), playing = _f[0], setPlayState = _f[1];
    var _g = useState(true), loading = _g[0], setLoading = _g[1];
    var _h = useState(0), duration = _h[0], setDuration = _h[1];
    var _j = useState(0), currentTime = _j[0], setCurrentTime = _j[1];
    var _k = useState(0), volume = _k[0], setVolume = _k[1];
    var _l = useState(1), playbackSpeed = _l[0], setPlaybackSpeed = _l[1];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _m = useState(0), displayDuration = _m[0], setDisplayDuration = _m[1];
    var _o = useState(), buffered = _o[0], setBuffered = _o[1];
    useEffect(function () {
        currentTimeRef.current = currentTime;
    });
    useEffect(function () {
        // On render onTimeUpdate will be fired and initialTime will be set as a value for currentTime state.
        // I can't set this one to the setCurrentTime state directly as the audioElement time
        // will still be 0, currentTime will be overridden to 0 and the audio will start from 0
        if (audioRef && audioRef.current) {
            audioRef.current.currentTime = initialTime;
        }
        setCurrentTime(0);
        setDisplayDuration(0);
    }, [src, initialTime]);
    var _p = useAudioFunctions({
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
    var getPlayPauseButtonProps = useCallback(function (_a) {
        var consumerOnClick = _a.onClick, getterProps = __rest(_a, ["onClick"]);
        // All the internal logic for defining aria and icon to show
        var playStateIcon = React.createElement(IconFilledPlayArrow, null);
        var ariaLabel = 'Play';
        var ariaPressed = false;
        var canPause = !live;
        if (playing) {
            ariaPressed = true;
            if (canPause) {
                playStateIcon = React.createElement(IconFilledPause, null);
                ariaLabel = 'Pause';
            }
            else {
                playStateIcon = React.createElement(IconFilledStop, null);
                ariaLabel = 'Stop';
            }
        }
        var onClick = composeEventHandlers([consumerOnClick, togglePlay]);
        return __assign(__assign({ 'aria-label': ariaLabel, 'aria-pressed': ariaPressed, loading: loading, onClick: onClick, children: playStateIcon }, getterProps), { 
            // can  be needed for custom internal logic
            playing: playing, canPause: canPause });
    }, [live, loading, playing, togglePlay]);
    var getForwardButtonProps = useCallback(function (_a) {
        var consumerOnClick = _a.onClick, _b = _a.seconds, seconds = _b === void 0 ? 10 : _b, getterProps = __rest(_a, ["onClick", "seconds"]);
        var onClickForwardWithSeconds = function () { return onClickForward({ seconds: seconds }); };
        return __assign({ children: React.createElement(IconFilledForward10, null), 'aria-label': "Fast forward for ".concat(seconds, " seconds"), onClick: composeEventHandlers([
                consumerOnClick,
                onClickForwardWithSeconds,
            ]) }, getterProps);
    }, [onClickForward]);
    var getReplayButtonProps = useCallback(function (_a) {
        var consumerOnClick = _a.onClick, _b = _a.seconds, seconds = _b === void 0 ? 10 : _b, getterProps = __rest(_a, ["onClick", "seconds"]);
        var onClickWithBackwardWithSeconds = function () { return onClickBackward({ seconds: seconds }); };
        return __assign({ children: React.createElement(IconFilledReplay10, null), 'aria-label': "Rewind ".concat(seconds, " seconds"), onClick: composeEventHandlers([
                consumerOnClick,
                onClickWithBackwardWithSeconds,
            ]) }, getterProps);
    }, [onClickBackward]);
    var getSeekBarProps = useCallback(function () { return ({
        duration: duration,
        currentTime: currentTime,
        onChange: onChangeSlider,
        buffered: buffered,
    }); }, [buffered, currentTime, duration, onChangeSlider]);
    var getTimeDisplayProps = useCallback(function () { return ({
        format: formatFunction,
        currentTime: currentTime,
        duration: duration,
    }); }, [currentTime, duration]);
    var getVolumeControlProps = useCallback(function (_a) {
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
    var getPlaybackSpeedControlProps = useCallback(function (_a) {
        var overrides = _a.overrides, buttonSize = _a.buttonSize, _b = _a.useModal, useModal = _b === void 0 ? {} : _b;
        return ({
            overrides: overrides || {},
            onChange: onPlaybackSpeedChange,
            buttonSize: buttonSize,
            useModal: useModal,
            playbackSpeed: playbackSpeed,
        });
    }, [onPlaybackSpeedChange, playbackSpeed]);
    var getSkipPreviousButtonProps = useCallback(function (_a) {
        var consumerOnClick = _a.onClick, getterProps = __rest(_a, ["onClick"]);
        var onClick = function (event) {
            if (currentTime > 5) {
                onChangeSlider(0);
            }
            else if (typeof consumerOnClick === 'function') {
                consumerOnClick(event);
            }
        };
        var isDisabled = currentTime <= 5 && !consumerOnClick;
        return __assign({ onClick: onClick, children: React.createElement(IconFilledSkipPrevious, null), 'aria-label': 'previous', disabled: isDisabled }, getterProps);
    }, [currentTime, onChangeSlider]);
    var getSkipNextButtonProps = useCallback(function (_a) {
        var getterProps = __rest(_a, []);
        return (__assign({ children: React.createElement(IconFilledSkipNext, null), 'aria-label': 'next', disabled: typeof getterProps.onClick !== 'function' }, getterProps));
    }, []);
    var value = useMemo(function () { return ({
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
    var eventHandler = useCallback(function (eventName) {
        var propEvent = props[eventName];
        var internalEvent = audioEvents[eventName];
        return composeEventHandlers([propEvent, internalEvent]);
    }, [audioEvents, props]);
    // Keyboard shortcuts
    var options = { target: audioSectionRef, preventDefault: false };
    var keyboardShortcuts = __assign(__assign({}, defaultKeyboardShortcuts), keyboardShortcutsProp);
    var pressJumpToStart = useCallback(function () {
        onChangeSlider(0);
    }, [onChangeSlider]);
    var pressJumpToEnd = useCallback(function () {
        onChangeSlider(duration);
    }, [onChangeSlider, duration]);
    useKeypress(keyboardShortcuts.jumpToStart, pressJumpToStart, options);
    useKeypress(keyboardShortcuts.jumpToEnd, pressJumpToEnd, options);
    return (React.createElement("section", { "aria-label": ariaLandmark || 'Audio Player', ref: audioSectionRef },
        React.createElement(AudioPlayerProvider, { value: value },
            React.createElement(AudioElement, __assign({ audioRef: audioRef, src: src, autoPlay: autoPlay }, props, { onCanPlay: eventHandler(AudioEvents.CanPlay), onWaiting: eventHandler(AudioEvents.Waiting), onPlay: eventHandler(AudioEvents.Play), onPause: eventHandler(AudioEvents.Pause), onEnded: eventHandler(AudioEvents.Ended), onDurationChange: eventHandler(AudioEvents.DurationChange), onTimeUpdate: eventHandler(AudioEvents.TimeUpdate), onProgress: eventHandler(AudioEvents.Progress), onVolumeChange: eventHandler(AudioEvents.VolumeChange) })),
            children)));
};
//# sourceMappingURL=audio-player-composable.js.map