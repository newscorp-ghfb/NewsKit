"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackwardButton = exports.ForwardButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("../../icons");
var icon_button_1 = require("../../icon-button");
exports.ForwardButton = react_1.default.memo(function (props) { return (react_1.default.createElement(icon_button_1.IconButton, tslib_1.__assign({ "data-testid": "audio-player-forward", "aria-label": "Fast forward 10 seconds", size: "medium" }, props),
    react_1.default.createElement(icons_1.IconFilledForward10, null))); });
exports.BackwardButton = react_1.default.memo(function (props) { return (react_1.default.createElement(icon_button_1.IconButton, tslib_1.__assign({ "data-testid": "audio-player-backward", "aria-label": "Rewind 10 seconds", size: "medium" }, props),
    react_1.default.createElement(icons_1.IconFilledReplay10, null))); });
//# sourceMappingURL=forward-replay.js.map