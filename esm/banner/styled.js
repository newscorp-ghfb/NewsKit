import { __makeTemplateObject } from "tslib";
import { styled, getStylePreset, getResponsiveSize, getResponsiveSpace, getTypographyPreset, } from '../utils/style';
import { Stack } from '../stack';
import { TextBlock } from '../text-block';
import { logicalProps } from '../utils/logical-properties';
export var StyledBannerContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", ";\n  ", "\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", ";\n  ", "\n  ", "\n"])), function (_a) {
    var layout = _a.layout;
    return getStylePreset("banner.".concat(layout), '');
}, function (_a) {
    var layout = _a.layout;
    return getResponsiveSize('minHeight', "banner.".concat(layout), '', 'minHeight');
}, function (_a) {
    var layout = _a.layout;
    return logicalProps("banner.".concat(layout));
});
export var StyledMaxWidthContainer = styled(Stack)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n  margin: 0 auto;\n"], ["\n  box-sizing: border-box;\n  ", "\n  margin: 0 auto;\n"])), function (_a) {
    var layout = _a.layout;
    return getResponsiveSize('maxWidth', "banner.".concat(layout), '', 'maxWidth');
});
export var StyledIconContentContainer = styled(Stack)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex: 1;\n  ", ";\n  ", ";\n"], ["\n  flex: 1;\n  ", ";\n  ", ";\n"])), function (_a) {
    var layout = _a.layout;
    return layout === 'vertical' && 'align-self: stretch;';
}, function (_a) {
    var layout = _a.layout;
    return getResponsiveSpace(layout === 'vertical' ? 'marginBottom' : 'marginRight', "banner.".concat(layout, ".content"), 'content', 'spaceInline');
});
export var StyledIconContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  ", ";\n"], ["\n  display: flex;\n  ", ";\n"])), function (_a) {
    var layout = _a.layout;
    return getResponsiveSpace('marginRight', "banner.".concat(layout, ".icon"), 'icon', 'spaceInline');
});
export var StyledTitleContainer = styled(TextBlock)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n\n  ", ";\n\n  ", "\n"], ["\n  ", ";\n\n  ", ";\n\n  ", "\n"])), function (_a) {
    var layout = _a.layout;
    return getTypographyPreset("banner.".concat(layout, ".content.title"), 'content.title', {
        withCrop: true,
    });
}, function (_a) {
    var layout = _a.layout;
    return getStylePreset("banner.".concat(layout, ".content.title"), 'content.title');
}, function (_a) {
    var layout = _a.layout;
    return getResponsiveSpace('marginBottom', "banner.".concat(layout, ".content.title"), 'content.title', 'spaceStack');
});
export var StyledContentContainer = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  flex: 1;\n  align-self: center;\n"], ["\n  flex: 1;\n  align-self: center;\n"])));
export var StyledMessageContainer = styled(TextBlock)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", ";\n\n  ", ";\n"], ["\n  ", ";\n\n  ", ";\n"])), function (_a) {
    var layout = _a.layout;
    return getTypographyPreset("banner.".concat(layout, ".content.message"), 'content.message', {
        withCrop: true,
    });
}, function (_a) {
    var layout = _a.layout;
    return getStylePreset("banner.".concat(layout, ".content.message"), 'content.message');
});
export var StyledActionsContainer = styled(Stack)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var layout = _a.layout;
    return layout === 'vertical' ? 'align-self: stretch;' : 'align-self: center;';
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map