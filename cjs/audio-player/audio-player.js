"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayer = void 0;
var tslib_1 = require("tslib");
/* eslint-disable jsx-a11y/media-has-caption */
var react_1 = tslib_1.__importStar(require("react"));
var react_range_1 = require("react-range");
var controls_1 = require("./controls");
var slider_1 = require("../slider");
var stack_1 = require("../stack");
var styled_1 = require("./styled");
var volume_control_1 = require("../volume-control");
var cell_1 = require("../grid/cell");
var utils_1 = require("./utils");
var styled_2 = require("../slider/styled");
var theme_1 = require("../theme");
var style_1 = require("../utils/style");
var types_1 = require("./types");
var audio_functions_1 = require("./audio-functions");
var stack_child_1 = require("../stack-child");
var screen_reader_only_1 = require("../screen-reader-only/screen-reader-only");
var get_token_1 = require("../utils/get-token");
var filter_object_1 = require("../utils/filter-object");
var hooks_1 = require("../utils/hooks");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
/**
 * @deprecated AudioPlayer is deprecated and will be removed in the next major release.
 */
var ThemelessAudioPlayer = function (props) {
    var onNextTrack = props.onNextTrack, disableNextTrack = props.disableNextTrack, onPreviousTrack = props.onPreviousTrack, _a = props.disablePreviousTrack, disablePreviousTrack = _a === void 0 ? !onPreviousTrack : _a, popoutHref = props.popoutHref, _b = props.overrides, overrides = _b === void 0 ? {} : _b, src = props.src, _c = props.hidePreviousTrack, hidePreviousTrack = _c === void 0 ? false : _c, _d = props.hideVolumeControl, hideVolumeControl = _d === void 0 ? false : _d, _e = props.hideSeekButtons, hideSeekButtons = _e === void 0 ? false : _e, _f = props.ariaLandmark, ariaLandmark = _f === void 0 ? 'audio player' : _f, autoPlay = props.autoPlay, children = props.children, _g = props.live, live = _g === void 0 ? false : _g, captionSrc = props.captionSrc, restProps = tslib_1.__rest(props, ["onNextTrack", "disableNextTrack", "onPreviousTrack", "disablePreviousTrack", "popoutHref", "overrides", "src", "hidePreviousTrack", "hideVolumeControl", "hideSeekButtons", "ariaLandmark", "autoPlay", "children", "live", "captionSrc"]);
    var _h = overrides.seekBar, _j = _h === void 0 ? {} : _h, seekBarSliderOverrides = _j.slider, _k = overrides.controls, _l = _k === void 0 ? {} : _k, popoutButtonOverrides = _l.popoutButton, controlButtonsOverrides = tslib_1.__rest(_l, ["popoutButton"]), volumeControlOverrides = overrides.volumeControl;
    var theme = (0, theme_1.useTheme)();
    var _m = theme.componentDefaults.audioPlayer, seekBarSliderDefaults = _m.seekBar.slider, _o = _m.controls, popoutButtonDefaults = _o.popoutButton, controlButtonsDefaults = tslib_1.__rest(_o, ["popoutButton"]), volumeControlDefaults = _m.volumeControl;
    var _p = (0, react_1.useState)(0), volume = _p[0], setVolume = _p[1];
    var _q = (0, react_1.useState)(0), duration = _q[0], setDuration = _q[1];
    var _r = (0, react_1.useState)(0), displayDuration = _r[0], setDisplayDuration = _r[1];
    var _s = (0, react_1.useState)([0]), trackPositionArr = _s[0], setTrackPosition = _s[1];
    var _t = (0, react_1.useState)(false), playing = _t[0], setPlayState = _t[1];
    var _u = (0, react_1.useState)(), buffered = _u[0], setBuffered = _u[1];
    var _v = (0, react_1.useState)(true), loading = _v[0], setLoading = _v[1];
    var _w = (0, react_1.useState)(Boolean(disablePreviousTrack)), isPrevTrackBtnDisabled = _w[0], setIsPrevTrackBtnDisabled = _w[1];
    var trackPositionRef = (0, react_1.useRef)(0);
    var showLoaderTimeoutRef = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(function () {
        trackPositionRef.current = trackPositionArr[0];
    });
    var audioRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        setTrackPosition([0]);
        setDisplayDuration(0);
    }, [src]);
    var _x = (0, audio_functions_1.useAudioFunctions)({
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
    var renderTrack = (0, react_1.useCallback)(function (_a) {
        var trackProps = _a.props, trackChildren = _a.children, isDragged = _a.isDragged;
        var sliderTrackStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'audioPlayer.seekBar.slider.track', 'seekBar.slider.track', 'stylePreset');
        var sliderIndicatorTrackStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'audioPlayer.seekBar.slider.indicator', 'seekBar.slider.indicator', 'stylePreset');
        var bufferingStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'audioPlayer.seekBar.buffering', 'seekBar.buffering', 'stylePreset');
        var _b = (0, utils_1.formatTrackData)((0, style_1.getSingleStylePreset)(theme, 'base', 'backgroundColor', sliderTrackStylePreset), (0, style_1.getSingleStylePreset)(theme, 'base', 'backgroundColor', sliderIndicatorTrackStylePreset), (0, style_1.getSingleStylePreset)(theme, 'base', 'backgroundColor', bufferingStylePreset), trackPositionArr, buffered), values = _b.values, colors = _b.colors;
        return (react_1.default.createElement(styled_2.StyledTrack, tslib_1.__assign({}, trackProps, { values: trackPositionArr, dragged: isDragged, onKeyDown: function (e) {
                var spaceKeyCode = 32;
                /* istanbul ignore next */
                if (e.keyCode === spaceKeyCode)
                    e.preventDefault();
            }, style: {
                background: (0, react_range_1.getTrackBackground)({
                    values: values,
                    colors: colors,
                    min: 0,
                    max: Math.floor(duration),
                }),
            }, "data-testid": "audio-slider-track", overrides: tslib_1.__assign(tslib_1.__assign({}, seekBarSliderDefaults), (0, filter_object_1.filterOutFalsyProperties)(seekBarSliderOverrides)) }), trackChildren));
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
    var formattedDuration = showControls ? (0, utils_1.formatDuration)(displayDuration) : '';
    var formattedTime = showControls
        ? (0, utils_1.formatTrackTime)(trackPositionArr[0], duration)
        : '';
    var srOnlyForwardRewind = (0, hooks_1.useReactKeys)(1)[0];
    return (react_1.default.createElement(styled_1.PlayerContainer, { "aria-label": ariaLandmark, overrides: overrides },
        react_1.default.createElement(styled_1.PlayerGrid, { xsMargin: "space000", xsColumnGutter: "space000", xsRowGutter: "space000" },
            react_1.default.createElement("audio", tslib_1.__assign({}, restProps, { ref: audioRef, src: src, autoPlay: autoPlay, "data-testid": "audio-element", 
                // override callback handlers
                onCanPlay: eventHandler(types_1.AudioEvents.CanPlay), onWaiting: eventHandler(types_1.AudioEvents.Waiting), onPlay: eventHandler(types_1.AudioEvents.Play), onPause: eventHandler(types_1.AudioEvents.Pause), onVolumeChange: eventHandler(types_1.AudioEvents.VolumeChange), onEnded: eventHandler(types_1.AudioEvents.Ended), onDurationChange: eventHandler(types_1.AudioEvents.DurationChange), onTimeUpdate: eventHandler(types_1.AudioEvents.TimeUpdate), onProgress: eventHandler(types_1.AudioEvents.Progress) }), captionSrc && react_1.default.createElement("track", { kind: "captions", src: captionSrc })),
            children && react_1.default.createElement(cell_1.Cell, { xs: 12 }, children),
            react_1.default.createElement(cell_1.Cell, { xsOrder: 2, xs: 12 },
                react_1.default.createElement(stack_1.Stack, { flow: "horizontal-center", stackDistribution: "space-between" },
                    react_1.default.createElement(stack_child_1.StackChild, { order: 2 },
                        react_1.default.createElement(controls_1.ControlPanel, { onNextTrack: onNextTrack ? onClickNext : undefined, disableNextTrack: disableNextTrack, onPreviousTrack: hidePreviousTrack ? undefined : onClickPrevious, disablePreviousTrack: isPrevTrackBtnDisabled, live: live, showControls: showControls, loading: loading, playing: playing, onClickBackward: hideSeekButtons ? undefined : onClickBackward, onClickForward: hideSeekButtons ? undefined : onClickForward, togglePlay: togglePlay, overrides: tslib_1.__assign(tslib_1.__assign({}, controlButtonsDefaults), (0, filter_object_1.filterOutFalsyProperties)(controlButtonsOverrides)) })),
                    react_1.default.createElement(stack_child_1.StackChild, { order: 1 },
                        react_1.default.createElement(styled_1.ControlContainer, { playerTrackSize: "sizing050", xs: true, sm: true, md: true, targetDevices: [theme_1.Devices.iPadPro, theme_1.Devices.iPad] }, !hideVolumeControl && (react_1.default.createElement(volume_control_1.VolumeControl, { volume: volume, onChange: onChangeVolumeSlider, overrides: tslib_1.__assign(tslib_1.__assign({}, volumeControlDefaults), (0, filter_object_1.filterOutFalsyProperties)(volumeControlOverrides)) })))),
                    react_1.default.createElement(stack_child_1.StackChild, { order: 3 },
                        react_1.default.createElement(styled_1.ControlContainer, { playerTrackSize: "sizing050", xs: true, sm: true, md: true, targetDevices: [theme_1.Devices.iPadPro, theme_1.Devices.iPad] },
                            react_1.default.createElement(stack_1.Stack, { flow: "vertical-right", stackDistribution: "flex-end" }, popoutHref && (react_1.default.createElement(controls_1.PopoutButton, { onClick: onPopoutClick, href: popoutHref, overrides: tslib_1.__assign(tslib_1.__assign({}, popoutButtonDefaults), (0, filter_object_1.filterOutFalsyProperties)(popoutButtonOverrides)) }))))))),
            showControls && (react_1.default.createElement(cell_1.Cell, { xsOrder: 1, xs: 12 },
                react_1.default.createElement(slider_1.Slider, { min: 0, minLabel: formattedTime, max: Math.floor(duration) || 1, maxLabel: formattedDuration, values: trackPositionArr, step: 1, ariaLabel: "seek bar", ariaValueText: "Playback time: ".concat((0, utils_1.seekBarAriaValueText)(trackPositionArr), " of ").concat((0, utils_1.seekBarAriaValueText)([duration])), onChange: onChangeSlider, renderTrack: renderTrack, labelPosition: "after", dataTestId: "audio-slider", ariaDescribedBy: srOnlyForwardRewind, overrides: tslib_1.__assign(tslib_1.__assign({}, seekBarSliderDefaults), (0, filter_object_1.filterOutFalsyProperties)(seekBarSliderOverrides)) }),
                react_1.default.createElement(screen_reader_only_1.ScreenReaderOnly, { id: srOnlyForwardRewind, "aria-hidden": "true" }, "Use the arrow keys to fast forward or rewind"))))));
};
exports.AudioPlayer = (0, with_own_theme_1.withOwnTheme)(ThemelessAudioPlayer)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=audio-player.js.map