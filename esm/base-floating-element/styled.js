import { __makeTemplateObject } from "tslib";
import { getResponsiveSize, getResponsiveSpace, getStylePreset, getTransitionPreset, getTypographyPreset, styled, } from '../utils/style';
import { logicalPaddingProps } from '../utils/logical-properties';
import { TextBlock } from '../text-block';
export var StyledFloatingElement = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", ";\n"])), function (_a) {
    var path = _a.path;
    return getStylePreset("".concat(path), '');
}, function (_a) {
    var path = _a.path;
    return getResponsiveSpace('zIndex', path, '', 'zIndex');
}, function (_a) {
    var path = _a.path;
    return getResponsiveSize('maxWidth', path, '', 'maxWidth');
}, function (_a) {
    var path = _a.path;
    return getResponsiveSize('minWidth', path, '', 'minWidth');
}, function (_a) {
    var $x = _a.$x, $y = _a.$y, strategy = _a.strategy;
    return ({
        position: strategy,
        left: $x != null ? "".concat($x, "px") : '',
        top: $y != null ? "".concat($y, "px") : '',
    });
}, function (_a) {
    var path = _a.path, baseTransitionClassname = _a.baseTransitionClassname;
    return getTransitionPreset("".concat(path), '', baseTransitionClassname);
});
export var StyledPanel = styled(TextBlock)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", "\n  overflow: hidden;\n"], ["\n  ", ";\n  ", ";\n  ", "\n  overflow: hidden;\n"])), function (_a) {
    var path = _a.path;
    return getStylePreset("".concat(path, ".panel"), 'panel');
}, function (_a) {
    var path = _a.path;
    return getTypographyPreset("".concat(path, ".panel"), 'panel');
}, function (_a) {
    var path = _a.path;
    return logicalPaddingProps("".concat(path, ".panel"), 'panel');
});
export var StyledPointer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  z-index: -1; // This makes sure that the pointer doesn't sit over panel contents.\n  position: absolute;\n  transform: rotate(45deg);\n  box-sizing: border-box;\n  ", ";\n  ", "\n"], ["\n  z-index: -1; // This makes sure that the pointer doesn't sit over panel contents.\n  position: absolute;\n  transform: rotate(45deg);\n  box-sizing: border-box;\n  ", ";\n  ", "\n"])), function (_a) {
    var path = _a.path;
    return getStylePreset("".concat(path, ".pointer"), 'pointer');
}, function (_a) {
    var placement = _a.placement, $x = _a.$x, $y = _a.$y, path = _a.path;
    return getResponsiveSize(function (size) {
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