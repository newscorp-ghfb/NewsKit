import { __assign, __rest } from "tslib";
import React, { useState } from 'react';
import { Slider } from './slider';
export var StatefulSlider = function (_a) {
    var values = _a.values, props = __rest(_a, ["values"]);
    var _b = useState(values), stateValues = _b[0], setValues = _b[1];
    var onChange = function (newValues) {
        setValues(newValues);
        if (props.onChange) {
            props.onChange(newValues);
        }
    };
    return React.createElement(Slider, __assign({}, props, { values: stateValues, onChange: onChange }));
};
//# sourceMappingURL=stateful-slider.js.map