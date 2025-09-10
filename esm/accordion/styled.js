import { __makeTemplateObject } from "tslib";
import { getResponsiveSize, getResponsiveSpace, getStylePreset, getTransitionPreset, getTypographyPreset, styled, } from '../utils';
import { logicalProps } from '../utils/logical-properties';
export var StyledAccordionButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  width: 100%;\n  cursor: ", ";\n  & > :not(:last-of-type) {\n    ", "\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  box-sizing: border-box;\n  align-items: center;\n  width: 100%;\n  cursor: ", ";\n  & > :not(:last-of-type) {\n    ", "\n  }\n  ", ";\n  ", ";\n  ", ";\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 'not-allowed' : 'pointer');
}, getResponsiveSpace('marginRight', 'accordion.header', 'header', 'spaceInline'), getResponsiveSize('minWidth', 'accordion.header', 'header', 'minWidth'), getResponsiveSize('minHeight', 'accordion.header', 'header', 'minHeight'), function (_a) {
    var disabled = _a.disabled;
    return getStylePreset('accordion.header', 'header', {
        isDisabled: disabled,
    });
}, getTypographyPreset('accordion.header', 'header'), logicalProps('accordion.header', 'header'), getTransitionPreset('accordion.header', 'header'));
export var StyledHeader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  text-align: start;\n  flex: 1;\n"], ["\n  text-align: start;\n  flex: 1;\n"])));
export var StyledLabel = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), getTypographyPreset('accordion.header.label', 'header.label'));
export var StyledIconWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n"], ["\n  display: flex;\n  align-self: center;\n"])));
export var StyledPanelTransitionContainer = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  overflow: hidden;\n  ", "\n"], ["\n  overflow: hidden;\n  ", "\n"])), getTransitionPreset('accordion.panel', 'panel', 'nk-accordion'));
export var StyledPanel = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n  ", "\n"], ["\n  ", ";\n  ", "\n"])), getStylePreset('accordion.panel', 'panel'), logicalProps('accordion.panel', 'panel'));
export var StyledAccordionWrapper = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), logicalProps('accordion'));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map