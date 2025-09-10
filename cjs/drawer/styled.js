"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledDrawer = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var dialog_1 = require("../dialog");
var transition_preset_1 = require("../utils/style/transition-preset");
var logical_properties_1 = require("../utils/logical-properties");
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
    var placement = _a.placement, path = _a.path, props = tslib_1.__rest(_a, ["placement", "path"]);
    var sizeX = placement === 'left' || placement === 'right' ? 'width' : 'height';
    var sizeY = placement === 'left' || placement === 'right' ? 'height' : 'width';
    var sizeCap = sizeX.charAt(0).toUpperCase() + sizeX.slice(1);
    var drawerPath = "".concat(path, ".panel");
    return (0, style_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n    ", "\n    ", "\n    ", "\n    ", ": 100%;\n  "], ["\n    ", "\n    ", "\n    ", "\n    ", ": 100%;\n  "])), (0, style_1.getResponsiveSize)(sizeX, drawerPath, 'panel', 'size')(props), (0, style_1.getResponsiveSize)("max".concat(sizeCap), drawerPath, 'panel', 'maxSize')(props), (0, style_1.getResponsiveSize)("min".concat(sizeCap), drawerPath, 'panel', 'minSize')(props), sizeY);
};
exports.StyledDrawer = (0, style_1.styled)(dialog_1.BaseDialogView)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", "\n\n  ", ";\n\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", "\n\n  ", ";\n\n  ", ";\n  ", ";\n"])), function (_a) {
    var placement = _a.placement;
    return placement
        ? placementOptions[placement]
        : {};
}, function (props) { return getPlacementSize(props); }, function (_a) {
    var path = _a.path;
    return (0, style_1.getStylePreset)("".concat(path, ".panel"), 'panel');
}, function (_a) {
    var placement = _a.placement, path = _a.path, props = tslib_1.__rest(_a, ["placement", "path"]);
    return placement && (0, style_1.css)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n      ", ";\n    "], ["\n      ", ";\n    "])), (0, transition_preset_1.getTransitionPreset)("".concat(path, ".panel.").concat(placement), 'panel', 'nk-drawer')(props));
}, function (_a) {
    var path = _a.path;
    return (0, logical_properties_1.logicalProps)("".concat(path, ".panel"), 'panel');
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map