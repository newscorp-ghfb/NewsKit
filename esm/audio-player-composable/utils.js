import { __assign } from "tslib";
import { useTheme } from '../theme';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { get } from '../utils/get';
import { useKeypress } from '../utils/hooks';
import { useAudioPlayerContext } from './context';
var hhmmss = [11, 8];
var mmss = [14, 5];
export var formatTrackTime = function (time, maxTime) {
    var _a;
    if (maxTime === void 0) { maxTime = time; }
    var args = Math.max(time, maxTime) >= 3600 ? hhmmss : mmss;
    return (_a = new Date(time * 1000).toISOString()).substr.apply(_a, args);
};
export var formatDuration = function (time, maxTime) {
    if (maxTime === void 0) { maxTime = time; }
    if (time === 0) {
        return '';
    }
    return formatTrackTime(time, maxTime);
};
export var getMediaSegment = function (duration, currentPosition) {
    var currentPositionPercentage = (currentPosition / duration) * 100;
    if (currentPositionPercentage > 0 && currentPositionPercentage <= 25)
        return '0-25';
    if (currentPositionPercentage > 25 && currentPositionPercentage <= 50)
        return '26-50';
    if (currentPositionPercentage > 50 && currentPositionPercentage <= 75)
        return '51-75';
    return '76-100';
};
export var useKeyboardShortcutsOnButton = function (_a) {
    var props = _a.props, defaultKeys = _a.defaults, action = _a.action;
    var audioSectionRef = useAudioPlayerContext().audioSectionRef;
    var options = { target: audioSectionRef, preventDefault: false };
    var keyboardShortcuts = props.keyboardShortcuts;
    var key = keyboardShortcuts || defaultKeys;
    var callback = action || props.onClick;
    useKeypress(key, callback, options);
};
export var useButtonOverrides = function (props, defaultsPath) {
    var theme = useTheme();
    var overrides = props.overrides;
    return __assign(__assign({}, get(theme, "componentDefaults.".concat(defaultsPath))), filterOutFalsyProperties(overrides));
};
//# sourceMappingURL=utils.js.map