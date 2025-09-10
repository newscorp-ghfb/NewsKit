import { __makeTemplateObject } from "tslib";
import { Block } from '../block';
import { logicalProps } from '../utils/logical-properties';
import { getStylePreset, styled } from '../utils/style';
var getMarkerAlign = function (align) {
    switch (align) {
        case 'start':
            return 'align-self: start;';
        case 'end':
            return 'align-self: end;';
        default:
            return 'align-self: center;';
    }
};
export var StyledUl = styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  ", "\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  ", "\n"])), logicalProps());
export var StyledListItem = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  &:last-child + div {\n    margin: 0;\n  }\n"], ["\n  &:last-child + div {\n    margin: 0;\n  }\n"])));
export var StyledBlock = styled(Block)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n"], ["\n  display: flex;\n  align-items: center;\n"])));
export var StyledMarkerBlock = styled(Block)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  ", "\n  svg,\n  img {\n    display: block;\n  }\n"], ["\n  ", ";\n  ", "\n  svg,\n  img {\n    display: block;\n  }\n"])), getStylePreset('unorderedList.marker', 'marker'), function (_a) {
    var markerAlign = _a.markerAlign;
    return getMarkerAlign(markerAlign || 'center');
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map