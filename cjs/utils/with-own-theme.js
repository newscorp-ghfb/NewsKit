"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withOwnTheme = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../theme");
var deep_merge_1 = require("./deep-merge");
var context_1 = require("../newskit-provider/context");
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
    var componentTheme = (0, theme_1.compileTheme)(tslib_1.__assign(tslib_1.__assign({}, theme), { name: cacheKey, compiled: false, componentDefaults: (0, deep_merge_1.deepMerge)(defaults, theme.componentDefaults), stylePresets: (0, deep_merge_1.deepMerge)(stylePresets, theme.stylePresets) }));
    themeCache.set(cacheKey, componentTheme);
    return componentTheme;
};
var objectIsEmpty = function (obj) { return Object.keys(obj).length === 0; };
var withOwnTheme = function (BaseComponent) { return function (_a) {
    var defaults = _a.defaults, stylePresets = _a.stylePresets;
    var WrappedComponent = react_1.default.forwardRef(function (props, ref) {
        var theme = (0, theme_1.useTheme)();
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && objectIsEmpty(theme)) {
            var errorMessage = "".concat(BaseComponent.displayName || 'This component', " can be used only inside NewsKitProvider.");
            throw new Error(errorMessage);
        }
        var themeOptions = (0, context_1.useNewsKitContext)().themeOptions;
        var componentTheme = function (globalTheme) {
            return mergeTheme(globalTheme, defaults, stylePresets, 
            /* istanbul ignore next */
            themeOptions === null || themeOptions === void 0 ? void 0 : themeOptions.useThemeCache);
        };
        return (react_1.default.createElement(theme_1.ThemeProvider, tslib_1.__assign({ theme: componentTheme }, themeOptions),
            react_1.default.createElement(BaseComponent, tslib_1.__assign({}, props, { ref: ref }))));
    });
    var Component = WrappedComponent;
    Component.stylePresets = stylePresets;
    return Component;
}; };
exports.withOwnTheme = withOwnTheme;
//# sourceMappingURL=with-own-theme.js.map