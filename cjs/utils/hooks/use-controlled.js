"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useControlled = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
function useControlled(_a) {
    var controlledValue = _a.controlledValue, defaultValue = _a.defaultValue;
    var isControlled = react_1.default.useRef(controlledValue !== undefined).current;
    var _b = react_1.default.useState(defaultValue), valueState = _b[0], setValue = _b[1];
    var value = isControlled ? controlledValue : valueState;
    var setValueIfUncontrolled = react_1.default.useCallback(function (newValue) {
        if (!isControlled) {
            setValue(newValue);
        }
    }, [isControlled]);
    return [value, setValueIfUncontrolled];
}
exports.useControlled = useControlled;
//# sourceMappingURL=use-controlled.js.map