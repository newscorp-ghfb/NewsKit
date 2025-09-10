import { __makeTemplateObject, __rest } from "tslib";
import { css, styled, getStylePreset, getResponsiveSize } from '../utils/style';
import { BaseDialogView } from '../dialog';
import { getTransitionPreset } from '../utils/style/transition-preset';
import { logicalProps } from '../utils/logical-properties';
var placementOptions = {
    left: {
        top: 0,
        left: 0,
    },
    right: {
        top: 0,
        right: 0,
    },
    top: {
        top: 0,
        left: 0,
    },
    bottom: {
        bottom: 0,
        left: 0,
    },
};
var getPlacementSize = function (_a) {
    var placement = _a.placement, path = _a.path, props = __rest(_a, ["placement", "path"]);
    var sizeX = placement === 'left' || placement === 'right' ? 'width' : 'height';
    var sizeY = placement === 'left' || placement === 'right' ? 'height' : 'width';
    var sizeCap = sizeX.charAt(0).toUpperCase() + sizeX.slice(1);
    var drawerPath = "".concat(path, ".panel");
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    ", "\n    ", "\n    ", ": 100%;\n  "], ["\n    ", "\n    ", "\n    ", "\n    ", ": 100%;\n  "])), getResponsiveSize(sizeX, drawerPath, 'panel', 'size')(props), getResponsiveSize("max".concat(sizeCap), drawerPath, 'panel', 'maxSize')(props), getResponsiveSize("min".concat(sizeCap), drawerPath, 'panel', 'minSize')(props), sizeY);
};
export var StyledDrawer = styled(BaseDialogView)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  ", "\n\n  ", ";\n\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", "\n\n  ", ";\n\n  ", ";\n  ", ";\n"])), function (_a) {
    var placement = _a.placement;
    return placement
        ? placementOptions[placement]
        : {};
}, function (props) { return getPlacementSize(props); }, function (_a) {
    var path = _a.path;
    return getStylePreset("".concat(path, ".panel"), 'panel');
}, function (_a) {
    var placement = _a.placement, path = _a.path, props = __rest(_a, ["placement", "path"]);
    return placement && css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      ", ";\n    "], ["\n      ", ";\n    "])), getTransitionPreset("".concat(path, ".panel.").concat(placement), 'panel', 'nk-drawer')(props));
}, function (_a) {
    var path = _a.path;
    return logicalProps("".concat(path, ".panel"), 'panel');
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map