import { __assign, __rest } from "tslib";
import React, { useCallback } from 'react';
import { useControlled } from '../utils/hooks';
var RadioGroupContext = React.createContext(undefined);
export var RadioGroup = React.forwardRef(function (_a, ref) {
    var children = _a.children, defaultValue = _a.defaultValue, name = _a.name, onChange = _a.onChange, valueProp = _a.value, restProps = __rest(_a, ["children", "defaultValue", "name", "onChange", "value"]);
    var _b = useControlled({
        controlledValue: valueProp,
        defaultValue: defaultValue,
    }), value = _b[0], setValueState = _b[1];
    var handleChange = useCallback(function (event) {
        setValueState(event.target.value);
        if (onChange) {
            onChange(event);
        }
    }, [setValueState, onChange]);
    return (React.createElement(RadioGroupContext.Provider, { value: { name: name, onChange: handleChange, value: value } },
        React.createElement("div", __assign({ ref: ref }, restProps), children)));
});
export var useRadioGroupContext = function () {
    return React.useContext(RadioGroupContext);
};
//# sourceMappingURL=radio-group.js.map