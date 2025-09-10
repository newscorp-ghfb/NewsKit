"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledActionsContainer = exports.StyledMessageContainer = exports.StyledContentContainer = exports.StyledTitleContainer = exports.StyledIconContainer = exports.StyledIconContentContainer = exports.StyledMaxWidthContainer = exports.StyledBannerContainer = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var stack_1 = require("../stack");
var text_block_1 = require("../text-block");
var logical_properties_1 = require("../utils/logical-properties");
exports.StyledBannerContainer = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  ", ";\n  ", "\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", ";\n  ", "\n  ", "\n"])), function (_a) {
    var layout = _a.layout;
    return (0, style_1.getStylePreset)("banner.".concat(layout), '');
}, function (_a) {
    var layout = _a.layout;
    return (0, style_1.getResponsiveSize)('minHeight', "banner.".concat(layout), '', 'minHeight');
}, function (_a) {
    var layout = _a.layout;
    return (0, logical_properties_1.logicalProps)("banner.".concat(layout));
});
exports.StyledMaxWidthContainer = (0, style_1.styled)(stack_1.Stack)(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n  margin: 0 auto;\n"], ["\n  box-sizing: border-box;\n  ", "\n  margin: 0 auto;\n"])), function (_a) {
    var layout = _a.layout;
    return (0, style_1.getResponsiveSize)('maxWidth', "banner.".concat(layout), '', 'maxWidth');
});
exports.StyledIconContentContainer = (0, style_1.styled)(stack_1.Stack)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  flex: 1;\n  ", ";\n  ", ";\n"], ["\n  flex: 1;\n  ", ";\n  ", ";\n"])), function (_a) {
    var layout = _a.layout;
    return layout === 'vertical' && 'align-self: stretch;';
}, function (_a) {
    var layout = _a.layout;
    return (0, style_1.getResponsiveSpace)(layout === 'vertical' ? 'marginBottom' : 'marginRight', "banner.".concat(layout, ".content"), 'content', 'spaceInline');
});
exports.StyledIconContainer = style_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  ", ";\n"], ["\n  display: flex;\n  ", ";\n"])), function (_a) {
    var layout = _a.layout;
    return (0, style_1.getResponsiveSpace)('marginRight', "banner.".concat(layout, ".icon"), 'icon', 'spaceInline');
});
exports.StyledTitleContainer = (0, style_1.styled)(text_block_1.TextBlock)(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  ", ";\n\n  ", ";\n\n  ", "\n"], ["\n  ", ";\n\n  ", ";\n\n  ", "\n"])), function (_a) {
    var layout = _a.layout;
    return (0, style_1.getTypographyPreset)("banner.".concat(layout, ".content.title"), 'content.title', {
        withCrop: true,
    });
}, function (_a) {
    var layout = _a.layout;
    return (0, style_1.getStylePreset)("banner.".concat(layout, ".content.title"), 'content.title');
}, function (_a) {
    var layout = _a.layout;
    return (0, style_1.getResponsiveSpace)('marginBottom', "banner.".concat(layout, ".content.title"), 'content.title', 'spaceStack');
});
exports.StyledContentContainer = style_1.styled.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  flex: 1;\n  align-self: center;\n"], ["\n  flex: 1;\n  align-self: center;\n"])));
exports.StyledMessageContainer = (0, style_1.styled)(text_block_1.TextBlock)(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  ", ";\n\n  ", ";\n"], ["\n  ", ";\n\n  ", ";\n"])), function (_a) {
    var layout = _a.layout;
    return (0, style_1.getTypographyPreset)("banner.".concat(layout, ".content.message"), 'content.message', {
        withCrop: true,
    });
}, function (_a) {
    var layout = _a.layout;
    return (0, style_1.getStylePreset)("banner.".concat(layout, ".content.message"), 'content.message');
});
exports.StyledActionsContainer = (0, style_1.styled)(stack_1.Stack)(templateObject_8 || (templateObject_8 = tslib_1.__makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var layout = _a.layout;
    return layout === 'vertical' ? 'align-self: stretch;' : 'align-self: center;';
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
//# sourceMappingURL=styled.js.map