"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerSeekBar = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_range_1 = require("react-range");
var context_1 = require("../../context");
var slider_1 = require("../../../slider");
var screen_reader_only_1 = require("../../../screen-reader-only");
var hooks_1 = require("../../../utils/hooks");
var filter_object_1 = require("../../../utils/filter-object");
var get_token_1 = require("../../../utils/get-token");
var utils_1 = require("../../../utils");
var styled_1 = require("../../../slider/styled");
var with_own_theme_1 = require("../../../utils/with-own-theme");
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var theme_1 = require("../../../theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var utils_2 = require("./utils");
var ThemelessSeekBar = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b;
    var seekBarSliderOverrides = overrides.slider;
    var theme = (0, theme_1.useTheme)();
    var seekBarSliderDefaults = theme.componentDefaults.audioPlayerSeekBar.slider;
    var getSeekBarProps = (0, context_1.useAudioPlayerContext)().getSeekBarProps;
    var _c = getSeekBarProps && getSeekBarProps(), duration = _c.duration, currentTime = _c.currentTime, onChange = _c.onChange, buffered = _c.buffered;
    var srOnlyForwardRewind = (0, hooks_1.useReactKeys)(1)[0];
    var renderTrack = (0, react_1.useCallback)(function (_a) {
        var trackProps = _a.props, trackChildren = _a.children, isDragged = _a.isDragged;
        var sliderTrackStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'audioPlayerSeekBar.slider.track', 'slider.track', 'stylePreset');
        var sliderIndicatorTrackStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'audioPlayerSeekBar.slider.indicator', 'slider.indicator', 'stylePreset');
        var bufferingStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'audioPlayerSeekBar.buffering', 'buffering', 'stylePreset');
        var _b = (0, utils_2.formatTrackData)((0, utils_1.getSingleStylePreset)(theme, 'base', 'backgroundColor', sliderTrackStylePreset), (0, utils_1.getSingleStylePreset)(theme, 'base', 'backgroundColor', sliderIndicatorTrackStylePreset), (0, utils_1.getSingleStylePreset)(theme, 'base', 'backgroundColor', bufferingStylePreset), [currentTime], buffered), values = _b.values, colors = _b.colors;
        return (react_1.default.createElement(styled_1.StyledTrack, tslib_1.__assign({}, trackProps, { values: [currentTime], dragged: isDragged, onKeyDown: function (e) {
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
        currentTime,
    ]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(slider_1.Slider, { ref: ref, min: 0, max: Math.floor(duration) || 1, values: [currentTime], step: 1, ariaLabel: "seek bar", ariaValueText: "Playback time: ".concat((0, utils_2.seekBarAriaValueText)([
                currentTime,
            ]), " of ").concat((0, utils_2.seekBarAriaValueText)([duration])), onChange: function (_a) {
                var value = _a[0];
                return onChange(value);
            }, renderTrack: renderTrack, dataTestId: "audio-slider", ariaDescribedBy: srOnlyForwardRewind, overrides: tslib_1.__assign(tslib_1.__assign({}, seekBarSliderDefaults), (0, filter_object_1.filterOutFalsyProperties)(seekBarSliderOverrides)) }),
        react_1.default.createElement(screen_reader_only_1.ScreenReaderOnly, { id: srOnlyForwardRewind, "aria-hidden": "true" }, "Use the arrow keys to fast forward or rewind")));
});
exports.AudioPlayerSeekBar = (0, with_own_theme_1.withOwnTheme)(ThemelessSeekBar)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=seek-bar.js.map