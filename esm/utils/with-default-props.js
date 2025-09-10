import { __assign, __rest } from "tslib";
import React from 'react';
import { deepMerge } from './deep-merge';
import { getToken } from './get-token';
import { useTheme } from '../theme';
export var withDefaultProps = function (Component, defaultProps, defaultPresetsPath, 
// Passing a CSS property with "__delete" as a value, or any other invalid token, will not generate CSS for it.
// Can be useful for removing other default overrides injected in the component.
enhanceOverrides) {
    var WrappedComponent = React.memo(React.forwardRef(function (props, ref) {
        var dProps = typeof defaultProps === 'function'
            ? defaultProps(props)
            : defaultProps || {};
        var theme = useTheme();
        var overrides = getToken({ theme: theme }, defaultPresetsPath);
        var _a = props, children = _a.children, propsWithoutChildren = __rest(_a, ["children"]);
        var enhancedOverrides = deepMerge(overrides, enhanceOverrides);
        return (React.createElement(Component, __assign({ ref: ref }, deepMerge({}, {
            overrides: Object.keys(enhancedOverrides).length
                ? enhancedOverrides
                : undefined,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, dProps, propsWithoutChildren)), children));
    }));
    WrappedComponent.displayName = "withDefaultProps(".concat(Component.displayName, ")");
    return WrappedComponent;
};
//# sourceMappingURL=with-default-props.js.map