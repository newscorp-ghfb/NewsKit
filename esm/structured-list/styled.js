import { __makeTemplateObject } from "tslib";
import { Cell, Grid } from '../grid';
import { getResponsiveSize, getStylePreset, styled } from '../utils';
import { logicalProps, logicalPaddingProps } from '../utils/logical-properties';
var getAlign = function (align) {
    switch (align) {
        case 'center':
            return 'align-self: center';
        case 'end':
            return 'align-self: flex-end';
        default:
            return '';
    }
};
export var StyledGrid = styled(Grid)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", "\n  ", "\n"], ["\n  ", ";\n  ", "\n  ", "\n"])), function (props) {
    return getStylePreset('structuredListItem', '', props.hasHref ? {} : { omitStates: ['active', 'hover', 'focus'] })(props);
}, logicalPaddingProps('structuredListItem'), getResponsiveSize('minHeight', 'structuredListItem', '', 'minHeight'));
export var StyledWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n"])));
export var StyledListItemContainer = styled.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  cursor: ", ";\n  list-style: none;\n  width: 100%;\n"], ["\n  cursor: ", ";\n  list-style: none;\n  width: 100%;\n"])), function (_a) {
    var disabled = _a.disabled;
    return disabled && 'not-allowed';
});
export var StyledLink = styled.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-decoration: none;\n  outline-offset: -1px;\n"], ["\n  text-decoration: none;\n  outline-offset: -1px;\n"])));
export var StyledListWrapper = styled.ul(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  list-style: none;\n  padding-left: 0;\n  ", "\n  margin: 0;\n  ", "\n"], ["\n  list-style: none;\n  padding-left: 0;\n  ", "\n  margin: 0;\n  ", "\n"])), getResponsiveSize('width', 'structuredList', '', 'width'), logicalProps());
export var StyledCell = styled(Cell)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var align = _a.align;
    return getAlign(align || 'start');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=styled.js.map