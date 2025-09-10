"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var style_1 = require("../utils/style");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
var StyledDivider = style_1.styled.hr(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  border-width: 0px;\n  margin: 0;\n  ", "\n  ", "\n"], ["\n  ", ";\n  border-width: 0px;\n  margin: 0;\n  ", "\n  ", "\n"])), (0, style_1.getStylePreset)('divider.stylePreset', 'stylePreset'), (0, style_1.handleResponsiveProp)({ vertical: false }, function (_a, props) {
    var vertical = _a.vertical;
    var borderWidth = (0, style_1.getStylePreset)('divider')(props).borderWidth;
    return vertical
        ? {
            borderLeftWidth: borderWidth,
            display: 'inline-block',
            height: '100%',
        }
        : {
            borderTopWidth: borderWidth,
            width: '100%',
        };
}), (0, logical_properties_1.logicalProps)('divider'));
var ThemelessDivider = react_1.default.forwardRef(function (_a, ref) {
    var props = tslib_1.__rest(_a, []);
    return (react_1.default.createElement(StyledDivider, tslib_1.__assign({ ref: ref, "data-testid": "divider", "aria-hidden": true }, props)));
});
exports.Divider = (0, with_own_theme_1.withOwnTheme)(ThemelessDivider)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
var templateObject_1;
//# sourceMappingURL=divider.js.map