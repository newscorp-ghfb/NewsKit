"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withDefaultProps = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var deep_merge_1 = require("./deep-merge");
var get_token_1 = require("./get-token");
var theme_1 = require("../theme");
var withDefaultProps = function (Component, defaultProps, defaultPresetsPath, 
// Passing a CSS property with "__delete" as a value, or any other invalid token, will not generate CSS for it.
// Can be useful for removing other default overrides injected in the component.
enhanceOverrides) {
    var WrappedComponent = react_1.default.memo(react_1.default.forwardRef(function (props, ref) {
        var dProps = typeof defaultProps === 'function'
            ? defaultProps(props)
            : defaultProps || {};
        var theme = (0, theme_1.useTheme)();
        var overrides = (0, get_token_1.getToken)({ theme: theme }, defaultPresetsPath);
        var _a = props, children = _a.children, propsWithoutChildren = tslib_1.__rest(_a, ["children"]);
        var enhancedOverrides = (0, deep_merge_1.deepMerge)(overrides, enhanceOverrides);
        return (react_1.default.createElement(Component, tslib_1.__assign({ ref: ref }, (0, deep_merge_1.deepMerge)({}, {
            overrides: Object.keys(enhancedOverrides).length
                ? enhancedOverrides
                : undefined,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }, dProps, propsWithoutChildren)), children));
    }));
    WrappedComponent.displayName = "withDefaultProps(".concat(Component.displayName, ")");
    return WrappedComponent;
};
exports.withDefaultProps = withDefaultProps;
//# sourceMappingURL=with-default-props.js.map