"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkbox = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("../icons");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var base_switch_1 = require("../base-switch");
var DefaultCheckboxIcon = function (_a) {
    var checked = _a.checked, overrides = _a.overrides;
    return checked ? (react_1.default.createElement(icons_1.IconFilledCheck, { overrides: tslib_1.__assign({ size: 'iconSize020' }, overrides) })) : null;
};
var ThemelessCheckbox = react_1.default.forwardRef(function (_a, inputRef) {
    var _b = _a.eventOriginator, eventOriginator = _b === void 0 ? 'checkbox' : _b, props = tslib_1.__rest(_a, ["eventOriginator"]);
    return (react_1.default.createElement(base_switch_1.BaseSwitch, tslib_1.__assign({ path: "checkbox", ref: inputRef, type: "checkbox", eventOriginator: eventOriginator }, props, { defaultSwitchSelectorComponent: DefaultCheckboxIcon })));
});
exports.Checkbox = (0, with_own_theme_1.withOwnTheme)(ThemelessCheckbox)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=checkbox.js.map