import { __makeTemplateObject } from "tslib";
import { getResponsiveSize, getResponsiveSpace, getStylePreset, getTypographyPreset, styled, } from '../utils';
import { logicalProps } from '../utils/logical-properties';
export var StyledSelectionList = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", "\n"])), logicalProps('selectionList'));
export var StyledSelectionListOption = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var selected = _a.selected;
    return getStylePreset('selectionListOption', '', {
        isSelected: selected,
    });
}, getTypographyPreset('selectionListOption', ''), getResponsiveSize('minHeight', 'selectionListOption', '', 'minHeight'), getResponsiveSpace('columnGap', 'selectionListOption', '', 'spaceInline'), logicalProps('selectionListOption'));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map