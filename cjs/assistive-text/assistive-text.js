"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssistiveText = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var with_enhancers_1 = require("../with-enhancers/with-enhancers");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
var ThemelessAssistiveText = react_1.default.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, _b = _a.size, size = _b === void 0 ? 'medium' : _b, state = _a.state, children = _a.children, startEnhancer = _a.startEnhancer, endEnhancer = _a.endEnhancer, props = tslib_1.__rest(_a, ["overrides", "size", "state", "children", "startEnhancer", "endEnhancer"]);
    var enhancersOverrides = (0, logical_properties_1.omitLogicalPaddingPropsFromOverrides)(overrides);
    var textBlockOverrides = (0, logical_properties_1.omitLogicalMarginPropsFromOverrides)(overrides);
    return (react_1.default.createElement(with_enhancers_1.WithEnhancers, { componentDefaultsPath: "assistiveText.".concat(size), overrides: enhancersOverrides, state: state, startEnhancer: startEnhancer, endEnhancer: endEnhancer, marginPosition: "inside", alignSelf: "start" }, children && (react_1.default.createElement(styled_1.StyledAssistiveText, tslib_1.__assign({ ref: ref, "aria-disabled": state === 'disabled' ? true : undefined, size: size, state: state, role: state === 'invalid' ? 'alert' : undefined, "aria-live": state === 'invalid' ? 'polite' : undefined, overrides: textBlockOverrides }, props), children))));
});
exports.AssistiveText = (0, with_own_theme_1.withOwnTheme)(ThemelessAssistiveText)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=assistive-text.js.map