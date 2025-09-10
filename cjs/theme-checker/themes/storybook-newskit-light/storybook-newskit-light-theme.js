"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storybookNewskitLightTheme = void 0;
var tslib_1 = require("tslib");
var colors_json_1 = tslib_1.__importDefault(require("./colors.json"));
var theme_1 = require("../../../theme");
var __1 = require("../../..");
exports.storybookNewskitLightTheme = (0, theme_1.createTheme)({
    name: 'storybook-newskit-light',
    baseTheme: __1.newskitLightTheme,
    overrides: { colors: colors_json_1.default },
});
//# sourceMappingURL=storybook-newskit-light-theme.js.map