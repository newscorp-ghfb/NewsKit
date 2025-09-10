import { __assign } from "tslib";
import React from 'react';
import { isFragment } from 'react-is';
// these utility function are copied from https://github.com/fernandopasik/react-children-utilities
// the library will be added as a dependency with PPDSC-1432 - Add react-children-utilities as dependency
// https://nidigitalsolutions.jira.com/browse/PPDSC-1432
// After that these functions (and this file) needs to be deleted from here and imported from react-children-utilities library.
var hasChildren = function (element) {
    return React.isValidElement(element) &&
        Boolean(element.props.children);
};
var hasComplexChildren = function (element) {
    return React.isValidElement(element) &&
        hasChildren(element) &&
        React.Children.toArray(element.props.children).reduce(function (response, child) {
            return response || React.isValidElement(child);
        }, false);
};
export var deepMap = function (children, deepMapFn) {
    return React.Children.toArray(children).map(function (child, index, mapChildren) {
        if (React.isValidElement(child) && hasComplexChildren(child)) {
            // Clone the child that has children and map them too
            return deepMapFn(React.cloneElement(child, __assign(__assign({}, child.props), { children: deepMap(child.props.children, deepMapFn) })));
        }
        return deepMapFn(child, index, mapChildren);
    });
};
export var childIsString = function (child) {
    if (typeof child === 'string') {
        return true;
    }
    // unpack fragment
    if (isFragment(child) &&
        React.isValidElement(child) &&
        child.props &&
        typeof child.props.children === 'string') {
        return true;
    }
    return false;
};
export var childrenIsString = function (children) {
    return childIsString(children) ||
        (Array.isArray(children) && children.some(childIsString));
};
//# sourceMappingURL=react-children-utilities.js.map