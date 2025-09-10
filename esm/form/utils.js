import { __rest } from "tslib";
import React from 'react';
import { IconFilledCheckCircle, IconFilledError } from '../icons';
export var getStatusIcon = function (_a) {
    var state = _a.state, validIcon = _a.validIcon, invalidIcon = _a.invalidIcon, iconSize = _a.iconSize;
    if (state === 'invalid') {
        return (invalidIcon || (React.createElement(IconFilledError, { "data-testid": "error-icon", overrides: {
                size: iconSize,
                stylePreset: 'iconNegative',
            } })));
    }
    if (state === 'valid') {
        return (validIcon || (React.createElement(IconFilledCheckCircle, { "data-testid": "tick-icon", overrides: {
                size: iconSize,
                stylePreset: 'iconPositive',
            } })));
    }
    return null;
};
export var excludeReactHookFormProps = function (props) {
    var resolver = props.resolver, defaultValues = props.defaultValues, reValidationMode = props.reValidationMode, validationMode = props.validationMode, rest = __rest(props, ["resolver", "defaultValues", "reValidationMode", "validationMode"]);
    return rest;
};
//# sourceMappingURL=utils.js.map