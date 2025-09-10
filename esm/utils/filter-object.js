var filter = function (target, predicate) {
    return Object.entries(target).reduce(function (acc, obj) {
        if (predicate(obj)) {
            var key = obj[0], value = obj[1];
            acc[key] = value;
        }
        return acc;
    }, {});
};
export var filterObject = function (target, filterKeys) {
    if (filterKeys === void 0) { filterKeys = []; }
    return filterKeys.length
        ? filter(target, function (_a) {
            var key = _a[0];
            return filterKeys.includes(key);
        })
        : {};
};
export var rejectObject = function (target, rejectKeys) {
    if (rejectKeys === void 0) { rejectKeys = []; }
    return rejectKeys.length
        ? filter(target, function (_a) {
            var key = _a[0];
            return !rejectKeys.includes(key);
        })
        : target;
};
export var filterOutFalsyProperties = function (target) {
    return target && typeof target === 'object'
        ? filter(target, function (_a) {
            var entry = _a[1];
            return !!entry;
        })
        : {};
};
//# sourceMappingURL=filter-object.js.map