import { __makeTemplateObject } from "tslib";
import { styled, getStylePreset } from '../utils/style';
import { logicalProps } from '../utils/logical-properties';
import { Button } from '../button';
export var StyledNav = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", ";\n"], ["\n  ", "\n  ", ";\n"])), logicalProps(), getStylePreset(''));
export var StyledOrderedList = styled.ol(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  list-style: none;\n  display: inline-flex;\n  margin: 0;\n  padding: 0px;\n"], ["\n  list-style: none;\n  display: inline-flex;\n  margin: 0;\n  padding: 0px;\n"])));
export var StyledListItem = styled.li(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-self: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-self: center;\n"])));
export var StyledButton = styled(Button)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  cursor: ", ";\n"], ["\n  ", ";\n  cursor: ", ";\n"])), function (_a) {
    var size = _a.size, selected = _a.selected;
    return getStylePreset("breadcrumbItem.".concat(size), '', { isSelected: selected });
}, function (_a) {
    var selected = _a.selected;
    return (selected ? 'text' : 'pointer');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map