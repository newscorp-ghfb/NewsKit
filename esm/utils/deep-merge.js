/* eslint-disable no-underscore-dangle, @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { __rest, __spreadArray } from "tslib";
import React from 'react';
var isCloneable = function (obj) {
    return Array.isArray(obj) || {}.toString.call(obj) === '[object Object]';
};
export function deepMerge(callbackFn) {
    var partSources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        partSources[_i - 1] = arguments[_i];
    }
    var result = {};
    var hasCallbackFn = typeof callbackFn === 'function';
    var sources = hasCallbackFn ? partSources : __spreadArray([callbackFn], partSources, true);
    var iLen = sources.length;
    for (var sourceIdx = 0; sourceIdx < iLen; sourceIdx += 1) {
        var obj = sources[sourceIdx] || {};
        if (obj.__shallow || (hasCallbackFn && callbackFn(obj))) {
            var _a = obj, __shallow = _a.__shallow, filteredObj = __rest(_a, ["__shallow"]);
            result = filteredObj;
        }
        else if (isCloneable(obj)) {
            var entries = Object.entries(obj);
            var jLen = entries.length;
            for (var entryIdx = 0; entryIdx < jLen; entryIdx += 1) {
                var _b = entries[entryIdx], key = _b[0], value = _b[1];
                // To avoid deep-merging ReactElements with !React.isValidElement(value)
                if (isCloneable(value) && !React.isValidElement(value)) {
                    result[key] = deepMerge(hasCallbackFn ? callbackFn : {}, (result[key] || {}), value);
                }
                else if (isCloneable(result)) {
                    result[key] = value;
                }
                else {
                    result = obj;
                }
            }
        }
        else {
            result = obj;
        }
    }
    return result;
}
//# sourceMappingURL=deep-merge.js.map