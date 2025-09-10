import React, { useState, useCallback, useMemo } from 'react';
import { IconButton } from '../icon-button';
import { Slider } from '../slider';
import { IconFilledVolumeUp, IconFilledVolumeDown, IconFilledVolumeOff, } from '../icons';
import { useTheme } from '../theme';
import { ScreenReaderOnly } from '../screen-reader-only/screen-reader-only';
import { useReactKeys } from '../utils/hooks';
import { getTokensForVolumeControl } from './utils';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var toggleMute = function (volume, unMutedVolume, onChange) { return (volume === 0 ? onChange(unMutedVolume || 1) : onChange(0)); };
var MuteButton = function (_a) {
    var volume = _a.volume, unMutedVolume = _a.unMutedVolume, onChange = _a.onChange, volumeControlButtonStylePreset = _a.volumeControlButtonStylePreset, iconSize = _a.iconSize, size = _a.size;
    return (React.createElement(IconButton, { "data-testid": "mute-button", "aria-label": volume === 0 ? 'Unmute' : 'Mute', tabIndex: -1, onClick: function () { return toggleMute(volume, unMutedVolume, onChange); }, size: size, overrides: {
            stylePreset: volumeControlButtonStylePreset,
            iconSize: iconSize,
        } }, volume === 0 ? React.createElement(IconFilledVolumeOff, null) : React.createElement(IconFilledVolumeDown, null)));
};
var ThemelessVolumeControl = function (_a) {
    var volume = _a.volume, vertical = _a.vertical, onChange = _a.onChange, _b = _a.overrides, overrides = _b === void 0 ? {} : _b;
    var theme = useTheme();
    var _c = useState(volume), unMutedVolume = _c[0], setUnMutedVolume = _c[1];
    var srOnlyVolumeControl = useReactKeys(1)[0];
    var _d = getTokensForVolumeControl(theme, overrides), sliderTrackStylePreset = _d.sliderTrackStylePreset, trackSize = _d.trackSize, sliderIndicatorTrackStylePreset = _d.sliderIndicatorTrackStylePreset, sliderThumbStylePreset = _d.sliderThumbStylePreset, thumbSize = _d.thumbSize, sliderThumbLabelStylePreset = _d.sliderThumbLabelStylePreset, volumeControlButtonStylePreset = _d.volumeControlButtonStylePreset, iconSize = _d.iconSize, buttonSize = _d.buttonSize;
    if (unMutedVolume !== volume && volume > 0) {
        setUnMutedVolume(volume);
    }
    var volumeArr = useMemo(function () { return [volume]; }, [volume]);
    var onSliderChange = useCallback(function (_a) {
        var newVolume = _a[0];
        return onChange(newVolume);
    }, [onChange]);
    var minLabel = useCallback(function () { return (React.createElement(MuteButton, { volume: volume, unMutedVolume: unMutedVolume, onChange: onChange, volumeControlButtonStylePreset: volumeControlButtonStylePreset, iconSize: iconSize, size: buttonSize })); }, [
        volume,
        unMutedVolume,
        onChange,
        volumeControlButtonStylePreset,
        iconSize,
        buttonSize,
    ]);
    var toggleMuteWithKeys = function (e) {
        if (e.keyCode === 32 || e.keyCode === 13) {
            toggleMute(volume, unMutedVolume, onChange);
        }
    };
    var maxLabel = useCallback(function () { return (React.createElement(IconButton, { "data-testid": "volumeup-button", "aria-label": "Volume up", tabIndex: -1, onClick: function () { return onChange(1); }, size: buttonSize, overrides: {
            stylePreset: volumeControlButtonStylePreset,
            iconSize: iconSize,
        } },
        React.createElement(IconFilledVolumeUp, null))); }, [buttonSize, iconSize, onChange, volumeControlButtonStylePreset]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Slider, { vertical: vertical, min: 0, max: 1, step: 0.1, values: volumeArr, onChange: onSliderChange, ariaLabel: "Volume Control", ariaValueText: "volume level ".concat(volumeArr[0] * 10, " of 10"), dataTestId: "volume-control", minLabel: minLabel, maxLabel: maxLabel, onKeyDown: toggleMuteWithKeys, ariaDescribedBy: srOnlyVolumeControl, overrides: {
                track: {
                    stylePreset: sliderTrackStylePreset,
                    size: trackSize,
                },
                indicator: {
                    stylePreset: sliderIndicatorTrackStylePreset,
                },
                thumb: {
                    stylePreset: sliderThumbStylePreset,
                    size: thumbSize,
                },
                thumbLabel: {
                    stylePreset: sliderThumbLabelStylePreset,
                },
            } }),
        React.createElement(ScreenReaderOnly, { id: srOnlyVolumeControl, "aria-hidden": "true" }, "Use the arrow keys to adjust volume")));
};
export var VolumeControl = withOwnTheme(ThemelessVolumeControl)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=volume-control.js.map