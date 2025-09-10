import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { logicalProps } from '../utils/logical-properties';
import { styled, getSpacingFromTheme, getStylePresetFromTheme, } from '../utils/style';
import { getTransitionPresetFromTheme } from '../utils/style/transition-preset';
var StyledDiv = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n"])), function (_a) {
    var stylePreset = _a.stylePreset;
    return stylePreset && getStylePresetFromTheme(stylePreset);
}, function (_a) {
    var spaceInline = _a.spaceInline;
    return spaceInline && getSpacingFromTheme(spaceInline, undefined, 'marginRight');
}, function (_a) {
    var spaceStack = _a.spaceStack;
    return spaceStack && getSpacingFromTheme(spaceStack, undefined, 'marginBottom');
}, logicalProps(), function (_a) {
    var transitionPreset = _a.transitionPreset;
    return transitionPreset && getTransitionPresetFromTheme(transitionPreset);
});
export var Block = React.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    return React.createElement(StyledDiv, __assign({}, props, { ref: ref }));
});
var templateObject_1;
//# sourceMappingURL=block.js.map