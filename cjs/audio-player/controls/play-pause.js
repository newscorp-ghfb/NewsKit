"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerButton = exports.IconVisibilityButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icon_button_1 = require("../../icon-button");
var icons_1 = require("../../icons");
var utils_1 = require("../../utils");
exports.IconVisibilityButton = (0, utils_1.styled)(icon_button_1.IconButton)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (props) { return props.hide && 'opacity: 0; pointer-events: none;'; });
exports.PlayerButton = react_1.default.memo(function (_a) {
    var playing = _a.playing, canPause = _a.canPause, props = tslib_1.__rest(_a, ["playing", "canPause"]);
    var playStateIcon = react_1.default.createElement(icons_1.IconFilledPlayArrow, null);
    var ariaLabel = 'Play';
    var ariaPressed = false;
    if (playing) {
        ariaPressed = true;
        if (canPause) {
            playStateIcon = react_1.default.createElement(icons_1.IconFilledPause, null);
            ariaLabel = 'Pause';
        }
        else {
            playStateIcon = react_1.default.createElement(icons_1.IconFilledStop, null);
            ariaLabel = 'Stop';
        }
    }
    return (react_1.default.createElement(icon_button_1.IconButton, tslib_1.__assign({ "data-testid": "audio-player-play-button", "aria-pressed": ariaPressed, "aria-label": ariaLabel, size: "large" }, props), playStateIcon));
});
var templateObject_1;
//# sourceMappingURL=play-pause.js.map