"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderIfReactComponent = exports.hasMatchingDisplayNameWith = exports.getDisplayName = exports.isReactComponent = exports.isStyledComponent = exports.isFunctionComponent = exports.isClassComponent = exports.isValidNode = exports.as = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
/* eslint-disable @typescript-eslint/no-explicit-any */
// Needed because the as supplied by emotion has incompatible types and were causing TS errors.
// Usage: <SomeStyledComp {...as('span')}></SomeStyledComp>
var as = function (tag) { return ({ as: tag }); };
exports.as = as;
var isValidNode = function (node) {
    return react_1.default.isValidElement(node) ||
        typeof node === 'string' ||
        typeof node === 'number';
};
exports.isValidNode = isValidNode;
var isClassComponent = function (component) {
    return typeof component === 'function' &&
        component.prototype &&
        !!component.prototype.isReactComponent;
};
exports.isClassComponent = isClassComponent;
var isFunctionComponent = function (Component) {
    return typeof Component === 'function' && react_1.default.isValidElement(Component());
};
exports.isFunctionComponent = isFunctionComponent;
var isStyledComponent = function (value) {
    return Boolean(value && typeof value === 'object' && value.$$typeof && value.displayName);
};
exports.isStyledComponent = isStyledComponent;
var isReactComponent = function (component) {
    return (0, exports.isClassComponent)(component) ||
        (0, exports.isFunctionComponent)(component) ||
        (0, exports.isStyledComponent)(component);
};
exports.isReactComponent = isReactComponent;
var getDisplayName = function (component) {
    if (component.props && component.props.mdxType) {
        return component.props.mdxType;
    }
    if (component.type) {
        return component.type.displayName;
    }
    if (component.displayName) {
        return component.displayName;
    }
    return '';
};
exports.getDisplayName = getDisplayName;
var hasMatchingDisplayNameWith = function (baseComponent, matchComponent) {
    if (baseComponent && matchComponent) {
        var baseComponentDisplayName = (0, exports.getDisplayName)(baseComponent);
        var matchComponentDisplayName = (0, exports.getDisplayName)(matchComponent);
        return baseComponentDisplayName === matchComponentDisplayName;
    }
    return false;
};
exports.hasMatchingDisplayNameWith = hasMatchingDisplayNameWith;
var renderIfReactComponent = function (node) {
    if ((0, exports.isReactComponent)(node)) {
        return react_1.default.createElement(node);
    }
    return null;
};
exports.renderIfReactComponent = renderIfReactComponent;
//# sourceMappingURL=component.js.map