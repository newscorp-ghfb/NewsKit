import { __assign, __rest } from "tslib";
import React from 'react';
import { withTheme as _withTheme, useTheme as _useTheme, ThemeProvider as EmotionThemeProvider, } from '@emotion/react';
import { compileTheme } from './compiler';
import { themeDiff, CssVariablesContainer } from './css-variables';
export var withTheme = _withTheme;
export var useTheme = _useTheme;
export var ThemeProvider = function (_a) {
    var theme = _a.theme, _b = _a.exposeCssVariables, exposeCssVariables = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["theme", "exposeCssVariables", "children"]);
    var parentTheme = useTheme();
    var localTheme = typeof theme === 'function' ? theme(parentTheme) : compileTheme(theme);
    var diff = exposeCssVariables
        ? themeDiff(parentTheme, localTheme)
        : {};
    var doNotAddCssVariables = !exposeCssVariables || Object.keys(diff).length === 0;
    return (React.createElement(EmotionThemeProvider, __assign({}, props, { theme: localTheme }), doNotAddCssVariables ? (children) : (React.createElement(CssVariablesContainer, { diff: diff }, children))));
};
//# sourceMappingURL=emotion.js.map