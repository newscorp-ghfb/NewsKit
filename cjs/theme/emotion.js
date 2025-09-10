"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeProvider = exports.useTheme = exports.withTheme = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_2 = require("@emotion/react");
var compiler_1 = require("./compiler");
var css_variables_1 = require("./css-variables");
exports.withTheme = react_2.withTheme;
exports.useTheme = react_2.useTheme;
var ThemeProvider = function (_a) {
    var theme = _a.theme, _b = _a.exposeCssVariables, exposeCssVariables = _b === void 0 ? false : _b, children = _a.children, props = tslib_1.__rest(_a, ["theme", "exposeCssVariables", "children"]);
    var parentTheme = (0, exports.useTheme)();
    var localTheme = typeof theme === 'function' ? theme(parentTheme) : (0, compiler_1.compileTheme)(theme);
    var diff = exposeCssVariables
        ? (0, css_variables_1.themeDiff)(parentTheme, localTheme)
        : {};
    var doNotAddCssVariables = !exposeCssVariables || Object.keys(diff).length === 0;
    return (react_1.default.createElement(react_2.ThemeProvider, tslib_1.__assign({}, props, { theme: localTheme }), doNotAddCssVariables ? (children) : (react_1.default.createElement(css_variables_1.CssVariablesContainer, { diff: diff }, children))));
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=emotion.js.map