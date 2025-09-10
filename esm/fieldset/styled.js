import { __makeTemplateObject } from "tslib";
import { getTypographyPreset, getStylePreset, getResponsiveSpacingStackHorizontal, styled, } from '../utils/style';
import { logicalProps } from '../utils/logical-properties';
var legendStyleReset = "\n  display: table;\n  margin: 0;\n  padding: 0;\n";
var fieldsetStyleReset = "\n  border: 0;\n  padding: 0.01em 0 0 0;\n  margin: 0;\n  min-width: 0;\n  min-inline-size: 0;\n";
export var StyledLegend = styled.legend(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  padding: 1px 0;\n\n  ", "\n  ", "\n    ", ";\n"], ["\n  ", "\n  padding: 1px 0;\n\n  ", "\n  ", "\n    ", ";\n"])), legendStyleReset, function (_a) {
    var size = _a.size;
    return getStylePreset("legend.".concat(size), '');
}, function (_a) {
    var size = _a.size, noCrop = _a.noCrop;
    return getTypographyPreset("legend.".concat(size), '', {
        withCrop: !noCrop,
    });
}, function (_a) {
    var size = _a.size;
    return getResponsiveSpacingStackHorizontal("legend.".concat(size), '');
});
export var StyledFieldset = styled.fieldset(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n\n  ", ";\n  ", "\n"], ["\n  ", "\n\n  ", ";\n  ", "\n"])), fieldsetStyleReset, getStylePreset('fieldset', ''), logicalProps('fieldset'));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map