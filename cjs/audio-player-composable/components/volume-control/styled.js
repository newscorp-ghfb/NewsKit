"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolumeControlContainer = exports.StyledGridLayout = exports.StyledVolumeSliderPopupContainer = exports.StyledVolumeSliderContainer = void 0;
var tslib_1 = require("tslib");
var grid_layout_1 = require("../../../grid-layout");
var style_1 = require("../../../utils/style");
var transition_preset_1 = require("../../../utils/style/transition-preset");
exports.StyledVolumeSliderContainer = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", ";\n"], ["\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", ";\n"])), function (_a) {
    var layout = _a.layout;
    return layout === 'horizontal' &&
        (0, transition_preset_1.getTransitionPreset)('audioPlayerVolumeControl', '', 'nk-vc');
}, function (_a) {
    var layout = _a.layout, visible = _a.visible;
    return layout === 'horizontal' && !visible ? 'overflow:hidden;' : '';
}, function (_a) {
    var open = _a.open;
    return (0, style_1.getResponsiveSize)(function (value) { return (!open ? { width: 0 } : { width: value }); }, "audioPlayerVolumeControl.slider.track", "slider.track", 'length');
}, function (_a) {
    var layout = _a.layout;
    return layout === 'horizontal-expanded' &&
        (0, style_1.getResponsiveSpace)('width', 'audioPlayerVolumeControl.slider.track.length', '', 'width');
});
exports.StyledVolumeSliderPopupContainer = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), (0, style_1.getResponsiveSpace)('height', 'audioPlayerVolumeControl.slider.track.length', '', 'height'));
exports.StyledGridLayout = (0, style_1.styled)(grid_layout_1.GridLayout)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), (0, style_1.getStylePreset)("audioPlayerVolumeControl", ''), (0, style_1.getResponsiveSpace)('columnGap', "audioPlayerVolumeControl.spaceBetween", '', 'spaceBetween'));
exports.VolumeControlContainer = style_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map