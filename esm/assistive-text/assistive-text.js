import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledAssistiveText } from './styled';
import { WithEnhancers } from '../with-enhancers/with-enhancers';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { omitLogicalMarginPropsFromOverrides, omitLogicalPaddingPropsFromOverrides, } from '../utils/logical-properties';
var ThemelessAssistiveText = React.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, _b = _a.size, size = _b === void 0 ? 'medium' : _b, state = _a.state, children = _a.children, startEnhancer = _a.startEnhancer, endEnhancer = _a.endEnhancer, props = __rest(_a, ["overrides", "size", "state", "children", "startEnhancer", "endEnhancer"]);
    var enhancersOverrides = omitLogicalPaddingPropsFromOverrides(overrides);
    var textBlockOverrides = omitLogicalMarginPropsFromOverrides(overrides);
    return (React.createElement(WithEnhancers, { componentDefaultsPath: "assistiveText.".concat(size), overrides: enhancersOverrides, state: state, startEnhancer: startEnhancer, endEnhancer: endEnhancer, marginPosition: "inside", alignSelf: "start" }, children && (React.createElement(StyledAssistiveText, __assign({ ref: ref, "aria-disabled": state === 'disabled' ? true : undefined, size: size, state: state, role: state === 'invalid' ? 'alert' : undefined, "aria-live": state === 'invalid' ? 'polite' : undefined, overrides: textBlockOverrides }, props), children))));
});
export var AssistiveText = withOwnTheme(ThemelessAssistiveText)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=assistive-text.js.map