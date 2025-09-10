"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.childrenIsString = exports.childIsString = exports.deepMap = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_is_1 = require("react-is");
// these utility function are copied from https://github.com/fernandopasik/react-children-utilities
// the library will be added as a dependency with PPDSC-1432 - Add react-children-utilities as dependency
// https://nidigitalsolutions.jira.com/browse/PPDSC-1432
// After that these functions (and this file) needs to be deleted from here and imported from react-children-utilities library.
var hasChildren = function (element) {
    return react_1.default.isValidElement(element) &&
        Boolean(element.props.children);
};
var hasComplexChildren = function (element) {
    return react_1.default.isValidElement(element) &&
        hasChildren(element) &&
        react_1.default.Children.toArray(element.props.children).reduce(function (response, child) {
            return response || react_1.default.isValidElement(child);
        }, false);
};
var deepMap = function (children, deepMapFn) {
    return react_1.default.Children.toArray(children).map(function (child, index, mapChildren) {
        if (react_1.default.isValidElement(child) && hasComplexChildren(child)) {
            // Clone the child that has children and map them too
            return deepMapFn(react_1.default.cloneElement(child, tslib_1.__assign(tslib_1.__assign({}, child.props), { children: (0, exports.deepMap)(child.props.children, deepMapFn) })));
        }
        return deepMapFn(child, index, mapChildren);
    });
};
exports.deepMap = deepMap;
var childIsString = function (child) {
    if (typeof child === 'string') {
        return true;
    }
    // unpack fragment
    if ((0, react_is_1.isFragment)(child) &&
        react_1.default.isValidElement(child) &&
        child.props &&
        typeof child.props.children === 'string') {
        return true;
    }
    return false;
};
exports.childIsString = childIsString;
var childrenIsString = function (children) {
    return (0, exports.childIsString)(children) ||
        (Array.isArray(children) && children.some(exports.childIsString));
};
exports.childrenIsString = childrenIsString;
//# sourceMappingURL=react-children-utilities.js.map