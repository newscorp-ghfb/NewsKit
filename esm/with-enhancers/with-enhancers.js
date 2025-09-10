import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledInputContainer, StyledEnhancer } from './styled';
var Enhancer = function (_a) {
    var valid = _a.valid, invalid = _a.invalid, position = _a.position, overrides = _a.overrides, children = _a.children, props = __rest(_a, ["valid", "invalid", "position", "overrides", "children"]);
    return (React.createElement(StyledEnhancer, __assign({ valid: valid, invalid: invalid, position: position, overrides: overrides }, props), children));
};
export var WithEnhancers = React.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, componentDefaultsPath = _a.componentDefaultsPath, state = _a.state, startEnhancer = _a.startEnhancer, endEnhancer = _a.endEnhancer, isFocused = _a.isFocused, children = _a.children, _b = _a.marginPosition, marginPosition = _b === void 0 ? 'outside' : _b, alignSelf = _a.alignSelf;
    return (React.createElement(StyledInputContainer, { ref: ref, componentDefaultsPath: componentDefaultsPath, overrides: overrides, state: state, focused: isFocused },
        startEnhancer && (React.createElement(Enhancer, { position: "startEnhancer", componentDefaultsPath: "".concat(componentDefaultsPath, ".startEnhancer"), overrides: overrides && overrides.startEnhancer, alignSelf: alignSelf, marginPosition: marginPosition }, startEnhancer)),
        children,
        endEnhancer && (React.createElement(Enhancer, { componentDefaultsPath: "".concat(componentDefaultsPath, ".endEnhancer"), position: "endEnhancer", overrides: overrides && overrides.endEnhancer, alignSelf: alignSelf, marginPosition: marginPosition }, endEnhancer))));
});
//# sourceMappingURL=with-enhancers.js.map