"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_is_1 = require("react-is");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var base_switch_1 = require("../base-switch");
var styled_1 = require("./styled");
var iconAsComponent = function (OverridesValue) {
    if (OverridesValue && (0, react_is_1.isValidElementType)(OverridesValue)) {
        return OverridesValue;
    }
    return null;
};
var SwitchTrackContents = function (props) {
    var _a = props, size = _a.size, checked = _a.checked, overrides = _a.parentOverrides, isFocused = _a.isFocused, isHovered = _a.isHovered, state = _a.state;
    var OnIcon = iconAsComponent(overrides.onIcon);
    var OffIcon = iconAsComponent(overrides.offIcon);
    var ThumbIcon = iconAsComponent(overrides.thumbIcon);
    return (react_1.default.createElement(styled_1.StyledSwitchContainer, { size: size, overrides: overrides },
        react_1.default.createElement(styled_1.StyledTrackIcon, { state: state, size: size, overrides: overrides, justifyContent: "flex-start" }, OnIcon && react_1.default.createElement(OnIcon, null)),
        react_1.default.createElement(styled_1.StyledTrackIcon, { state: state, size: size, overrides: overrides, justifyContent: "flex-end" }, OffIcon && react_1.default.createElement(OffIcon, null)),
        react_1.default.createElement(styled_1.StyledThumb, { size: size, checked: checked, isFocused: isFocused, isHovered: isHovered, overrides: overrides }, !!ThumbIcon && react_1.default.createElement(ThumbIcon, { checked: checked }))));
};
var ThemelessSwitch = react_1.default.forwardRef(function (_a, inputRef) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'switch' : _c, rest = tslib_1.__rest(_a, ["overrides", "eventOriginator"]);
    return (react_1.default.createElement(base_switch_1.BaseSwitch, tslib_1.__assign({ path: "switch", ref: inputRef, type: "checkbox", role: "switch", overrides: overrides, eventOriginator: eventOriginator }, rest, { defaultSwitchSelectorComponent: SwitchTrackContents })));
});
exports.Switch = (0, with_own_theme_1.withOwnTheme)(ThemelessSwitch)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=switch.js.map