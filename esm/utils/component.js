import React from 'react';
/* eslint-disable @typescript-eslint/no-explicit-any */
// Needed because the as supplied by emotion has incompatible types and were causing TS errors.
// Usage: <SomeStyledComp {...as('span')}></SomeStyledComp>
export var as = function (tag) { return ({ as: tag }); };
export var isValidNode = function (node) {
    return React.isValidElement(node) ||
        typeof node === 'string' ||
        typeof node === 'number';
};
export var isClassComponent = function (component) {
    return typeof component === 'function' &&
        component.prototype &&
        !!component.prototype.isReactComponent;
};
export var isFunctionComponent = function (Component) {
    return typeof Component === 'function' && React.isValidElement(Component());
};
export var isStyledComponent = function (value) {
    return Boolean(value && typeof value === 'object' && value.$$typeof && value.displayName);
};
export var isReactComponent = function (component) {
    return isClassComponent(component) ||
        isFunctionComponent(component) ||
        isStyledComponent(component);
};
export var getDisplayName = function (component) {
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
export var hasMatchingDisplayNameWith = function (baseComponent, matchComponent) {
    if (baseComponent && matchComponent) {
        var baseComponentDisplayName = getDisplayName(baseComponent);
        var matchComponentDisplayName = getDisplayName(matchComponent);
        return baseComponentDisplayName === matchComponentDisplayName;
    }
    return false;
};
export var renderIfReactComponent = function (node) {
    if (isReactComponent(node)) {
        return React.createElement(node);
    }
    return null;
};
//# sourceMappingURL=component.js.map