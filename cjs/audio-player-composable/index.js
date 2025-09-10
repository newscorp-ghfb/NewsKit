"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAudioPlayerContext = exports.AudioPlayerComposable = exports.calculateTime = void 0;
var tslib_1 = require("tslib");
/* istanbul ignore file */
var utils_1 = require("./components/time-display/utils");
Object.defineProperty(exports, "calculateTime", { enumerable: true, get: function () { return utils_1.calculateTime; } });
var audio_player_composable_1 = require("./audio-player-composable");
Object.defineProperty(exports, "AudioPlayerComposable", { enumerable: true, get: function () { return audio_player_composable_1.AudioPlayerComposable; } });
var context_1 = require("./context");
Object.defineProperty(exports, "useAudioPlayerContext", { enumerable: true, get: function () { return context_1.useAudioPlayerContext; } });
tslib_1.__exportStar(require("./components/time-display"), exports);
tslib_1.__exportStar(require("./components/seek-bar"), exports);
tslib_1.__exportStar(require("./components/play-pause-button"), exports);
tslib_1.__exportStar(require("./components/forward-button"), exports);
tslib_1.__exportStar(require("./components/replay-button"), exports);
tslib_1.__exportStar(require("./components/skip-next-button"), exports);
tslib_1.__exportStar(require("./components/skip-previous-button"), exports);
tslib_1.__exportStar(require("./components/volume-control"), exports);
tslib_1.__exportStar(require("./components/playback-speed-control"), exports);
//# sourceMappingURL=index.js.map