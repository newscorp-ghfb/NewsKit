import { __makeTemplateObject } from "tslib";
import { styled, getStylePreset, getTypographyPreset } from '../utils/style';
import { logicalProps } from '../utils/logical-properties';
import { Button } from '../button';
import { GridLayout } from '../grid-layout';
export var StyledNav = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n  ", ";\n"])), function (_a) {
    var size = _a.size;
    return getStylePreset("pagination.".concat(size), '');
}, function (_a) {
    var size = _a.size;
    return getTypographyPreset("pagination.".concat(size), '');
}, function (_a) {
    var size = _a.size;
    return logicalProps("pagination.".concat(size), '');
});
export var StyledUnorderedList = styled(GridLayout)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"], ["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"])));
export var StyledButton = styled(Button)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), function (_a) {
    var size = _a.size, selected = _a.selected;
    return getStylePreset("paginationItem.".concat(size), '', { isSelected: selected });
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map