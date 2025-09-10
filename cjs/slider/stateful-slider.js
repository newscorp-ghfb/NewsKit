"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatefulSlider = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var slider_1 = require("./slider");
var StatefulSlider = function (_a) {
    var values = _a.values, props = tslib_1.__rest(_a, ["values"]);
    var _b = (0, react_1.useState)(values), stateValues = _b[0], setValues = _b[1];
    var onChange = function (newValues) {
        setValues(newValues);
        if (props.onChange) {
            props.onChange(newValues);
        }
    };
    return react_1.default.createElement(slider_1.Slider, tslib_1.__assign({}, props, { values: stateValues, onChange: onChange }));
};
exports.StatefulSlider = StatefulSlider;
//# sourceMappingURL=stateful-slider.js.map