"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fieldset = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var context_1 = require("../form/context");
var overrides_1 = require("../utils/overrides");
var legend_1 = require("./legend");
var styled_1 = require("./styled");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var ThemelessFieldset = React.forwardRef(function (_a, ref) {
    var legend = _a.legend, _b = _a.size, size = _b === void 0 ? 'medium' : _b, children = _a.children, overrides = _a.overrides, props = tslib_1.__rest(_a, ["legend", "size", "children", "overrides"]);
    var value = React.useContext(context_1.FormInputContext);
    var formInputContextWithSize = tslib_1.__assign(tslib_1.__assign({}, value), { size: size });
    var _c = (0, overrides_1.getComponentOverrides)(overrides === null || overrides === void 0 ? void 0 : overrides.legend, legend_1.Legend, {
        size: size,
    }), Legend = _c[0], legendProps = _c[1];
    return (React.createElement(styled_1.StyledFieldset, tslib_1.__assign({ overrides: overrides }, props, { ref: ref }),
        legend && (React.createElement(Legend, tslib_1.__assign({}, legendProps), typeof legend === 'function' ? legend() : legend)),
        React.createElement(context_1.FormInputContext.Provider, { value: formInputContextWithSize }, children)));
});
exports.Fieldset = (0, with_own_theme_1.withOwnTheme)(ThemelessFieldset)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=fieldset.js.map