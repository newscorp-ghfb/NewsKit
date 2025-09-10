"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storybookNewskitDarkTheme = void 0;
var tslib_1 = require("tslib");
var colors_json_1 = tslib_1.__importDefault(require("./colors.json"));
var theme_1 = require("../../../theme");
var __1 = require("../../..");
exports.storybookNewskitDarkTheme = (0, theme_1.createTheme)({
    name: 'storybook-newskit-dark',
    baseTheme: __1.newskitDarkTheme,
    overrides: { colors: colors_json_1.default },
});
//# sourceMappingURL=storybook-newskit-dark-theme.js.map