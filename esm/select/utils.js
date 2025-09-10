import { deepMerge } from '../utils/deep-merge';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { get } from '../utils/get';
import { hasOwnProperty } from '../utils/has-own-property';
import { mergeBreakpointObject } from '../utils/merge-breakpoint-object';
export var getModalOverrides = function (_a) {
    var theme = _a.theme, size = _a.size, overrides = _a.overrides;
    var modalDefaults = theme.componentDefaults.select[size].modal;
    var userProvidedOverrides = {};
    // propsOverride:
    if (typeof overrides === 'object' && hasOwnProperty(overrides, 'props')) {
        userProvidedOverrides = get(userProvidedOverrides, 'props.overrides');
        // styleOverrides
    }
    else if (typeof overrides === 'object') {
        userProvidedOverrides = overrides;
    }
    return deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), modalDefaults, filterOutFalsyProperties(userProvidedOverrides));
};
//# sourceMappingURL=utils.js.map