import { __makeTemplateObject } from "tslib";
import { TextBlock } from '../text-block';
import { getLogicalPropsAndTypographyPreset } from '../utils/logical-properties';
import { getStylePreset, styled } from '../utils/style';
export var StyledAssistiveText = styled(TextBlock)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex: 1;\n\n  ", "\n\n  ", "\n"], ["\n  flex: 1;\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var size = _a.size, state = _a.state;
    return getStylePreset("assistiveText.".concat(size), '', {
        isInvalid: state === 'invalid',
        isDisabled: state === 'disabled',
        isValid: state === 'valid',
    });
}, function (_a) {
    var size = _a.size;
    return getLogicalPropsAndTypographyPreset("assistiveText.".concat(size), '');
});
var templateObject_1;
//# sourceMappingURL=styled.js.map