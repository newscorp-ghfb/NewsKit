"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var ThemelessLabel = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, children = _a.children, state = _a.state, props = tslib_1.__rest(_a, ["size", "children", "state"]);
    return (react_1.default.createElement(styled_1.StyledLabel, tslib_1.__assign({ ref: ref, "aria-disabled": state === 'disabled' ? true : undefined, size: size, state: state }, props), children));
});
exports.Label = (0, with_own_theme_1.withOwnTheme)(ThemelessLabel)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=label.js.map