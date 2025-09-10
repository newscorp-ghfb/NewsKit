export var get = function (obj, path) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return path.split('.').reduce(function (acc, key) { return acc && acc[key]; }, obj);
};
//# sourceMappingURL=get.js.map