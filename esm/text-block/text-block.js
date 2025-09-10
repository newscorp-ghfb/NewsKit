import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { styled, getStylePresetFromTheme, getTypographyPresetFromTheme, } from '../utils/style';
import { isInlineElement } from '../utils/inline-tags';
import { logicalProps } from '../utils/logical-properties';
var StyledTextBlock = styled.p(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"], ["\n  margin: 0;\n  ", ";\n  ", ";\n  ", ";\n  ", "\n"])), function (_a) {
    var stylePreset = _a.stylePreset;
    return stylePreset && getStylePresetFromTheme(stylePreset);
}, function (_a) {
    var typographyPreset = _a.typographyPreset, noCrop = _a.noCrop;
    return typographyPreset &&
        getTypographyPresetFromTheme(typographyPreset, undefined, {
            withCrop: !noCrop,
        });
}, function (_a) {
    var as = _a.as, noCrop = _a.noCrop;
    return as && !noCrop && isInlineElement(as) ? 'display: inline-block;' : '';
}, logicalProps());
export var TextBlock = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return React.createElement(StyledTextBlock, __assign({}, props, { ref: ref }));
});
var templateObject_1;
//# sourceMappingURL=text-block.js.map