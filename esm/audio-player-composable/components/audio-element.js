import { __assign, __rest } from "tslib";
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
export var AudioElement = function (_a) {
    var src = _a.src, audioRef = _a.audioRef, autoPlay = _a.autoPlay, onPlay = _a.onPlay, onCanPlay = _a.onCanPlay, onWaiting = _a.onWaiting, onPause = _a.onPause, onEnded = _a.onEnded, onDurationChange = _a.onDurationChange, onVolumeChange = _a.onVolumeChange, onTimeUpdate = _a.onTimeUpdate, onProgress = _a.onProgress, props = __rest(_a, ["src", "audioRef", "autoPlay", "onPlay", "onCanPlay", "onWaiting", "onPause", "onEnded", "onDurationChange", "onVolumeChange", "onTimeUpdate", "onProgress"]);
    return (React.createElement("audio", __assign({ ref: audioRef, autoPlay: autoPlay, "data-testid": "audio-element", src: src, onCanPlay: onCanPlay, onWaiting: onWaiting, onPlay: onPlay, onPause: onPause, onEnded: onEnded, onDurationChange: onDurationChange, onTimeUpdate: onTimeUpdate, onProgress: onProgress, onVolumeChange: onVolumeChange }, props)));
};
//# sourceMappingURL=audio-element.js.map