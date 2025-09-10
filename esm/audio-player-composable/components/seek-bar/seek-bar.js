import { __assign } from "tslib";
import React, { useCallback } from 'react';
import { getTrackBackground } from 'react-range';
import { useAudioPlayerContext } from '../../context';
import { Slider } from '../../../slider';
import { ScreenReaderOnly } from '../../../screen-reader-only';
import { useReactKeys } from '../../../utils/hooks';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { getToken } from '../../../utils/get-token';
import { getSingleStylePreset } from '../../../utils';
import { StyledTrack } from '../../../slider/styled';
import { withOwnTheme } from '../../../utils/with-own-theme';
import stylePresets from './style-presets';
import { useTheme } from '../../../theme';
import defaults from './defaults';
import { formatTrackData, seekBarAriaValueText } from './utils';
var ThemelessSeekBar = React.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b;
    var seekBarSliderOverrides = overrides.slider;
    var theme = useTheme();
    var seekBarSliderDefaults = theme.componentDefaults.audioPlayerSeekBar.slider;
    var getSeekBarProps = useAudioPlayerContext().getSeekBarProps;
    var _c = getSeekBarProps && getSeekBarProps(), duration = _c.duration, currentTime = _c.currentTime, onChange = _c.onChange, buffered = _c.buffered;
    var srOnlyForwardRewind = useReactKeys(1)[0];
    var renderTrack = useCallback(function (_a) {
        var trackProps = _a.props, trackChildren = _a.children, isDragged = _a.isDragged;
        var sliderTrackStylePreset = getToken({ theme: theme, overrides: overrides }, 'audioPlayerSeekBar.slider.track', 'slider.track', 'stylePreset');
        var sliderIndicatorTrackStylePreset = getToken({ theme: theme, overrides: overrides }, 'audioPlayerSeekBar.slider.indicator', 'slider.indicator', 'stylePreset');
        var bufferingStylePreset = getToken({ theme: theme, overrides: overrides }, 'audioPlayerSeekBar.buffering', 'buffering', 'stylePreset');
        var _b = formatTrackData(getSingleStylePreset(theme, 'base', 'backgroundColor', sliderTrackStylePreset), getSingleStylePreset(theme, 'base', 'backgroundColor', sliderIndicatorTrackStylePreset), getSingleStylePreset(theme, 'base', 'backgroundColor', bufferingStylePreset), [currentTime], buffered), values = _b.values, colors = _b.colors;
        return (React.createElement(StyledTrack, __assign({}, trackProps, { values: [currentTime], dragged: isDragged, onKeyDown: function (e) {
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
        currentTime,
    ]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Slider, { ref: ref, min: 0, max: Math.floor(duration) || 1, values: [currentTime], step: 1, ariaLabel: "seek bar", ariaValueText: "Playback time: ".concat(seekBarAriaValueText([
                currentTime,
            ]), " of ").concat(seekBarAriaValueText([duration])), onChange: function (_a) {
                var value = _a[0];
                return onChange(value);
            }, renderTrack: renderTrack, dataTestId: "audio-slider", ariaDescribedBy: srOnlyForwardRewind, overrides: __assign(__assign({}, seekBarSliderDefaults), filterOutFalsyProperties(seekBarSliderOverrides)) }),
        React.createElement(ScreenReaderOnly, { id: srOnlyForwardRewind, "aria-hidden": "true" }, "Use the arrow keys to fast forward or rewind")));
});
export var AudioPlayerSeekBar = withOwnTheme(ThemelessSeekBar)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=seek-bar.js.map