"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var get_token_1 = require("../utils/get-token");
var theme_1 = require("../theme");
var text_block_1 = require("../text-block");
var with_own_theme_1 = require("../utils/with-own-theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var logical_properties_1 = require("../utils/logical-properties");
var grid_layout_1 = require("../grid-layout");
var getComponentProps = function (defaultsPath, overridesPath, themeProps) {
    var presets = ['stylePreset', 'typographyPreset'];
    return presets.reduce(function (props, presetKey) {
        // eslint-disable-next-line no-param-reassign
        props[presetKey] = (0, get_token_1.getToken)(themeProps, defaultsPath, overridesPath, presetKey);
        return props;
    }, { stylePreset: '', typographyPreset: '' });
};
var ThemelessCaption = react_1.default.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, children = _a.children, creditText = _a.creditText, rest = tslib_1.__rest(_a, ["overrides", "children", "creditText"]);
    var theme = (0, theme_1.useTheme)();
    var themeProps = { theme: theme, overrides: overrides };
    var captionGap = (0, get_token_1.getToken)(themeProps, 'caption', '', 'spaceStack');
    var captionProps = getComponentProps('caption', '', themeProps);
    var creditProps = getComponentProps('caption.credit', 'credit', themeProps);
    var logicalProps = (0, logical_properties_1.extractLogicalPropsFromOverrides)(overrides);
    return (react_1.default.createElement(grid_layout_1.GridLayout, tslib_1.__assign({ rowGap: captionGap, ref: ref }, logicalProps, rest),
        react_1.default.createElement(text_block_1.TextBlock, tslib_1.__assign({}, captionProps), children),
        creditText && react_1.default.createElement(text_block_1.TextBlock, tslib_1.__assign({}, creditProps), creditText)));
});
exports.Caption = (0, with_own_theme_1.withOwnTheme)(ThemelessCaption)({
    defaults: defaults_1.default,
});
ThemelessCaption.displayName = 'Caption';
//# sourceMappingURL=caption.js.map