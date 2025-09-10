"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var logical_properties_1 = require("../utils/logical-properties");
var style_1 = require("../utils/style");
var transition_preset_1 = require("../utils/style/transition-preset");
var StyledDiv = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"])), function (_a) {
    var stylePreset = _a.stylePreset;
    return stylePreset && (0, style_1.getStylePresetFromTheme)(stylePreset);
}, function (_a) {
    var spaceInline = _a.spaceInline;
    return spaceInline && (0, style_1.getSpacingFromTheme)(spaceInline, undefined, 'marginRight');
}, function (_a) {
    var spaceStack = _a.spaceStack;
    return spaceStack && (0, style_1.getSpacingFromTheme)(spaceStack, undefined, 'marginBottom');
}, (0, logical_properties_1.logicalProps)(), function (_a) {
    var transitionPreset = _a.transitionPreset;
    return transitionPreset && (0, transition_preset_1.getTransitionPresetFromTheme)(transitionPreset);
});
exports.Block = react_1.default.forwardRef(function (_a, ref) {
    var props = tslib_1.__rest(_a, []);
    return react_1.default.createElement(StyledDiv, tslib_1.__assign({}, props, { ref: ref }));
});
var templateObject_1;
//# sourceMappingURL=block.js.map