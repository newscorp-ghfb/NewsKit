"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioElement = void 0;
var tslib_1 = require("tslib");
/* eslint-disable jsx-a11y/media-has-caption */
var react_1 = tslib_1.__importDefault(require("react"));
var AudioElement = function (_a) {
    var src = _a.src, audioRef = _a.audioRef, autoPlay = _a.autoPlay, onPlay = _a.onPlay, onCanPlay = _a.onCanPlay, onWaiting = _a.onWaiting, onPause = _a.onPause, onEnded = _a.onEnded, onDurationChange = _a.onDurationChange, onVolumeChange = _a.onVolumeChange, onTimeUpdate = _a.onTimeUpdate, onProgress = _a.onProgress, props = tslib_1.__rest(_a, ["src", "audioRef", "autoPlay", "onPlay", "onCanPlay", "onWaiting", "onPause", "onEnded", "onDurationChange", "onVolumeChange", "onTimeUpdate", "onProgress"]);
    return (react_1.default.createElement("audio", tslib_1.__assign({ ref: audioRef, autoPlay: autoPlay, "data-testid": "audio-element", src: src, onCanPlay: onCanPlay, onWaiting: onWaiting, onPlay: onPlay, onPause: onPause, onEnded: onEnded, onDurationChange: onDurationChange, onTimeUpdate: onTimeUpdate, onProgress: onProgress, onVolumeChange: onVolumeChange }, props)));
};
exports.AudioElement = AudioElement;
//# sourceMappingURL=audio-element.js.map