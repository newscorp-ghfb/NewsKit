import { __makeTemplateObject } from "tslib";
import { TextBlock } from '../text-block';
import { getTypographyPreset, getStylePreset, styled, getResponsiveSize, } from '../utils/style';
import { logicalProps } from '../utils/logical-properties';
export var StyledCharacterCount = styled(TextBlock)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n\n  ", "\n\n  ", ";\n"], ["\n  ", "\n  ", "\n\n  ", "\n\n  ", ";\n"])), function (_a) {
    var size = _a.size, state = _a.state;
    return getStylePreset("characterCount.".concat(size), '', {
        isInvalid: state === 'invalid',
        isDisabled: state === 'disabled',
        isValid: state === 'valid',
    });
}, function (_a) {
    var size = _a.size;
    return getTypographyPreset("characterCount.".concat(size), '', {
        withCrop: true,
    });
}, function (_a) {
    var size = _a.size;
    return getResponsiveSize('minHeight', "characterCount.".concat(size), '', 'minHeight');
}, function (_a) {
    var size = _a.size;
    return logicalProps("characterCount.".concat(size));
});
var templateObject_1;
//# sourceMappingURL=styled.js.map