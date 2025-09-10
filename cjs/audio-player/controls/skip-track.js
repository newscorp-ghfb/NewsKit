"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipPreviousButton = exports.SkipNextButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("../../icons");
var play_pause_1 = require("./play-pause");
exports.SkipNextButton = react_1.default.memo(function (props) { return (react_1.default.createElement(play_pause_1.IconVisibilityButton, tslib_1.__assign({ "data-testid": "audio-player-skip-next", "aria-label": "Skip next", size: "medium", hide: true }, props),
    react_1.default.createElement(icons_1.IconFilledSkipNext, null))); });
exports.SkipPreviousButton = react_1.default.memo(function (props) { return (react_1.default.createElement(play_pause_1.IconVisibilityButton, tslib_1.__assign({ "data-testid": "audio-player-skip-previous", "aria-label": "Skip previous", size: "medium", hide: true }, props),
    react_1.default.createElement(icons_1.IconFilledSkipPrevious, null))); });
//# sourceMappingURL=skip-track.js.map