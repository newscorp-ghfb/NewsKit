"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithEnhancers = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var Enhancer = function (_a) {
    var valid = _a.valid, invalid = _a.invalid, position = _a.position, overrides = _a.overrides, children = _a.children, props = tslib_1.__rest(_a, ["valid", "invalid", "position", "overrides", "children"]);
    return (react_1.default.createElement(styled_1.StyledEnhancer, tslib_1.__assign({ valid: valid, invalid: invalid, position: position, overrides: overrides }, props), children));
};
exports.WithEnhancers = react_1.default.forwardRef(function (_a, ref) {
    var overrides = _a.overrides, componentDefaultsPath = _a.componentDefaultsPath, state = _a.state, startEnhancer = _a.startEnhancer, endEnhancer = _a.endEnhancer, isFocused = _a.isFocused, children = _a.children, _b = _a.marginPosition, marginPosition = _b === void 0 ? 'outside' : _b, alignSelf = _a.alignSelf;
    return (react_1.default.createElement(styled_1.StyledInputContainer, { ref: ref, componentDefaultsPath: componentDefaultsPath, overrides: overrides, state: state, focused: isFocused },
        startEnhancer && (react_1.default.createElement(Enhancer, { position: "startEnhancer", componentDefaultsPath: "".concat(componentDefaultsPath, ".startEnhancer"), overrides: overrides && overrides.startEnhancer, alignSelf: alignSelf, marginPosition: marginPosition }, startEnhancer)),
        children,
        endEnhancer && (react_1.default.createElement(Enhancer, { componentDefaultsPath: "".concat(componentDefaultsPath, ".endEnhancer"), position: "endEnhancer", overrides: overrides && overrides.endEnhancer, alignSelf: alignSelf, marginPosition: marginPosition }, endEnhancer))));
});
//# sourceMappingURL=with-enhancers.js.map