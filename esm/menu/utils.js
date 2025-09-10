// Note: using an immutable concatenated string ID (instead of an array of strings)
// so that useEffect hooks do not repeatedly fire when ref changes but value
// remains the same.
export var buildNestedId = function (id, parentId) {
    return parentId ? "".concat(parentId, "|").concat(id) : id;
};
export var getIdDepth = function (id) {
    return id.length - id.replace(/\|/g, '').length + 1;
};
export var isDescendant = function (id, descendantId) {
    return id === descendantId.split('|').slice(0, getIdDepth(id)).join('|');
};
export var getParentId = function (id) {
    return id
        .split('|')
        .slice(0, getIdDepth(id) - 1)
        .join('|') || null;
};
//# sourceMappingURL=utils.js.map