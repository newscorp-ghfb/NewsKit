import { __assign } from "tslib";
import { useEffect } from 'react';
import { deepMerge } from '../../../utils/deep-merge';
import { mergeBreakpointObject } from '../../../utils/merge-breakpoint-object';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
// This hook sets the initial volume. If `newskit-audioplayer-volume` is present
// it's value will be used. If not, the initialVolume will.
export var useInitialVolume = function (_a) {
    var onChange = _a.onChange, initialVolume = _a.initialVolume;
    useEffect(function () {
        var storedVolume = parseFloat((typeof window !== 'undefined' &&
            window.localStorage.getItem('newskit-audioplayer-volume')) ||
            '');
        onChange(Number.isNaN(storedVolume) ? initialVolume : storedVolume);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
};
export var getPopoverOverrides = function (theme, overrides) { return (__assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerVolumeControl.popover, filterOutFalsyProperties(overrides.popover)))); };
//# sourceMappingURL=utils.js.map