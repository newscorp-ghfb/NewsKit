"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wsjTheme = exports.wsjOverrides = void 0;
var tslib_1 = require("tslib");
var colors_json_1 = tslib_1.__importDefault(require("./colors.json"));
var borders_json_1 = tslib_1.__importDefault(require("./borders.json"));
var fonts_json_1 = tslib_1.__importDefault(require("./fonts.json"));
var overlays_json_1 = tslib_1.__importDefault(require("./overlays.json"));
var shadows_json_1 = tslib_1.__importDefault(require("./shadows.json"));
var typography_presets_json_1 = tslib_1.__importDefault(require("./typography-presets.json"));
var theme_1 = require("../../../theme");
var __1 = require("../../..");
exports.wsjOverrides = {
    typographyPresets: typography_presets_json_1.default,
    fonts: fonts_json_1.default,
    overlays: overlays_json_1.default,
    colors: colors_json_1.default,
    shadows: shadows_json_1.default,
    borders: borders_json_1.default,
};
exports.wsjTheme = (0, theme_1.createTheme)({
    name: 'wsj-theme',
    baseTheme: __1.newskitLightTheme,
    overrides: exports.wsjOverrides,
});
//# sourceMappingURL=wsj-theme.js.map