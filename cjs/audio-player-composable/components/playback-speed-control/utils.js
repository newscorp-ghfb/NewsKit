"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalOverrides = exports.selectionListOptionOverrides = exports.selectionListOverrides = exports.popoverOverrides = exports.iconButtonOverrides = void 0;
var tslib_1 = require("tslib");
var utils_1 = require("../../../utils");
var filter_object_1 = require("../../../utils/filter-object");
var merge_breakpoint_object_1 = require("../../../utils/merge-breakpoint-object");
var iconButtonOverrides = function (theme, overrides) { return (tslib_1.__assign({}, (0, utils_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.iconButton, (0, filter_object_1.filterOutFalsyProperties)(overrides.iconButton)))); };
exports.iconButtonOverrides = iconButtonOverrides;
var popoverOverrides = function (theme, overrides) { return (tslib_1.__assign({}, (0, utils_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.popover, (0, filter_object_1.filterOutFalsyProperties)(overrides.popover)))); };
exports.popoverOverrides = popoverOverrides;
var selectionListOverrides = function (theme, overrides) { return (tslib_1.__assign({}, (0, utils_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.selectionList, (0, filter_object_1.filterOutFalsyProperties)(overrides.selectionList)))); };
exports.selectionListOverrides = selectionListOverrides;
var selectionListOptionOverrides = function (theme, overrides) { return (tslib_1.__assign({}, (0, utils_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.selectionListOption, (0, filter_object_1.filterOutFalsyProperties)(overrides.selectionListOptions)))); };
exports.selectionListOptionOverrides = selectionListOptionOverrides;
var modalOverrides = function (theme, overrides) { return (tslib_1.__assign({}, (0, utils_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerPlaybackSpeedControl.modal, (0, filter_object_1.filterOutFalsyProperties)(overrides.modal)))); };
exports.modalOverrides = modalOverrides;
//# sourceMappingURL=utils.js.map