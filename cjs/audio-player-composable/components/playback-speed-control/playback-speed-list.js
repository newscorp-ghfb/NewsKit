"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaybackSpeedList = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var selection_list_1 = require("../../../selection-list");
var utils_1 = require("./utils");
var PLAYBACK_RATE_SCALE = [0.5, 0.8, 1, 1.2, 1.5, 2];
var PlaybackSpeedList = function (_a) {
    var playbackSpeed = _a.playbackSpeed, updateSpeed = _a.updateSpeed, setIsOpen = _a.setIsOpen, theme = _a.theme, overrides = _a.overrides, selectedOptionRef = _a.selectedOptionRef, isInsideModal = _a.isInsideModal;
    return (react_1.default.createElement(selection_list_1.SelectionList, { overrides: (0, utils_1.selectionListOverrides)(theme, overrides), "aria-label": "playback speed" }, PLAYBACK_RATE_SCALE.map(function (speed) { return (react_1.default.createElement(selection_list_1.SelectionListOption, { ref: playbackSpeed === speed ? selectedOptionRef : undefined, key: speed, overrides: (0, utils_1.selectionListOptionOverrides)(theme, overrides), selected: playbackSpeed === speed, onClick: function () {
            updateSpeed(speed);
            if (!isInsideModal) {
                setIsOpen(false);
            }
        } },
        speed,
        "x")); })));
};
exports.PlaybackSpeedList = PlaybackSpeedList;
//# sourceMappingURL=playback-speed-list.js.map