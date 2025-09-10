import { __makeTemplateObject } from "tslib";
import { styled, getStylePreset, getResponsiveSpace, getResponsiveBorder, } from '../utils/style';
import { Stack } from '../stack';
import { TextBlock } from '../text-block';
import { Button } from '../button';
import { logicalProps } from '../utils/logical-properties';
var getFlexFromTabsDistribution = function (distribution, vertical) {
    switch (distribution) {
        case 'grow':
            return 'flex: 1 0 auto';
        case 'equal':
            return "".concat(vertical ? 'height' : 'width', ": 100%");
        case 'start':
        default:
            return 'flex: 0 0 auto';
    }
};
var alignmentPosition = function (indicatorPosition, vertical) {
    if (indicatorPosition === 'none') {
        return "display: none";
    }
    if (indicatorPosition === 'start') {
        return "\n      top: 0px;\n      left: 0px;\n    ";
    }
    return vertical
        ? "\n        top: 0px;\n        right: 0px;\n      "
        : "\n      bottom: 0px;\n      left: 0px;\n    ";
};
export var StyledTabGroup = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-flow: ", ";\n  // IE11 fix: this has to be max-height but IE11 wants height\n  ", "\n  ", "\n"], ["\n  display: flex;\n  flex-flow: ", ";\n  // IE11 fix: this has to be max-height but IE11 wants height\n  ", "\n  ", "\n"])), function (_a) {
    var vertical = _a.vertical;
    return (vertical ? 'row' : 'column');
}, function (_a) {
    var vertical = _a.vertical;
    return vertical && 'height: 100%;';
}, logicalProps());
export var StyledTabsBar = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  /* By default, the height, it is being set to 100% by the Stack */\n  /* it works with distribution Grow and Equal */\n  position: relative;\n  z-index: 0;\n  ", "\n\n  ", ";\n"], ["\n  /* By default, the height, it is being set to 100% by the Stack */\n  /* it works with distribution Grow and Equal */\n  position: relative;\n  z-index: 0;\n  ", "\n\n  ", ";\n"])), function (_a) {
    var vertical = _a.vertical;
    return vertical && 'max-height: 100%;';
}, function (_a) {
    var vertical = _a.vertical;
    return getResponsiveSpace(vertical ? 'marginRight' : 'marginBottom', 'tabs', '', 'spaceInline');
});
export var StyledInnerTabGroup = styled(Stack)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  border-width: 0;\n  position: relative;\n  display: flex;\n"], ["\n  width: 100%;\n  border-width: 0;\n  position: relative;\n  display: flex;\n"])));
export var StyledDistributionWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: stretch;\n  width: ", ";\n  ", ";\n\n  ", "\n\n  // adds 100% width to ScrollSnapAlignment component\n  > *:not(style) {\n    width: 100%;\n    display: flex;\n  }\n"], ["\n  display: flex;\n  align-items: stretch;\n  width: ", ";\n  ", ";\n\n  ", "\n\n  // adds 100% width to ScrollSnapAlignment component\n  > *:not(style) {\n    width: 100%;\n    display: flex;\n  }\n"])), function (_a) {
    var vertical = _a.vertical;
    return (vertical ? '100%' : '');
}, function (_a) {
    var distribution = _a.distribution, vertical = _a.vertical;
    return getFlexFromTabsDistribution(distribution, vertical);
}, function (_a) {
    var vertical = _a.vertical, last = _a.last;
    return getResponsiveSpace(function (spaceValue) {
        var _a;
        var value = last ? 0 : spaceValue;
        return _a = {}, _a[vertical ? 'marginBottom' : 'marginRight'] = value, _a;
    }, 'tabs.tab', 'tab', 'spaceInline');
});
export var StyledTabsBarIndicator = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n  position: absolute;\n  z-index: 2;\n  ", ";\n"], ["\n  ", ";\n  position: absolute;\n  z-index: 2;\n  ", ";\n"])), getStylePreset('tabs.selectionIndicator.indicator', 'selectionIndicator.indicator'), function (_a) {
    var indicatorPosition = _a.indicatorPosition, vertical = _a.vertical;
    return alignmentPosition(indicatorPosition, vertical);
});
export var StyledTabsBarTrack = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n  display: block;\n  position: absolute;\n  z-index: 1;\n\n  ", "\n\n  ", ";\n"], ["\n  ", "\n  display: block;\n  position: absolute;\n  z-index: 1;\n\n  ", "\n\n  ", ";\n"])), getStylePreset('tabs.selectionIndicator.track', 'selectionIndicator.track'), function (_a) {
    var vertical = _a.vertical;
    return getResponsiveBorder(function (borderSize) {
        return vertical
            ? { width: borderSize, height: '100%' }
            : { width: '100%', height: borderSize };
    }, 'tabs.selectionIndicator.track', 'selectionIndicator.track', 'weight');
}, function (_a) {
    var indicatorPosition = _a.indicatorPosition, vertical = _a.vertical;
    return alignmentPosition(indicatorPosition, vertical);
});
var tabFlexAlign = {
    start: 'flex-start',
    end: 'flex-end',
};
var tabTextAlign = {
    start: 'left',
    end: 'right',
};
export var StyledTabButton = styled(Button)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n"])), function (_a) {
    var selected = _a.selected;
    return selected && getStylePreset('tab', '', { isSelected: selected });
}, function (_a) {
    var align = _a.align;
    return align &&
        align !== 'center' && {
        justifyContent: tabFlexAlign[align],
        textAlign: tabTextAlign[align],
    };
});
export var StyledTabPanelBlock = styled(TextBlock)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100%;\n  ", "\n"], ["\n  width: 100%;\n  ", "\n"])), function (_a) {
    var isFocused = _a.isFocused;
    return getStylePreset('tabPanel', '', { isFocused: isFocused });
});
export var StyledDividerWrapper = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: inline-flex;\n  align-self: stretch;\n  ", "\n"], ["\n  display: inline-flex;\n  align-self: stretch;\n  ", "\n"])), function (_a) {
    var vertical = _a.vertical;
    return getResponsiveSpace(vertical ? 'marginRight' : 'marginBottom', 'tabs.tab', 'tab', 'spaceInline');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=styled.js.map