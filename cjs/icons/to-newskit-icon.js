"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewsKitIcon = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var theme_1 = require("../theme");
var style_1 = require("../utils/style");
var transition_preset_1 = require("../utils/style/transition-preset");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var renderIconStylePreset = function (overridesOnly) { return function (props) {
    if (!overridesOnly || (props.overrides && props.overrides.stylePreset)) {
        var stylePreset = (0, style_1.getStylePreset)('icons', '', {
            isSvg: true,
        })(props);
        var transitionPreset = (0, transition_preset_1.getTransitionPresetFromTheme)('iconColorChange')(props);
        return tslib_1.__assign(tslib_1.__assign({}, stylePreset), transitionPreset);
    }
    return {};
}; };
var StyledIcon = style_1.styled.svg(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  // If not overridden, render SP CSS here, this allows parent SP to override Icon default.\n  ", "\n\n  vertical-align: unset;\n  display: inline-block;\n\n  // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity\n  && {\n    //we don't want the icon to have a default size hence using non defaulted functions\n    ", "\n    ", "\n      \n      // If overridden, render SP CSS here instead - this ensures we override fill color from parent SP.\n      ", "\n  }\n\n  ", "\n"], ["\n  // If not overridden, render SP CSS here, this allows parent SP to override Icon default.\n  ", "\n\n  vertical-align: unset;\n  display: inline-block;\n\n  // https://css-tricks.com/the-sass-ampersand/#doubling-up-specificity\n  && {\n    //we don't want the icon to have a default size hence using non defaulted functions\n    ", "\n    ", "\n      \n      // If overridden, render SP CSS here instead - this ensures we override fill color from parent SP.\n      ", "\n  }\n\n  ", "\n"])), renderIconStylePreset(false), function (props) {
    var _a;
    return ((_a = props.overrides) === null || _a === void 0 ? void 0 : _a.size) &&
        (0, style_1.getSizingCssFromTheme)('width', props.overrides.size);
}, function (props) {
    var _a;
    return ((_a = props.overrides) === null || _a === void 0 ? void 0 : _a.size) &&
        (0, style_1.getSizingCssFromTheme)('height', props.overrides.size);
}, renderIconStylePreset(true), (0, logical_properties_1.logicalProps)());
var toNewsKitIcon = function (PassedIcon) {
    return (0, with_own_theme_1.withOwnTheme)((0, theme_1.withTheme)(react_1.default.memo(function (props) {
        var emotionIconName = PassedIcon.displayName;
        if (props.theme.icons["".concat(emotionIconName)]) {
            var Icon = props.theme.icons["".concat(emotionIconName)];
            return react_1.default.createElement(Icon, tslib_1.__assign({ title: props.title }, props));
        }
        return react_1.default.createElement(StyledIcon, tslib_1.__assign({ title: props.title }, props, { as: PassedIcon }));
    })))({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
};
exports.toNewsKitIcon = toNewsKitIcon;
var templateObject_1;
//# sourceMappingURL=to-newskit-icon.js.map