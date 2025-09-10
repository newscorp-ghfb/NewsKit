"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flag = exports.BaseFlag = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var theme_1 = require("../theme");
var get_token_1 = require("../utils/get-token");
var filter_object_1 = require("../utils/filter-object");
var text_block_1 = require("../text-block");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
exports.BaseFlag = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, overrides = _a.overrides, loading = _a.loading, disabled = _a.disabled, as = _a.as, props = tslib_1.__rest(_a, ["children", "overrides", "loading", "disabled", "as"]);
    var theme = (0, theme_1.useTheme)();
    return (react_1.default.createElement(styled_1.StyledGridLayout, tslib_1.__assign({}, props, { "$loading": loading, "$disabled": disabled, disabled: as !== 'a' && disabled, overrides: overrides, ref: ref, as: as, justifyContent: "center", alignContent: "center", alignItems: "center", justifyItems: "center", columnGap: (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, '', '', 'spaceInline'), columns: "repeat(".concat(react_1.default.Children.toArray(children).length, ", auto)"), inline: true }), react_1.default.Children.map(children, function (child) {
        return ['string', 'number'].includes(typeof child) ? (react_1.default.createElement(text_block_1.TextBlock, { as: "span", typographyPreset: overrides && overrides.typographyPreset }, child)) : (child);
    })));
});
var ThemelessFlag = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, props = tslib_1.__rest(_a, ["overrides"]);
    var theme = (0, theme_1.useTheme)();
    var _c = props.size, size = _c === void 0 ? 'medium' : _c;
    return (react_1.default.createElement(exports.BaseFlag, tslib_1.__assign({ "data-testid": "flag" }, props, { loading: false, ref: ref, overrides: tslib_1.__assign(tslib_1.__assign({}, theme.componentDefaults.flag[size]), (0, filter_object_1.filterOutFalsyProperties)(overrides)) })));
});
exports.Flag = (0, with_own_theme_1.withOwnTheme)(ThemelessFlag)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=flag.js.map