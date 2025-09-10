import { __makeTemplateObject, __rest } from "tslib";
import { styled, getStylePreset, handleResponsiveProp, getResponsiveSpace, getResponsiveSize, getBorderCssFromTheme, } from '../utils/style';
import { Stack } from '../stack';
import { filterInteractiveStates, getHorizontalRatio, isHorizontal, isReverse, } from './utils';
import { logicalProps } from '../utils/logical-properties';
var DEFAULT_PROPS = {
    layout: 'vertical',
};
export var StyledCardContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  overflow: hidden;\n  ", "\n  position: relative;\n  display: flex;\n  ", "\n  ", ";\n"], ["\n  box-sizing: border-box;\n  overflow: hidden;\n  ", "\n  position: relative;\n  display: flex;\n  ", "\n  ", ";\n"])), function (_a) {
    var hasHref = _a.hasHref, props = __rest(_a, ["hasHref"]);
    return filterInteractiveStates('', hasHref)(props);
}, handleResponsiveProp({ layout: DEFAULT_PROPS.layout }, function (_a) {
    var layout = _a.layout;
    return ({
        flexDirection: (isHorizontal(layout)
            ? "row".concat(isReverse(layout) && '-reverse')
            : 'column'),
    });
}), logicalProps('card'));
export var StyledCardContainerMedia = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  svg {\n    ", ";\n  }\n\n  ", "\n\n  ", "\n  ", ";\n\n  ", "\n  ", "\n"], ["\n  box-sizing: border-box;\n  display: block;\n  position: relative;\n  svg {\n    ", ";\n  }\n\n  ", "\n\n  ", "\n  ", ";\n\n  ", "\n  ", "\n"])), getBorderCssFromTheme('borderRadius', 'borderRadiusRounded010'), handleResponsiveProp({ layout: DEFAULT_PROPS.layout }, function (_a, _b) {
    var layout = _a.layout;
    var overrides = _b.overrides, theme = _b.theme;
    if (isHorizontal(layout)) {
        var mediaRatio = getHorizontalRatio(layout, theme.componentDefaults.card, overrides)[0];
        return { flex: mediaRatio };
    }
    return {};
}), handleResponsiveProp({ layout: DEFAULT_PROPS.layout }, function (_a, props) {
    var layout = _a.layout;
    var marginDirection = 'marginBottom';
    if (isHorizontal(layout) && isReverse(layout)) {
        marginDirection = 'marginLeft';
    }
    else if (isHorizontal(layout)) {
        marginDirection = 'marginRight';
    }
    return getResponsiveSpace(marginDirection, 'card.mediaContainer', 'mediaContainer', 'spaceInline')(props);
}), logicalProps('card.mediaContainer', 'mediaContainer'), function (_a) {
    var mediaInteractive = _a.mediaInteractive;
    return (mediaInteractive ? 'z-index: 2;' : null);
}, function (_a) {
    var hasHref = _a.hasHref, props = __rest(_a, ["hasHref"]);
    return filterInteractiveStates('mediaContainer', hasHref)(props);
});
export var StyledCardContainerTeaserAndActions = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n\n  ", "\n"], ["\n  box-sizing: border-box;\n\n  ", "\n"])), handleResponsiveProp({ layout: DEFAULT_PROPS.layout }, function (_a, _b) {
    var layout = _a.layout;
    var overrides = _b.overrides, theme = _b.theme;
    if (isHorizontal(layout)) {
        var _c = getHorizontalRatio(layout, theme.componentDefaults.card, overrides), teaserRatio = _c[1];
        return { display: 'flex', flexDirection: 'column', flex: teaserRatio };
    }
    return {};
}));
export var StyledCardContainerTeaser = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", ";\n\n  a:not(.nk-card-link) {\n    z-index: 2;\n    position: relative;\n  }\n"], ["\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", ";\n\n  a:not(.nk-card-link) {\n    z-index: 2;\n    position: relative;\n  }\n"])), handleResponsiveProp({ layout: DEFAULT_PROPS.layout }, function (_a) {
    var layout = _a.layout;
    return ({
        flex: isHorizontal(layout) ? 1 : undefined,
    });
}), function (_a) {
    var hasHref = _a.hasHref, props = __rest(_a, ["hasHref"]);
    return filterInteractiveStates('teaserContainer', hasHref)(props);
}, logicalProps('card.teaserContainer', 'teaserContainer'));
export var StyledCardLink = styled.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  text-decoration: none;\n  border: none;\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  outline: none;\n\n  :before {\n    content: '';\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: 1;\n  }\n"], ["\n  text-decoration: none;\n  border: none;\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  outline: none;\n\n  :before {\n    content: '';\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: hidden;\n    position: absolute;\n    z-index: 1;\n  }\n"])), getStylePreset('card.headline.interactive.kicker', 'kicker', {
    nestedCssSelector: '.nk-headline-kicker',
}), getStylePreset('card.headline.interactive.heading', 'heading', {
    nestedCssSelector: '.nk-headline-heading',
}), getStylePreset('card.headline.interactive.link', 'link', {
    nestedCssSelector: '.nk-card-headline',
}));
export var StyledCardContainerActions = styled(Stack)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  height: auto;\n  box-sizing: border-box;\n  ", ";\n  ", "\n  ", "\n  position: relative;\n  z-index: 2;\n"], ["\n  height: auto;\n  box-sizing: border-box;\n  ", ";\n  ", "\n  ", "\n  position: relative;\n  z-index: 2;\n"])), logicalProps('card.actionsContainer', 'actionsContainer'), function (_a) {
    var hasHref = _a.hasHref, props = __rest(_a, ["hasHref"]);
    return filterInteractiveStates('actionsContainer', hasHref)(props);
}, getResponsiveSize('minHeight', 'card.actionsContainer', 'actionsContainer', 'minHeight'));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map