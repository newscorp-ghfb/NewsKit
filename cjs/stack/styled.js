"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledChildContainerListItem = exports.StyledMasterContainerList = exports.StyledChildContainer = exports.StyledMasterContainer = exports.getSpaceInHalf = exports.hasSpacing = exports.DEFAULT_PROPS = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var logical_properties_1 = require("../utils/logical-properties");
exports.DEFAULT_PROPS = {
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
var hasSpacing = function (theme, spaceToken) {
    return theme.spacePresets[spaceToken] &&
        parseInt(theme.spacePresets[spaceToken], 10) !== 0;
};
exports.hasSpacing = hasSpacing;
var getSpaceInHalf = function (theme, spaceToken, negative) { return "calc(".concat(negative ? '-' : '').concat(theme.spacePresets[spaceToken], "/2)"); };
exports.getSpaceInHalf = getSpaceInHalf;
var calculateMargins = function (negative) { return function (_a) {
    var theme = _a.theme, spaceStack = _a.spaceStack, spaceInline = _a.spaceInline, $wrap = _a.$wrap, flow = _a.flow;
    var hasWrapping = $wrap === 'wrap';
    var hasSpaceStack = (0, exports.hasSpacing)(theme, spaceStack);
    var hasSpaceInline = (0, exports.hasSpacing)(theme, spaceInline);
    if (!hasSpaceStack && !hasSpaceInline) {
        return {};
    }
    var margins = {};
    var halfSpaceStack = hasSpaceStack
        ? (0, exports.getSpaceInHalf)(theme, spaceStack, negative)
        : '';
    var halfSpaceInline = hasSpaceInline
        ? (0, exports.getSpaceInHalf)(theme, spaceInline, negative)
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
exports.StyledMasterContainer = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n      \n  ", "    \n\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n      \n  ", "    \n\n  ", "\n\n  ", "\n\n  ", "\n"])), (0, style_1.handleResponsiveProp)({ inline: exports.DEFAULT_PROPS.inline }, function (_a) {
    var inline = _a.inline;
    return ({
        display: inline ? 'inline-flex' : 'flex',
    });
}), (0, style_1.handleResponsiveProp)({ $height: exports.DEFAULT_PROPS.height }, function (_a) {
    var $height = _a.$height;
    return ({
        height: $height || '100%',
    });
}), (0, style_1.handleResponsiveProp)({ flow: exports.DEFAULT_PROPS.flow }, function (_a) {
    var flow = _a.flow;
    return ({
        alignItems: alignmentDictionary[flow],
    });
}), (0, style_1.handleResponsiveProp)({ flow: exports.DEFAULT_PROPS.flow, $wrap: exports.DEFAULT_PROPS.wrap }, function (_a) {
    var flow = _a.flow, $wrap = _a.$wrap;
    return ({
        alignContent: $wrap ? alignmentDictionary[flow] : '',
    });
}), (0, style_1.handleResponsiveProp)({ $wrap: exports.DEFAULT_PROPS.wrap }, function (_a) {
    var $wrap = _a.$wrap;
    return ({
        flexWrap: ($wrap === true ? 'wrap' : $wrap),
    });
}), (0, style_1.handleResponsiveProp)({ flexGrow: exports.DEFAULT_PROPS.flexGrow }, function (_a) {
    var flexGrow = _a.flexGrow;
    return ({
        flexGrow: (flexGrow === true ? 1 : flexGrow),
    });
}), (0, style_1.handleResponsiveProp)({ flexShrink: exports.DEFAULT_PROPS.flexShrink }, function (_a) {
    var flexShrink = _a.flexShrink;
    return ({
        flexShrink: (flexShrink === true
            ? 1
            : flexShrink),
    });
}), (0, style_1.handleResponsiveProp)({ flow: exports.DEFAULT_PROPS.flow, flowReverse: exports.DEFAULT_PROPS.flowReverse }, function (_a) {
    var flow = _a.flow, flowReverse = _a.flowReverse;
    return ({
        flexDirection: getFlexDirection(flow, flowReverse),
    });
}), (0, style_1.handleResponsiveProp)({ stackDistribution: exports.DEFAULT_PROPS.stackDistribution }, function (_a) {
    var stackDistribution = _a.stackDistribution;
    return ({
        justifyContent: stackDistribution === 'space-evenly'
            ? 'space-around'
            : stackDistribution,
    });
}), (0, style_1.handleResponsiveProp)({ stackDistribution: exports.DEFAULT_PROPS.stackDistribution }, function (_a) {
    var stackDistribution = _a.stackDistribution;
    return stackDistribution === 'space-evenly'
        ? (0, style_1.css)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n            &:before,\n            &:after {\n              content: '';\n              display: block;\n            }\n          "], ["\n            &:before,\n            &:after {\n              content: '';\n              display: block;\n            }\n          "]))) : {};
}), (0, style_1.handleResponsiveProp)({
    $wrap: exports.DEFAULT_PROPS.wrap,
    flow: exports.DEFAULT_PROPS.flow,
    spaceStack: exports.DEFAULT_PROPS.spaceStack,
    spaceInline: exports.DEFAULT_PROPS.spaceInline,
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
}), (0, logical_properties_1.logicalProps)('stack'));
exports.StyledChildContainer = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: inline-flex;\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n"], ["\n  display: inline-flex;\n  ", "\n\n  ", "\n  \n  ", "\n\n  ", "\n"])), (0, style_1.handleResponsiveProp)({
    $wrap: exports.DEFAULT_PROPS.wrap,
    flow: exports.DEFAULT_PROPS.flow,
    spaceStack: exports.DEFAULT_PROPS.spaceStack,
    spaceInline: exports.DEFAULT_PROPS.spaceInline,
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
}), (0, style_1.handleResponsiveProp)({ $order: undefined }, function (_a) {
    var $order = _a.$order;
    return ({ order: $order });
}), (0, style_1.handleResponsiveProp)({ $alignSelf: undefined }, function (_a) {
    var $alignSelf = _a.$alignSelf;
    return ({
        alignSelf: $alignSelf,
    });
}), (0, logical_properties_1.logicalProps)());
// Stack as list
exports.StyledMasterContainerList = (0, style_1.styled)(exports.StyledMasterContainer)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  list-style-type: none;\n  padding: 0;\n\n  ", "\n"], ["\n  list-style-type: none;\n  padding: 0;\n\n  ", "\n"])), (0, style_1.handleResponsiveProp)({
    spaceStack: exports.DEFAULT_PROPS.spaceStack,
    spaceInline: exports.DEFAULT_PROPS.spaceInline,
    flow: exports.DEFAULT_PROPS.flow,
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
    var marginReset = (isVertical && (0, exports.hasSpacing)(theme, spaceInline)) ||
        (isHorizontal && (0, exports.hasSpacing)(theme, spaceStack))
        ? {}
        : {
            marginTop: 0,
            marginBottom: 0,
        };
    return marginReset;
})).withComponent('ul');
exports.StyledChildContainerListItem = (0, style_1.styled)(exports.StyledChildContainer)(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject([""], [""]))).withComponent('li');
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=styled.js.map