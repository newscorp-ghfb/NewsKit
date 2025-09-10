import React from 'react';
export function useControlled(_a) {
    var controlledValue = _a.controlledValue, defaultValue = _a.defaultValue;
    var isControlled = React.useRef(controlledValue !== undefined).current;
    var _b = React.useState(defaultValue), valueState = _b[0], setValue = _b[1];
    var value = isControlled ? controlledValue : valueState;
    var setValueIfUncontrolled = React.useCallback(function (newValue) {
        if (!isControlled) {
            setValue(newValue);
        }
    }, [isControlled]);
    return [value, setValueIfUncontrolled];
}
//# sourceMappingURL=use-controlled.js.map