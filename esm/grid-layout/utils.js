import { __spreadArray } from "tslib";
import { uniq } from '../utils/uniq';
export var capitalize = function (s) {
    return s.replace(/^./, function (firstLetter) { return firstLetter.toUpperCase(); });
};
export var extractAreas = function (areaString) {
    return areaString
        .replace(/\n/g, ' ')
        .replace(/"/g, '')
        .replace(/  +/g, ' ')
        .trim()
        .split(' ');
};
export var filterInvalidAreas = function (areaName) {
    return areaName !== '.' && Boolean(areaName);
};
export var getAreasList = function (areas) {
    if (typeof areas === 'string') {
        return uniq(extractAreas(areas));
    }
    var list = Object.values(areas).reduce(function (acc, val) {
        var filtered = extractAreas(val);
        return __spreadArray(__spreadArray([], acc, true), filtered, true);
    }, []);
    return uniq(list).filter(filterInvalidAreas);
};
export var areaToValidCSS = function (areasToStandardise) {
    return areasToStandardise === null || areasToStandardise === void 0 ? void 0 : areasToStandardise.split('\n').map(function (eachArea) {
        return eachArea
            .split(/\s+/)
            .filter(function (eachAreaNested) { return !!eachAreaNested; })
            .join(' ');
    }).filter(function (each) { return each.length; }).map(function (each) { return (each.includes("\"") ? each : "\"".concat(each, "\"")); }).join('\n');
};
//# sourceMappingURL=utils.js.map