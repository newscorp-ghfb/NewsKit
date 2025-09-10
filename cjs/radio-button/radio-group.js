"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRadioGroupContext = exports.RadioGroup = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var hooks_1 = require("../utils/hooks");
var RadioGroupContext = react_1.default.createContext(undefined);
exports.RadioGroup = react_1.default.forwardRef(function (_a, ref) {
    var children = _a.children, defaultValue = _a.defaultValue, name = _a.name, onChange = _a.onChange, valueProp = _a.value, restProps = tslib_1.__rest(_a, ["children", "defaultValue", "name", "onChange", "value"]);
    var _b = (0, hooks_1.useControlled)({
        controlledValue: valueProp,
        defaultValue: defaultValue,
    }), value = _b[0], setValueState = _b[1];
    var handleChange = (0, react_1.useCallback)(function (event) {
        setValueState(event.target.value);
        if (onChange) {
            onChange(event);
        }
    }, [setValueState, onChange]);
    return (react_1.default.createElement(RadioGroupContext.Provider, { value: { name: name, onChange: handleChange, value: value } },
        react_1.default.createElement("div", tslib_1.__assign({ ref: ref }, restProps), children)));
});
var useRadioGroupContext = function () {
    return react_1.default.useContext(RadioGroupContext);
};
exports.useRadioGroupContext = useRadioGroupContext;
//# sourceMappingURL=radio-group.js.map