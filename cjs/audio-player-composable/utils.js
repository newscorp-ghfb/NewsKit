"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useButtonOverrides = exports.useKeyboardShortcutsOnButton = exports.getMediaSegment = exports.formatDuration = exports.formatTrackTime = void 0;
var tslib_1 = require("tslib");
var theme_1 = require("../theme");
var filter_object_1 = require("../utils/filter-object");
var get_1 = require("../utils/get");
var hooks_1 = require("../utils/hooks");
var context_1 = require("./context");
var hhmmss = [11, 8];
var mmss = [14, 5];
var formatTrackTime = function (time, maxTime) {
    var _a;
    if (maxTime === void 0) { maxTime = time; }
    var args = Math.max(time, maxTime) >= 3600 ? hhmmss : mmss;
    return (_a = new Date(time * 1000).toISOString()).substr.apply(_a, args);
};
exports.formatTrackTime = formatTrackTime;
var formatDuration = function (time, maxTime) {
    if (maxTime === void 0) { maxTime = time; }
    if (time === 0) {
        return '';
    }
    return (0, exports.formatTrackTime)(time, maxTime);
};
exports.formatDuration = formatDuration;
var getMediaSegment = function (duration, currentPosition) {
    var currentPositionPercentage = (currentPosition / duration) * 100;
    if (currentPositionPercentage > 0 && currentPositionPercentage <= 25)
        return '0-25';
    if (currentPositionPercentage > 25 && currentPositionPercentage <= 50)
        return '26-50';
    if (currentPositionPercentage > 50 && currentPositionPercentage <= 75)
        return '51-75';
    return '76-100';
};
exports.getMediaSegment = getMediaSegment;
var useKeyboardShortcutsOnButton = function (_a) {
    var props = _a.props, defaultKeys = _a.defaults, action = _a.action;
    var audioSectionRef = (0, context_1.useAudioPlayerContext)().audioSectionRef;
    var options = { target: audioSectionRef, preventDefault: false };
    var keyboardShortcuts = props.keyboardShortcuts;
    var key = keyboardShortcuts || defaultKeys;
    var callback = action || props.onClick;
    (0, hooks_1.useKeypress)(key, callback, options);
};
exports.useKeyboardShortcutsOnButton = useKeyboardShortcutsOnButton;
var useButtonOverrides = function (props, defaultsPath) {
    var theme = (0, theme_1.useTheme)();
    var overrides = props.overrides;
    return tslib_1.__assign(tslib_1.__assign({}, (0, get_1.get)(theme, "componentDefaults.".concat(defaultsPath))), (0, filter_object_1.filterOutFalsyProperties)(overrides));
};
exports.useButtonOverrides = useButtonOverrides;
//# sourceMappingURL=utils.js.map