"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledAssistiveText = void 0;
var tslib_1 = require("tslib");
var text_block_1 = require("../text-block");
var logical_properties_1 = require("../utils/logical-properties");
var style_1 = require("../utils/style");
exports.StyledAssistiveText = (0, style_1.styled)(text_block_1.TextBlock)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  flex: 1;\n\n  ", "\n\n  ", "\n"], ["\n  flex: 1;\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var size = _a.size, state = _a.state;
    return (0, style_1.getStylePreset)("assistiveText.".concat(size), '', {
        isInvalid: state === 'invalid',
        isDisabled: state === 'disabled',
        isValid: state === 'valid',
    });
}, function (_a) {
    var size = _a.size;
    return (0, logical_properties_1.getLogicalPropsAndTypographyPreset)("assistiveText.".concat(size), '');
});
var templateObject_1;
//# sourceMappingURL=styled.js.map