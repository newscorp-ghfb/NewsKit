import { __assign, __rest } from "tslib";
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useRef, useState, useEffect, useCallback, } from 'react';
import { getTrackBackground } from 'react-range';
import { ControlPanel, PopoutButton } from './controls';
import { Slider } from '../slider';
import { Stack } from '../stack';
import { PlayerGrid, ControlContainer, PlayerContainer } from './styled';
import { VolumeControl } from '../volume-control';
import { Cell } from '../grid/cell';
import { formatTrackTime, formatTrackData, formatDuration, seekBarAriaValueText, } from './utils';
import { StyledTrack } from '../slider/styled';
import { useTheme, Devices } from '../theme';
import { getSingleStylePreset } from '../utils/style';
import { AudioEvents } from './types';
import { useAudioFunctions } from './audio-functions';
import { StackChild } from '../stack-child';
import { ScreenReaderOnly } from '../screen-reader-only/screen-reader-only';
import { getToken } from '../utils/get-token';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { useReactKeys } from '../utils/hooks';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
/**
 * @deprecated AudioPlayer is deprecated and will be removed in the next major release.
 */
var ThemelessAudioPlayer = function (props) {
    var onNextTrack = props.onNextTrack, disableNextTrack = props.disableNextTrack, onPreviousTrack = props.onPreviousTrack, _a = props.disablePreviousTrack, disablePreviousTrack = _a === void 0 ? !onPreviousTrack : _a, popoutHref = props.popoutHref, _b = props.overrides, overrides = _b === void 0 ? {} : _b, src = props.src, _c = props.hidePreviousTrack, hidePreviousTrack = _c === void 0 ? false : _c, _d = props.hideVolumeControl, hideVolumeControl = _d === void 0 ? false : _d, _e = props.hideSeekButtons, hideSeekButtons = _e === void 0 ? false : _e, _f = props.ariaLandmark, ariaLandmark = _f === void 0 ? 'audio player' : _f, autoPlay = props.autoPlay, children = props.children, _g = props.live, live = _g === void 0 ? false : _g, captionSrc = props.captionSrc, restProps = __rest(props, ["onNextTrack", "disableNextTrack", "onPreviousTrack", "disablePreviousTrack", "popoutHref", "overrides", "src", "hidePreviousTrack", "hideVolumeControl", "hideSeekButtons", "ariaLandmark", "autoPlay", "children", "live", "captionSrc"]);
    var _h = overrides.seekBar, _j = _h === void 0 ? {} : _h, seekBarSliderOverrides = _j.slider, _k = overrides.controls, _l = _k === void 0 ? {} : _k, popoutButtonOverrides = _l.popoutButton, controlButtonsOverrides = __rest(_l, ["popoutButton"]), volumeControlOverrides = overrides.volumeControl;
    var theme = useTheme();
    var _m = theme.componentDefaults.audioPlayer, seekBarSliderDefaults = _m.seekBar.slider, _o = _m.controls, popoutButtonDefaults = _o.popoutButton, controlButtonsDefaults = __rest(_o, ["popoutButton"]), volumeControlDefaults = _m.volumeControl;
    var _p = useState(0), volume = _p[0], setVolume = _p[1];
    var _q = useState(0), duration = _q[0], setDuration = _q[1];
    var _r = useState(0), displayDuration = _r[0], setDisplayDuration = _r[1];
    var _s = useState([0]), trackPositionArr = _s[0], setTrackPosition = _s[1];
    var _t = useState(false), playing = _t[0], setPlayState = _t[1];
    var _u = useState(), buffered = _u[0], setBuffered = _u[1];
    var _v = useState(true), loading = _v[0], setLoading = _v[1];
    var _w = useState(Boolean(disablePreviousTrack)), isPrevTrackBtnDisabled = _w[0], setIsPrevTrackBtnDisabled = _w[1];
    var trackPositionRef = useRef(0);
    var showLoaderTimeoutRef = useRef(0);
    useEffect(function () {
        trackPositionRef.current = trackPositionArr[0];
    });
    var audioRef = useRef(null);
    useEffect(function () {
        setTrackPosition([0]);
        setDisplayDuration(0);
    }, [src]);
    var _x = useAudioFunctions({
        onPreviousTrack: onPreviousTrack,
        onNextTrack: onNextTrack,
        autoPlay: autoPlay,
        disablePreviousTrack: disablePreviousTrack,
        src: src,
        live: live,
        duration: duration,
        loading: loading,
        playing: playing,
        trackPositionRef: trackPositionRef,
        audioRef: audioRef,
        showLoaderTimeoutRef: showLoaderTimeoutRef,
        setLoading: setLoading,
        setTrackPosition: setTrackPosition,
        setPlayState: setPlayState,
        setVolume: setVolume,
        setDuration: setDuration,
        setBuffered: setBuffered,
        setDisplayDuration: setDisplayDuration,
        setIsPrevTrackBtnDisabled: setIsPrevTrackBtnDisabled,
    }), audioEvents = _x.audioEvents, onClickPrevious = _x.onClickPrevious, onClickNext = _x.onClickNext, onClickBackward = _x.onClickBackward, onClickForward = _x.onClickForward, onPopoutClick = _x.onPopoutClick, togglePlay = _x.togglePlay, onChangeSlider = _x.onChangeSlider, onChangeVolumeSlider = _x.onChangeVolumeSlider;
    var eventHandler = function (eventName) { return function (e) {
        // eslint-disable-next-line react/destructuring-assignment
        var eventCallback = props[eventName];
        if (eventCallback) {
            eventCallback(e);
        }
        audioEvents[eventName](e);
    }; };
    var renderTrack = useCallback(function (_a) {
        var trackProps = _a.props, trackChildren = _a.children, isDragged = _a.isDragged;
        var sliderTrackStylePreset = getToken({ theme: theme, overrides: overrides }, 'audioPlayer.seekBar.slider.track', 'seekBar.slider.track', 'stylePreset');
        var sliderIndicatorTrackStylePreset = getToken({ theme: theme, overrides: overrides }, 'audioPlayer.seekBar.slider.indicator', 'seekBar.slider.indicator', 'stylePreset');
        var bufferingStylePreset = getToken({ theme: theme, overrides: overrides }, 'audioPlayer.seekBar.buffering', 'seekBar.buffering', 'stylePreset');
        var _b = formatTrackData(getSingleStylePreset(theme, 'base', 'backgroundColor', sliderTrackStylePreset), getSingleStylePreset(theme, 'base', 'backgroundColor', sliderIndicatorTrackStylePreset), getSingleStylePreset(theme, 'base', 'backgroundColor', bufferingStylePreset), trackPositionArr, buffered), values = _b.values, colors = _b.colors;
        return (React.createElement(StyledTrack, __assign({}, trackProps, { values: trackPositionArr, dragged: isDragged, onKeyDown: function (e) {
                var spaceKeyCode = 32;
                /* istanbul ignore next */
                if (e.keyCode === spaceKeyCode)
                    e.preventDefault();
            }, style: {
                background: getTrackBackground({
                    values: values,
                    colors: colors,
                    min: 0,
                    max: Math.floor(duration),
                }),
            }, "data-testid": "audio-slider-track", overrides: __assign(__assign({}, seekBarSliderDefaults), filterOutFalsyProperties(seekBarSliderOverrides)) }), trackChildren));
    }, [
        buffered,
        duration,
        overrides,
        seekBarSliderDefaults,
        seekBarSliderOverrides,
        theme,
        trackPositionArr,
    ]);
    var showControls = !live;
    var formattedDuration = showControls ? formatDuration(displayDuration) : '';
    var formattedTime = showControls
        ? formatTrackTime(trackPositionArr[0], duration)
        : '';
    var srOnlyForwardRewind = useReactKeys(1)[0];
    return (React.createElement(PlayerContainer, { "aria-label": ariaLandmark, overrides: overrides },
        React.createElement(PlayerGrid, { xsMargin: "space000", xsColumnGutter: "space000", xsRowGutter: "space000" },
            React.createElement("audio", __assign({}, restProps, { ref: audioRef, src: src, autoPlay: autoPlay, "data-testid": "audio-element", 
                // override callback handlers
                onCanPlay: eventHandler(AudioEvents.CanPlay), onWaiting: eventHandler(AudioEvents.Waiting), onPlay: eventHandler(AudioEvents.Play), onPause: eventHandler(AudioEvents.Pause), onVolumeChange: eventHandler(AudioEvents.VolumeChange), onEnded: eventHandler(AudioEvents.Ended), onDurationChange: eventHandler(AudioEvents.DurationChange), onTimeUpdate: eventHandler(AudioEvents.TimeUpdate), onProgress: eventHandler(AudioEvents.Progress) }), captionSrc && React.createElement("track", { kind: "captions", src: captionSrc })),
            children && React.createElement(Cell, { xs: 12 }, children),
            React.createElement(Cell, { xsOrder: 2, xs: 12 },
                React.createElement(Stack, { flow: "horizontal-center", stackDistribution: "space-between" },
                    React.createElement(StackChild, { order: 2 },
                        React.createElement(ControlPanel, { onNextTrack: onNextTrack ? onClickNext : undefined, disableNextTrack: disableNextTrack, onPreviousTrack: hidePreviousTrack ? undefined : onClickPrevious, disablePreviousTrack: isPrevTrackBtnDisabled, live: live, showControls: showControls, loading: loading, playing: playing, onClickBackward: hideSeekButtons ? undefined : onClickBackward, onClickForward: hideSeekButtons ? undefined : onClickForward, togglePlay: togglePlay, overrides: __assign(__assign({}, controlButtonsDefaults), filterOutFalsyProperties(controlButtonsOverrides)) })),
                    React.createElement(StackChild, { order: 1 },
                        React.createElement(ControlContainer, { playerTrackSize: "sizing050", xs: true, sm: true, md: true, targetDevices: [Devices.iPadPro, Devices.iPad] }, !hideVolumeControl && (React.createElement(VolumeControl, { volume: volume, onChange: onChangeVolumeSlider, overrides: __assign(__assign({}, volumeControlDefaults), filterOutFalsyProperties(volumeControlOverrides)) })))),
                    React.createElement(StackChild, { order: 3 },
                        React.createElement(ControlContainer, { playerTrackSize: "sizing050", xs: true, sm: true, md: true, targetDevices: [Devices.iPadPro, Devices.iPad] },
                            React.createElement(Stack, { flow: "vertical-right", stackDistribution: "flex-end" }, popoutHref && (React.createElement(PopoutButton, { onClick: onPopoutClick, href: popoutHref, overrides: __assign(__assign({}, popoutButtonDefaults), filterOutFalsyProperties(popoutButtonOverrides)) }))))))),
            showControls && (React.createElement(Cell, { xsOrder: 1, xs: 12 },
                React.createElement(Slider, { min: 0, minLabel: formattedTime, max: Math.floor(duration) || 1, maxLabel: formattedDuration, values: trackPositionArr, step: 1, ariaLabel: "seek bar", ariaValueText: "Playback time: ".concat(seekBarAriaValueText(trackPositionArr), " of ").concat(seekBarAriaValueText([duration])), onChange: onChangeSlider, renderTrack: renderTrack, labelPosition: "after", dataTestId: "audio-slider", ariaDescribedBy: srOnlyForwardRewind, overrides: __assign(__assign({}, seekBarSliderDefaults), filterOutFalsyProperties(seekBarSliderOverrides)) }),
                React.createElement(ScreenReaderOnly, { id: srOnlyForwardRewind, "aria-hidden": "true" }, "Use the arrow keys to fast forward or rewind"))))));
};
export var AudioPlayer = withOwnTheme(ThemelessAudioPlayer)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=audio-player.js.map