import { __makeTemplateObject } from "tslib";
import { GridLayout } from '../../../grid-layout';
import { getResponsiveSize, styled, getStylePreset, getResponsiveSpace, } from '../../../utils/style';
import { getTransitionPreset } from '../../../utils/style/transition-preset';
export var StyledVolumeSliderContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", ";\n"], ["\n  ", ";\n\n  ", ";\n\n  ", "\n\n  ", ";\n"])), function (_a) {
    var layout = _a.layout;
    return layout === 'horizontal' &&
        getTransitionPreset('audioPlayerVolumeControl', '', 'nk-vc');
}, function (_a) {
    var layout = _a.layout, visible = _a.visible;
    return layout === 'horizontal' && !visible ? 'overflow:hidden;' : '';
}, function (_a) {
    var open = _a.open;
    return getResponsiveSize(function (value) { return (!open ? { width: 0 } : { width: value }); }, "audioPlayerVolumeControl.slider.track", "slider.track", 'length');
}, function (_a) {
    var layout = _a.layout;
    return layout === 'horizontal-expanded' &&
        getResponsiveSpace('width', 'audioPlayerVolumeControl.slider.track.length', '', 'width');
});
export var StyledVolumeSliderPopupContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), getResponsiveSpace('height', 'audioPlayerVolumeControl.slider.track.length', '', 'height'));
export var StyledGridLayout = styled(GridLayout)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), getStylePreset("audioPlayerVolumeControl", ''), getResponsiveSpace('columnGap', "audioPlayerVolumeControl.spaceBetween", '', 'spaceBetween'));
export var VolumeControlContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map