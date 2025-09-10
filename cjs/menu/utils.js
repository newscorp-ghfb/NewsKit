"use strict";
// Note: using an immutable concatenated string ID (instead of an array of strings)
// so that useEffect hooks do not repeatedly fire when ref changes but value
// remains the same.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentId = exports.isDescendant = exports.getIdDepth = exports.buildNestedId = void 0;
var buildNestedId = function (id, parentId) {
    return parentId ? "".concat(parentId, "|").concat(id) : id;
};
exports.buildNestedId = buildNestedId;
var getIdDepth = function (id) {
    return id.length - id.replace(/\|/g, '').length + 1;
};
exports.getIdDepth = getIdDepth;
var isDescendant = function (id, descendantId) {
    return id === descendantId.split('|').slice(0, (0, exports.getIdDepth)(id)).join('|');
};
exports.isDescendant = isDescendant;
var getParentId = function (id) {
    return id
        .split('|')
        .slice(0, (0, exports.getIdDepth)(id) - 1)
        .join('|') || null;
};
exports.getParentId = getParentId;
//# sourceMappingURL=utils.js.map