"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeControl = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var icon_button_1 = require("../icon-button");
var slider_1 = require("../slider");
var icons_1 = require("../icons");
var theme_1 = require("../theme");
var screen_reader_only_1 = require("../screen-reader-only/screen-reader-only");
var hooks_1 = require("../utils/hooks");
var utils_1 = require("./utils");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var toggleMute = function (volume, unMutedVolume, onChange) { return (volume === 0 ? onChange(unMutedVolume || 1) : onChange(0)); };
var MuteButton = function (_a) {
    var volume = _a.volume, unMutedVolume = _a.unMutedVolume, onChange = _a.onChange, volumeControlButtonStylePreset = _a.volumeControlButtonStylePreset, iconSize = _a.iconSize, size = _a.size;
    return (react_1.default.createElement(icon_button_1.IconButton, { "data-testid": "mute-button", "aria-label": volume === 0 ? 'Unmute' : 'Mute', tabIndex: -1, onClick: function () { return toggleMute(volume, unMutedVolume, onChange); }, size: size, overrides: {
            stylePreset: volumeControlButtonStylePreset,
            iconSize: iconSize,
        } }, volume === 0 ? react_1.default.createElement(icons_1.IconFilledVolumeOff, null) : react_1.default.createElement(icons_1.IconFilledVolumeDown, null)));
};
var ThemelessVolumeControl = function (_a) {
    var volume = _a.volume, vertical = _a.vertical, onChange = _a.onChange, _b = _a.overrides, overrides = _b === void 0 ? {} : _b;
    var theme = (0, theme_1.useTheme)();
    var _c = (0, react_1.useState)(volume), unMutedVolume = _c[0], setUnMutedVolume = _c[1];
    var srOnlyVolumeControl = (0, hooks_1.useReactKeys)(1)[0];
    var _d = (0, utils_1.getTokensForVolumeControl)(theme, overrides), sliderTrackStylePreset = _d.sliderTrackStylePreset, trackSize = _d.trackSize, sliderIndicatorTrackStylePreset = _d.sliderIndicatorTrackStylePreset, sliderThumbStylePreset = _d.sliderThumbStylePreset, thumbSize = _d.thumbSize, sliderThumbLabelStylePreset = _d.sliderThumbLabelStylePreset, volumeControlButtonStylePreset = _d.volumeControlButtonStylePreset, iconSize = _d.iconSize, buttonSize = _d.buttonSize;
    if (unMutedVolume !== volume && volume > 0) {
        setUnMutedVolume(volume);
    }
    var volumeArr = (0, react_1.useMemo)(function () { return [volume]; }, [volume]);
    var onSliderChange = (0, react_1.useCallback)(function (_a) {
        var newVolume = _a[0];
        return onChange(newVolume);
    }, [onChange]);
    var minLabel = (0, react_1.useCallback)(function () { return (react_1.default.createElement(MuteButton, { volume: volume, unMutedVolume: unMutedVolume, onChange: onChange, volumeControlButtonStylePreset: volumeControlButtonStylePreset, iconSize: iconSize, size: buttonSize })); }, [
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
    var maxLabel = (0, react_1.useCallback)(function () { return (react_1.default.createElement(icon_button_1.IconButton, { "data-testid": "volumeup-button", "aria-label": "Volume up", tabIndex: -1, onClick: function () { return onChange(1); }, size: buttonSize, overrides: {
            stylePreset: volumeControlButtonStylePreset,
            iconSize: iconSize,
        } },
        react_1.default.createElement(icons_1.IconFilledVolumeUp, null))); }, [buttonSize, iconSize, onChange, volumeControlButtonStylePreset]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(slider_1.Slider, { vertical: vertical, min: 0, max: 1, step: 0.1, values: volumeArr, onChange: onSliderChange, ariaLabel: "Volume Control", ariaValueText: "volume level ".concat(volumeArr[0] * 10, " of 10"), dataTestId: "volume-control", minLabel: minLabel, maxLabel: maxLabel, onKeyDown: toggleMuteWithKeys, ariaDescribedBy: srOnlyVolumeControl, overrides: {
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
        react_1.default.createElement(screen_reader_only_1.ScreenReaderOnly, { id: srOnlyVolumeControl, "aria-hidden": "true" }, "Use the arrow keys to adjust volume")));
};
exports.VolumeControl = (0, with_own_theme_1.withOwnTheme)(ThemelessVolumeControl)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=volume-control.js.map