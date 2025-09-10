"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IconButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var button_1 = require("../button");
var theme_1 = require("../theme");
var filter_object_1 = require("../utils/filter-object");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var ThemelessIconButton = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, props = tslib_1.__rest(_a, ["overrides"]);
    var theme = (0, theme_1.useTheme)();
    var _c = props.size, size = _c === void 0 ? 'small' : _c;
    var iconButtonSettings = tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.iconButton[size]), (0, filter_object_1.filterOutFalsyProperties)(overrides));
    return (react_1.default.createElement(button_1.Button, tslib_1.__assign({}, props, { size: size, ref: ref, overrides: iconButtonSettings })));
});
exports.IconButton = (0, with_own_theme_1.withOwnTheme)(ThemelessIconButton)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=icon-button.js.map