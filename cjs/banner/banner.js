"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var visibility_1 = require("../grid/visibility");
var banner_internal_1 = require("./banner-internal");
var theme_1 = require("../theme");
var utils_1 = require("./utils");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var ThemelessBanner = react_1.default.forwardRef(function (_a, ref) {
    var _b;
    var _c = _a.layout, layout = _c === void 0 ? {
        xs: 'vertical',
        md: 'horizontal',
    } : _c, restProps = tslib_1.__rest(_a, ["layout"]);
    var layoutHasMQ = false;
    var theme = (0, theme_1.useTheme)();
    var horizontalBreakpoints = {};
    var verticalBreakpoints = {};
    if (typeof layout === 'object') {
        layoutHasMQ = true;
        (_b = (0, utils_1.getVisibleBreakpointsForLayout)(layout, theme), verticalBreakpoints = _b.verticalBreakpoints, horizontalBreakpoints = _b.horizontalBreakpoints);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null, layoutHasMQ ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(visibility_1.Visible, tslib_1.__assign({}, verticalBreakpoints),
            react_1.default.createElement(banner_internal_1.BannerInternal, tslib_1.__assign({ ref: ref }, restProps, { layout: "vertical" }))),
        react_1.default.createElement(visibility_1.Visible, tslib_1.__assign({}, horizontalBreakpoints),
            react_1.default.createElement(banner_internal_1.BannerInternal, tslib_1.__assign({ ref: ref }, restProps, { layout: "horizontal" }))))) : (react_1.default.createElement(banner_internal_1.BannerInternal, tslib_1.__assign({ ref: ref }, restProps, { layout: layout })))));
});
exports.Banner = (0, with_own_theme_1.withOwnTheme)(ThemelessBanner)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=banner.js.map