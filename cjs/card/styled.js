"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledCardContainerActions = exports.StyledCardLink = exports.StyledCardContainerTeaser = exports.StyledCardContainerTeaserAndActions = exports.StyledCardContainerMedia = exports.StyledCardContainer = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var stack_1 = require("../stack");
var utils_1 = require("./utils");
var logical_properties_1 = require("../utils/logical-properties");
var DEFAULT_PROPS = {
    layout: 'vertical',
};
exports.StyledCardContainer = style_1.styled.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  overflow: hidden;\n  ", "\n  position: relative;\n  display: flex;\n  ", "\n  ", ";\n"], ["\n  box-sizing: border-box;\n  overflow: hidden;\n  ", "\n  position: relative;\n  display: flex;\n  ", "\n  ", ";\n"])), function (_a) {
    var hasHref = _a.hasHref, props = tslib_1.__rest(_a, ["hasHref"]);
    return (0, utils_1.filterInteractiveStates)('', hasHref)(props);
}, (0, style_1.handleResponsiveProp)({ layout: DEFAULT_PROPS.layout }, function (_a) {
    var layout = _a.layout;
    return ({
        flexDirection: ((0, utils_1.isHorizontal)(layout)
            ? "row".concat((0, utils_1.isReverse)(layout) && '-reverse')
            : 'column'),
    });
}), (0, logical_properties_1.logicalProps)('card'));
exports.StyledCardContainerMedia = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  svg {\n    ", ";\n  }\n\n  ", "\n\n  ", "\n  ", ";\n\n  ", "\n  ", "\n"], ["\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  svg {\n    ", ";\n  }\n\n  ", "\n\n  ", "\n  ", ";\n\n  ", "\n  ", "\n"])), (0, style_1.getBorderCssFromTheme)('borderRadius', 'borderRadiusRounded010'), (0, style_1.handleResponsiveProp)({ layout: DEFAULT_PROPS.layout }, function (_a, _b) {
    var layout = _a.layout;
    var overrides = _b.overrides, theme = _b.theme;
    if ((0, utils_1.isHorizontal)(layout)) {
        var mediaRatio = (0, utils_1.getHorizontalRatio)(layout, theme.componentDefaults.card, overrides)[0];
        return { flex: mediaRatio };
    }
    return {};
}), (0, style_1.handleResponsiveProp)({ layout: DEFAULT_PROPS.layout }, function (_a, props) {
    var layout = _a.layout;
    var marginDirection = 'marginBottom';
    if ((0, utils_1.isHorizontal)(layout) && (0, utils_1.isReverse)(layout)) {
        marginDirection = 'marginLeft';
    }
    else if ((0, utils_1.isHorizontal)(layout)) {
        marginDirection = 'marginRight';
    }
    return (0, style_1.getResponsiveSpace)(marginDirection, 'card.mediaContainer', 'mediaContainer', 'spaceInline')(props);
}), (0, logical_properties_1.logicalProps)('card.mediaContainer', 'mediaContainer'), function (_a) {
    var mediaInteractive = _a.mediaInteractive;
    return (mediaInteractive ? 'z-index: 2;' : null);
}, function (_a) {
    var hasHref = _a.hasHref, props = tslib_1.__rest(_a, ["hasHref"]);
    return (0, utils_1.filterInteractiveStates)('mediaContainer', hasHref)(props);
});
exports.StyledCardContainerTeaserAndActions = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n\n  ", "\n"], ["\n  box-sizing: border-box;\n\n  ", "\n"])), (0, style_1.handleResponsiveProp)({ layout: DEFAULT_PROPS.layout }, function (_a, _b) {
    var layout = _a.layout;
    var overrides = _b.overrides, theme = _b.theme;
    if ((0, utils_1.isHorizontal)(layout)) {
        var _c = (0, utils_1.getHorizontalRatio)(layout, theme.componentDefaults.card, overrides), teaserRatio = _c[1];
        return { display: 'flex', flexDirection: 'column', flex: teaserRatio };
    }
    return {};
}));
exports.StyledCardContainerTeaser = style_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", ";\n\n  a:not(.nk-card-link) {\n    z-index: 2;\n    position: relative;\n  }\n"], ["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", ";\n\n  a:not(.nk-card-link) {\n    z-index: 2;\n    position: relative;\n  }\n"])), (0, style_1.handleResponsiveProp)({ layout: DEFAULT_PROPS.layout }, function (_a) {
    var layout = _a.layout;
    return ({
        flex: (0, utils_1.isHorizontal)(layout) ? 1 : undefined,
    });
}), function (_a) {
    var hasHref = _a.hasHref, props = tslib_1.__rest(_a, ["hasHref"]);
    return (0, utils_1.filterInteractiveStates)('teaserContainer', hasHref)(props);
}, (0, logical_properties_1.logicalProps)('card.teaserContainer', 'teaserContainer'));
exports.StyledCardLink = style_1.styled.a(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  text-decoration: none;\n  border: none;\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  outline: none;\n\n  :before {\n    content: '';\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: 1;\n  }\n"], ["\n  text-decoration: none;\n  border: none;\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  outline: none;\n\n  :before {\n    content: '';\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: 1;\n  }\n"])), (0, style_1.getStylePreset)('card.headline.interactive.kicker', 'kicker', {
    nestedCssSelector: '.nk-headline-kicker',
}), (0, style_1.getStylePreset)('card.headline.interactive.heading', 'heading', {
    nestedCssSelector: '.nk-headline-heading',
}), (0, style_1.getStylePreset)('card.headline.interactive.link', 'link', {
    nestedCssSelector: '.nk-card-headline',
}));
exports.StyledCardContainerActions = (0, style_1.styled)(stack_1.Stack)(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  height: auto;\n  box-sizing: border-box;\n  ", ";\n  ", "\n  ", "\n  position: relative;\n  z-index: 2;\n"], ["\n  height: auto;\n  box-sizing: border-box;\n  ", ";\n  ", "\n  ", "\n  position: relative;\n  z-index: 2;\n"])), (0, logical_properties_1.logicalProps)('card.actionsContainer', 'actionsContainer'), function (_a) {
    var hasHref = _a.hasHref, props = tslib_1.__rest(_a, ["hasHref"]);
    return (0, utils_1.filterInteractiveStates)('actionsContainer', hasHref)(props);
}, (0, style_1.getResponsiveSize)('minHeight', 'card.actionsContainer', 'actionsContainer', 'minHeight'));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map