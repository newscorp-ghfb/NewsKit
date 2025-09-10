import { __assign } from "tslib";
import React from 'react';
import { compileTheme, ThemeProvider, useTheme, } from '../theme';
import { deepMerge } from './deep-merge';
import { useNewsKitContext } from '../newskit-provider/context';
var themeCache = new Map();
var resolveKey = function (theme, defaults, stylePresets) {
    var themeName = theme.name || 'no-theme-name';
    /* istanbul ignore next */
    var defaultsKey = Object.keys(defaults)[0] || 'no-defaults';
    var stylePresetKey = Object.keys(stylePresets || {})[0] || 'no-stylePresets';
    return "".concat(themeName, "-").concat(defaultsKey, "-").concat(stylePresetKey);
};
var mergeTheme = function (theme, defaults, stylePresets, useThemeCache) {
    var cacheKey = resolveKey(theme, defaults, stylePresets);
    if (useThemeCache && themeCache.has(cacheKey)) {
        return themeCache.get(cacheKey);
    }
    var componentTheme = compileTheme(__assign(__assign({}, theme), { name: cacheKey, compiled: false, componentDefaults: deepMerge(defaults, theme.componentDefaults), stylePresets: deepMerge(stylePresets, theme.stylePresets) }));
    themeCache.set(cacheKey, componentTheme);
    return componentTheme;
};
var objectIsEmpty = function (obj) { return Object.keys(obj).length === 0; };
export var withOwnTheme = function (BaseComponent) { return function (_a) {
    var defaults = _a.defaults, stylePresets = _a.stylePresets;
    var WrappedComponent = React.forwardRef(function (props, ref) {
        var theme = useTheme();
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && objectIsEmpty(theme)) {
            var errorMessage = "".concat(BaseComponent.displayName || 'This component', " can be used only inside NewsKitProvider.");
            throw new Error(errorMessage);
        }
        var themeOptions = useNewsKitContext().themeOptions;
        var componentTheme = function (globalTheme) {
            return mergeTheme(globalTheme, defaults, stylePresets, 
            /* istanbul ignore next */
            themeOptions === null || themeOptions === void 0 ? void 0 : themeOptions.useThemeCache);
        };
        return (React.createElement(ThemeProvider, __assign({ theme: componentTheme }, themeOptions),
            React.createElement(BaseComponent, __assign({}, props, { ref: ref }))));
    });
    var Component = WrappedComponent;
    Component.stylePresets = stylePresets;
    return Component;
}; };
//# sourceMappingURL=with-own-theme.js.map