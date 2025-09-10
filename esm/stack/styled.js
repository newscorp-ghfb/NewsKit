import { __makeTemplateObject } from "tslib";
import { css, styled, handleResponsiveProp } from '../utils/style';
import { logicalProps } from '../utils/logical-properties';
export var DEFAULT_PROPS = {
    spaceStack: 'space000',
    spaceInline: 'space000',
    flow: 'vertical-left',
    wrap: false,
    stackDistribution: 'flex-start',
    flexGrow: false,
    flexShrink: false,
    flowReverse: false,
    inline: false,
    height: undefined,
};
var flowDictionary = {
    vertical: 'column',
    horizontal: 'row',
};
var alignmentDictionary = {
    'vertical-left': 'flex-start',
    'vertical-center': 'center',
    'vertical-right': 'flex-end',
    'vertical-stretch': 'stretch',
    'horizontal-top': 'flex-start',
    'horizontal-center': 'center',
    'horizontal-bottom': 'flex-end',
    'horizontal-stretch': 'stretch',
};
var horizontalFlows = [
    'horizontal-bottom',
    'horizontal-center',
    'horizontal-top',
    'horizontal-stretch',
];
var verticalFlows = [
    'vertical-left',
    'vertical-center',
    'vertical-right',
    'vertical-stretch',
];
export var hasSpacing = function (theme, spaceToken) {
    return theme.spacePresets[spaceToken] &&
        parseInt(theme.spacePresets[spaceToken], 10) !== 0;
};
export var getSpaceInHalf = function (theme, spaceToken, negative) { return "calc(".concat(negative ? '-' : '').concat(theme.spacePresets[spaceToken], "/2)"); };
var calculateMargins = function (negative) { return function (_a) {
    var theme = _a.theme, spaceStack = _a.spaceStack, spaceInline = _a.spaceInline, $wrap = _a.$wrap, flow = _a.flow;
    var hasWrapping = $wrap === 'wrap';
    var hasSpaceStack = hasSpacing(theme, spaceStack);
    var hasSpaceInline = hasSpacing(theme, spaceInline);
    if (!hasSpaceStack && !hasSpaceInline) {
        return {};
    }
    var margins = {};
    var halfSpaceStack = hasSpaceStack
        ? getSpaceInHalf(theme, spaceStack, negative)
        : '';
    var halfSpaceInline = hasSpaceInline
        ? getSpaceInHalf(theme, spaceInline, negative)
        : '';
    /* istanbul ignore else */
    if (verticalFlows.includes(flow)) {
        margins.marginTop = halfSpaceInline;
        margins.marginBottom = halfSpaceInline;
        if (hasWrapping && hasSpaceStack) {
            margins.marginLeft = halfSpaceStack;
            margins.marginRight = halfSpaceStack;
        }
    }
    else if (horizontalFlows.includes(flow)) {
        margins.marginLeft = halfSpaceInline;
        margins.marginRight = halfSpaceInline;
        if (hasWrapping && hasSpaceStack) {
            margins.marginTop = halfSpaceStack;
            margins.marginBottom = halfSpaceStack;
        }
    }
    return margins;
}; };
var getFlexDirection = function (flow, flowReverse) {
    var flexDir = horizontalFlows.includes(flow)
        ? flowDictionary.horizontal
        : flowDictionary.vertical;
    var reverse = flowReverse ? '-reverse' : '';
    return (flexDir + reverse);
};
export var StyledMasterContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n      \n  ", "    \n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n      \n  ", "    \n\n  ", "\n\n  ", "\n\n  ", "\n"])), handleResponsiveProp({ inline: DEFAULT_PROPS.inline }, function (_a) {
    var inline = _a.inline;
    return ({
        display: inline ? 'inline-flex' : 'flex',
    });
}), handleResponsiveProp({ $height: DEFAULT_PROPS.height }, function (_a) {
    var $height = _a.$height;
    return ({
        height: $height || '100%',
    });
}), handleResponsiveProp({ flow: DEFAULT_PROPS.flow }, function (_a) {
    var flow = _a.flow;
    return ({
        alignItems: alignmentDictionary[flow],
    });
}), handleResponsiveProp({ flow: DEFAULT_PROPS.flow, $wrap: DEFAULT_PROPS.wrap }, function (_a) {
    var flow = _a.flow, $wrap = _a.$wrap;
    return ({
        alignContent: $wrap ? alignmentDictionary[flow] : '',
    });
}), handleResponsiveProp({ $wrap: DEFAULT_PROPS.wrap }, function (_a) {
    var $wrap = _a.$wrap;
    return ({
        flexWrap: ($wrap === true ? 'wrap' : $wrap),
    });
}), handleResponsiveProp({ flexGrow: DEFAULT_PROPS.flexGrow }, function (_a) {
    var flexGrow = _a.flexGrow;
    return ({
        flexGrow: (flexGrow === true ? 1 : flexGrow),
    });
}), handleResponsiveProp({ flexShrink: DEFAULT_PROPS.flexShrink }, function (_a) {
    var flexShrink = _a.flexShrink;
    return ({
        flexShrink: (flexShrink === true
            ? 1
            : flexShrink),
    });
}), handleResponsiveProp({ flow: DEFAULT_PROPS.flow, flowReverse: DEFAULT_PROPS.flowReverse }, function (_a) {
    var flow = _a.flow, flowReverse = _a.flowReverse;
    return ({
        flexDirection: getFlexDirection(flow, flowReverse),
    });
}), handleResponsiveProp({ stackDistribution: DEFAULT_PROPS.stackDistribution }, function (_a) {
    var stackDistribution = _a.stackDistribution;
    return ({
        justifyContent: stackDistribution === 'space-evenly'
            ? 'space-around'
            : stackDistribution,
    });
}), handleResponsiveProp({ stackDistribution: DEFAULT_PROPS.stackDistribution }, function (_a) {
    var stackDistribution = _a.stackDistribution;
    return stackDistribution === 'space-evenly'
        ? css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            &:before,\n            &:after {\n              content: '';\n              display: block;\n            }\n          "], ["\n            &:before,\n            &:after {\n              content: '';\n              display: block;\n            }\n          "]))) : {};
}), handleResponsiveProp({
    $wrap: DEFAULT_PROPS.wrap,
    flow: DEFAULT_PROPS.flow,
    spaceStack: DEFAULT_PROPS.spaceStack,
    spaceInline: DEFAULT_PROPS.spaceInline,
}, function (_a, _b) {
    var $wrap = _a.$wrap, flow = _a.flow, spaceStack = _a.spaceStack, spaceInline = _a.spaceInline;
    var theme = _b.theme;
    return calculateMargins(true)({
        theme: theme,
        $wrap: $wrap,
        flow: flow,
        spaceStack: spaceStack,
        spaceInline: spaceInline,
    });
}), logicalProps('stack'));
export var StyledChildContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n"], ["\n  display: inline-flex;\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n"])), handleResponsiveProp({
    $wrap: DEFAULT_PROPS.wrap,
    flow: DEFAULT_PROPS.flow,
    spaceStack: DEFAULT_PROPS.spaceStack,
    spaceInline: DEFAULT_PROPS.spaceInline,
}, function (_a, _b) {
    var $wrap = _a.$wrap, flow = _a.flow, spaceStack = _a.spaceStack, spaceInline = _a.spaceInline;
    var theme = _b.theme;
    return calculateMargins(false)({
        theme: theme,
        $wrap: $wrap,
        flow: flow,
        spaceStack: spaceStack,
        spaceInline: spaceInline,
    });
}), handleResponsiveProp({ $order: undefined }, function (_a) {
    var $order = _a.$order;
    return ({ order: $order });
}), handleResponsiveProp({ $alignSelf: undefined }, function (_a) {
    var $alignSelf = _a.$alignSelf;
    return ({
        alignSelf: $alignSelf,
    });
}), logicalProps());
// Stack as list
export var StyledMasterContainerList = styled(StyledMasterContainer)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  list-style-type: none;\n  padding: 0;\n\n  ", "\n"], ["\n  list-style-type: none;\n  padding: 0;\n\n  ", "\n"])), handleResponsiveProp({
    spaceStack: DEFAULT_PROPS.spaceStack,
    spaceInline: DEFAULT_PROPS.spaceInline,
    flow: DEFAULT_PROPS.flow,
}, function (_a, _b) {
    var spaceStack = _a.spaceStack, spaceInline = _a.spaceInline, flow = _a.flow;
    var theme = _b.theme;
    var isVertical = [
        'vertical-left',
        'vertical-center',
        'vertical-right',
    ].includes(flow);
    var isHorizontal = [
        'horizontal-top',
        'horizontal-center',
        'horizontal-bottom',
    ].includes(flow);
    var marginReset = (isVertical && hasSpacing(theme, spaceInline)) ||
        (isHorizontal && hasSpacing(theme, spaceStack))
        ? {}
        : {
            marginTop: 0,
            marginBottom: 0,
        };
    return marginReset;
})).withComponent('ul');
export var StyledChildContainerListItem = styled(StyledChildContainer)(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""]))).withComponent('li');
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map