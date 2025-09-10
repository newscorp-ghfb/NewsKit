"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaToValidCSS = exports.getAreasList = exports.filterInvalidAreas = exports.extractAreas = exports.capitalize = void 0;
var tslib_1 = require("tslib");
var uniq_1 = require("../utils/uniq");
var capitalize = function (s) {
    return s.replace(/^./, function (firstLetter) { return firstLetter.toUpperCase(); });
};
exports.capitalize = capitalize;
var extractAreas = function (areaString) {
    return areaString
        .replace(/\n/g, ' ')
        .replace(/"/g, '')
        .replace(/  +/g, ' ')
        .trim()
        .split(' ');
};
exports.extractAreas = extractAreas;
var filterInvalidAreas = function (areaName) {
    return areaName !== '.' && Boolean(areaName);
};
exports.filterInvalidAreas = filterInvalidAreas;
var getAreasList = function (areas) {
    if (typeof areas === 'string') {
        return (0, uniq_1.uniq)((0, exports.extractAreas)(areas));
    }
    var list = Object.values(areas).reduce(function (acc, val) {
        var filtered = (0, exports.extractAreas)(val);
        return tslib_1.__spreadArray(tslib_1.__spreadArray([], acc, true), filtered, true);
    }, []);
    return (0, uniq_1.uniq)(list).filter(exports.filterInvalidAreas);
};
exports.getAreasList = getAreasList;
var areaToValidCSS = function (areasToStandardise) {
    return areasToStandardise === null || areasToStandardise === void 0 ? void 0 : areasToStandardise.split('\n').map(function (eachArea) {
        return eachArea
            .split(/\s+/)
            .filter(function (eachAreaNested) { return !!eachAreaNested; })
            .join(' ');
    }).filter(function (each) { return each.length; }).map(function (each) { return (each.includes("\"") ? each : "\"".concat(each, "\"")); }).join('\n');
};
exports.areaToValidCSS = areaToValidCSS;
//# sourceMappingURL=utils.js.map