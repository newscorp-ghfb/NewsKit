"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPopoverOverrides = exports.useInitialVolume = void 0;
var tslib_1 = require("tslib");
var react_1 = require("react");
var deep_merge_1 = require("../../../utils/deep-merge");
var merge_breakpoint_object_1 = require("../../../utils/merge-breakpoint-object");
var filter_object_1 = require("../../../utils/filter-object");
// This hook sets the initial volume. If `newskit-audioplayer-volume` is present
// it's value will be used. If not, the initialVolume will.
var useInitialVolume = function (_a) {
    var onChange = _a.onChange, initialVolume = _a.initialVolume;
    (0, react_1.useEffect)(function () {
        var storedVolume = parseFloat((typeof window !== 'undefined' &&
            window.localStorage.getItem('newskit-audioplayer-volume')) ||
            '');
        onChange(Number.isNaN(storedVolume) ? initialVolume : storedVolume);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
exports.useInitialVolume = useInitialVolume;
var getPopoverOverrides = function (theme, overrides) { return (tslib_1.__assign({}, (0, deep_merge_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerVolumeControl.popover, (0, filter_object_1.filterOutFalsyProperties)(overrides.popover)))); };
exports.getPopoverOverrides = getPopoverOverrides;
//# sourceMappingURL=utils.js.map