"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeReactHookFormProps = exports.getStatusIcon = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("../icons");
var getStatusIcon = function (_a) {
    var state = _a.state, validIcon = _a.validIcon, invalidIcon = _a.invalidIcon, iconSize = _a.iconSize;
    if (state === 'invalid') {
        return (invalidIcon || (react_1.default.createElement(icons_1.IconFilledError, { "data-testid": "error-icon", overrides: {
                size: iconSize,
                stylePreset: 'iconNegative',
            } })));
    }
    if (state === 'valid') {
        return (validIcon || (react_1.default.createElement(icons_1.IconFilledCheckCircle, { "data-testid": "tick-icon", overrides: {
                size: iconSize,
                stylePreset: 'iconPositive',
            } })));
    }
    return null;
};
exports.getStatusIcon = getStatusIcon;
var excludeReactHookFormProps = function (props) {
    var resolver = props.resolver, defaultValues = props.defaultValues, reValidationMode = props.reValidationMode, validationMode = props.validationMode, rest = tslib_1.__rest(props, ["resolver", "defaultValues", "reValidationMode", "validationMode"]);
    return rest;
};
exports.excludeReactHookFormProps = excludeReactHookFormProps;
//# sourceMappingURL=utils.js.map