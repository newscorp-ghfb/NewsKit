"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokensForVolumeControl = void 0;
var get_token_1 = require("../utils/get-token");
var getTokensForVolumeControl = function (theme, overrides) {
    var getVolumeControlToken = function (path, propName) {
        return (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "volumeControl.".concat(path), path, propName);
    };
    var sliderTrackStylePreset = getVolumeControlToken('slider.track', 'stylePreset');
    var trackSize = getVolumeControlToken('slider.track', 'size');
    var sliderIndicatorTrackStylePreset = getVolumeControlToken('slider.indicator', 'stylePreset');
    var sliderThumbStylePreset = getVolumeControlToken('slider.thumb', 'stylePreset');
    var thumbSize = getVolumeControlToken('slider.thumb', 'size');
    var sliderThumbLabelStylePreset = getVolumeControlToken('slider.thumbLabel', 'stylePreset');
    var volumeControlButtonStylePreset = getVolumeControlToken('button', 'stylePreset');
    var iconSize = getVolumeControlToken('button', 'iconSize');
    var buttonSize = getVolumeControlToken('button', 'size');
    return {
        sliderTrackStylePreset: sliderTrackStylePreset,
        trackSize: trackSize,
        sliderIndicatorTrackStylePreset: sliderIndicatorTrackStylePreset,
        sliderThumbStylePreset: sliderThumbStylePreset,
        thumbSize: thumbSize,
        sliderThumbLabelStylePreset: sliderThumbLabelStylePreset,
        volumeControlButtonStylePreset: volumeControlButtonStylePreset,
        iconSize: iconSize,
        buttonSize: buttonSize,
    };
};
exports.getTokensForVolumeControl = getTokensForVolumeControl;
//# sourceMappingURL=utils.js.map