"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleBar = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var headline_1 = require("../headline");
var visibility_1 = require("../grid/visibility");
var theme_1 = require("../theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var styled_1 = require("./styled");
var ThemelessTitleBar = react_1.default.forwardRef(function (props, ref) {
    var children = props.children, _a = props.hideActionItemOn, hideActionItemOn = _a === void 0 ? { xs: true } : _a, _b = props.headingAs, headingAs = _b === void 0 ? 'h3' : _b, ActionItem = props.actionItem, _c = props.overrides, overrides = _c === void 0 ? {} : _c, rest = tslib_1.__rest(props, ["children", "hideActionItemOn", "headingAs", "actionItem", "overrides"]);
    var theme = (0, theme_1.useTheme)();
    var hasActions = !!ActionItem;
    var addTitleBarHeadingOverrides = function () {
        var headingOverrides = {};
        if (!overrides.heading) {
            return headingOverrides;
        }
        if (overrides.heading.typographyPreset) {
            headingOverrides.typographyPreset = overrides.heading.typographyPreset;
        }
        if (overrides.heading.stylePreset) {
            headingOverrides.heading = { stylePreset: overrides.heading.stylePreset };
        }
        return headingOverrides;
    };
    var headlineOverrides = tslib_1.__assign({ typographyPreset: tslib_1.__assign({}, theme.componentDefaults.titleBar.heading.typographyPreset), heading: {
            stylePreset: theme.componentDefaults.titleBar.heading.stylePreset,
        } }, addTitleBarHeadingOverrides());
    var blockOverrides = { spaceInline: hasActions ? 'space040' : '' };
    return (react_1.default.createElement(styled_1.StyledStackContainer, tslib_1.__assign({ overrides: overrides, flow: "horizontal-center", stackDistribution: "space-between", ref: ref }, rest),
        react_1.default.createElement(styled_1.StyledBlock, tslib_1.__assign({}, blockOverrides),
            react_1.default.createElement(headline_1.Headline, { headingAs: headingAs, overrides: headlineOverrides }, children)),
        ActionItem && (react_1.default.createElement(visibility_1.Hidden, tslib_1.__assign({}, hideActionItemOn),
            react_1.default.createElement(ActionItem, null)))));
});
exports.TitleBar = (0, with_own_theme_1.withOwnTheme)(ThemelessTitleBar)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=title-bar.js.map