"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledPointer = exports.StyledPanel = exports.StyledFloatingElement = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
var text_block_1 = require("../text-block");
exports.StyledFloatingElement = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", ";\n"])), function (_a) {
    var path = _a.path;
    return (0, style_1.getStylePreset)("".concat(path), '');
}, function (_a) {
    var path = _a.path;
    return (0, style_1.getResponsiveSpace)('zIndex', path, '', 'zIndex');
}, function (_a) {
    var path = _a.path;
    return (0, style_1.getResponsiveSize)('maxWidth', path, '', 'maxWidth');
}, function (_a) {
    var path = _a.path;
    return (0, style_1.getResponsiveSize)('minWidth', path, '', 'minWidth');
}, function (_a) {
    var $x = _a.$x, $y = _a.$y, strategy = _a.strategy;
    return ({
        position: strategy,
        left: $x != null ? "".concat($x, "px") : '',
        top: $y != null ? "".concat($y, "px") : '',
    });
}, function (_a) {
    var path = _a.path, baseTransitionClassname = _a.baseTransitionClassname;
    return (0, style_1.getTransitionPreset)("".concat(path), '', baseTransitionClassname);
});
exports.StyledPanel = (0, style_1.styled)(text_block_1.TextBlock)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n  ", "\n  overflow: hidden;\n"], ["\n  ", ";\n  ", ";\n  ", "\n  overflow: hidden;\n"])), function (_a) {
    var path = _a.path;
    return (0, style_1.getStylePreset)("".concat(path, ".panel"), 'panel');
}, function (_a) {
    var path = _a.path;
    return (0, style_1.getTypographyPreset)("".concat(path, ".panel"), 'panel');
}, function (_a) {
    var path = _a.path;
    return (0, logical_properties_1.logicalPaddingProps)("".concat(path, ".panel"), 'panel');
});
exports.StyledPointer = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  z-index: -1; // This makes sure that the pointer doesn't sit over panel contents.\n  position: absolute;\n  transform: rotate(45deg);\n  box-sizing: border-box;\n  ", ";\n  ", "\n"], ["\n  z-index: -1; // This makes sure that the pointer doesn't sit over panel contents.\n  position: absolute;\n  transform: rotate(45deg);\n  box-sizing: border-box;\n  ", ";\n  ", "\n"])), function (_a) {
    var path = _a.path;
    return (0, style_1.getStylePreset)("".concat(path, ".pointer"), 'pointer');
}, function (_a) {
    var placement = _a.placement, $x = _a.$x, $y = _a.$y, path = _a.path;
    return (0, style_1.getResponsiveSize)(function (size) {
        var _a;
        var staticSides = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
        };
        var staticSide = staticSides[placement.split('-')[0]] || 'bottom';
        return _a = {
                width: size,
                height: size,
                left: $x != null ? "".concat($x, "px") : '',
                top: $y != null ? "".concat($y, "px") : '',
                right: '',
                bottom: ''
            },
            _a[staticSide] = "calc(-".concat(size, " / 2)"),
            _a;
    }, "".concat(path, ".pointer"), 'pointer', 'size');
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map