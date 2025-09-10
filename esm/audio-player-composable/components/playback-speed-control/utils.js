import { __assign } from "tslib";
import { deepMerge } from '../../../utils';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { mergeBreakpointObject } from '../../../utils/merge-breakpoint-object';
export var iconButtonOverrides = function (theme, overrides) { return (__assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.iconButton, filterOutFalsyProperties(overrides.iconButton)))); };
export var popoverOverrides = function (theme, overrides) { return (__assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.popover, filterOutFalsyProperties(overrides.popover)))); };
export var selectionListOverrides = function (theme, overrides) { return (__assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.selectionList, filterOutFalsyProperties(overrides.selectionList)))); };
export var selectionListOptionOverrides = function (theme, overrides) { return (__assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.selectionListOption, filterOutFalsyProperties(overrides.selectionListOptions)))); };
export var modalOverrides = function (theme, overrides) { return (__assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.modal, filterOutFalsyProperties(overrides.modal)))); };
//# sourceMappingURL=utils.js.map