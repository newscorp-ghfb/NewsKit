import { __makeTemplateObject } from "tslib";
import { getStylePreset, getTypographyPreset, styled } from '../utils/style';
import { logicalProps } from '../utils/logical-properties';
import { createCssGrid } from '../dialog/styled';
export var StyledPopoverInnerPanel = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var closePosition = _a.closePosition;
    return createCssGrid({ closePosition: closePosition });
});
export var StyledPopoverHeader = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  grid-area: header;\n  align-items: center;\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "\n"], ["\n  display: flex;\n  grid-area: header;\n  align-items: center;\n  box-sizing: border-box;\n  ", "\n  ", "\n  ", "\n"])), getStylePreset('popover.header', 'header'), getTypographyPreset('popover.header', 'header'), logicalProps('popover.header', 'header'));
export var StyledPopoverContent = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  grid-area: content;\n  ", "\n  ", "\n  ", "\n"], ["\n  grid-area: content;\n  ", "\n  ", "\n  ", "\n"])), getStylePreset('popover.content', 'content'), getTypographyPreset('popover.content', 'content'), logicalProps('popover.content', 'content'));
export var StyledPopoverCloseButtonContainer = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  grid-area: close;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  height: 100%;\n  ", "\n  ", "\n  ", "\n"], ["\n  grid-area: close;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  height: 100%;\n  ", "\n  ", "\n  ", "\n"])), getStylePreset('popover.closeButtonContainer', 'closeButtonContainer'), logicalProps('popover.closeButtonContainer', 'closeButtonContainer'), function (_a) {
    var closePosition = _a.closePosition;
    return closePosition === 'left' ? "padding-right: 0;" : "padding-left: 0;";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map