"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModalOverrides = void 0;
var deep_merge_1 = require("../utils/deep-merge");
var filter_object_1 = require("../utils/filter-object");
var get_1 = require("../utils/get");
var has_own_property_1 = require("../utils/has-own-property");
var merge_breakpoint_object_1 = require("../utils/merge-breakpoint-object");
var getModalOverrides = function (_a) {
    var theme = _a.theme, size = _a.size, overrides = _a.overrides;
    var modalDefaults = theme.componentDefaults.select[size].modal;
    var userProvidedOverrides = {};
    // propsOverride:
    if (typeof overrides === 'object' && (0, has_own_property_1.hasOwnProperty)(overrides, 'props')) {
        userProvidedOverrides = (0, get_1.get)(userProvidedOverrides, 'props.overrides');
        // styleOverrides
    }
    else if (typeof overrides === 'object') {
        userProvidedOverrides = overrides;
    }
    return (0, deep_merge_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), modalDefaults, (0, filter_object_1.filterOutFalsyProperties)(userProvidedOverrides));
};
exports.getModalOverrides = getModalOverrides;
//# sourceMappingURL=utils.js.map