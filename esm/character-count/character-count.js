import { __assign, __rest } from "tslib";
import React, { useCallback, useEffect, useState } from 'react';
import { StyledCharacterCount } from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var defaultFormat = function (_a) {
    var currentLength = _a.currentLength, minLength = _a.minLength, maxLength = _a.maxLength;
    if (minLength && !currentLength) {
        return "Please enter a minimum of ".concat(minLength, " character").concat(minLength === 1 ? '' : 's');
    }
    if (minLength && currentLength < minLength) {
        var diff = minLength - currentLength;
        return "Please enter ".concat(diff, " character").concat(diff === 1 ? '' : 's');
    }
    if (maxLength) {
        var diff = maxLength - currentLength;
        return "You have ".concat(Math.abs(diff), " character").concat(diff === 1 || diff === -1 ? '' : 's', " ").concat(diff >= 0 ? 'remaining' : 'too many');
    }
    return '';
};
var ThemelessCharacterCount = React.forwardRef(function (_a, ref) {
    var inputRef = _a.inputRef, customFormat = _a.format, _b = _a.state, state = _b === void 0 ? 'valid' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, overrides = _a.overrides, minLengthDefault = _a.minLength, maxLengthDefault = _a.maxLength, rest = __rest(_a, ["inputRef", "format", "state", "size", "overrides", "minLength", "maxLength"]);
    var _d = useState(0), currentLength = _d[0], setCurrentLength = _d[1];
    var _e = useState(maxLengthDefault), maxLength = _e[0], setMaxLength = _e[1];
    var _f = useState(minLengthDefault), minLength = _f[0], setMinLength = _f[1];
    var onInput = useCallback(function (event) {
        var target = event.target;
        setCurrentLength(target.value.length);
    }, [setCurrentLength]);
    useEffect(function () {
        var inputEl;
        if (inputRef && inputRef.current) {
            inputEl = inputRef.current;
            inputEl.addEventListener('input', onInput);
            setCurrentLength(inputRef.current.value.length);
            // this check ignores the browser default max length of 524,288
            if (inputEl.getAttribute('maxLength')) {
                setMaxLength(inputRef.current.maxLength);
            }
            // this check ignores the browser default min length of 0
            if (inputRef.current.getAttribute('minLength')) {
                setMinLength(inputEl.minLength);
            }
        }
        return function () {
            if (inputEl) {
                inputEl.removeEventListener('input', onInput);
            }
        };
    }, [inputRef, onInput]);
    var format = customFormat || defaultFormat;
    return (React.createElement(StyledCharacterCount, __assign({ ref: ref, size: size, state: state, overrides: overrides }, rest), format({
        currentLength: currentLength,
        minLength: minLength,
        maxLength: maxLength,
    })));
});
export var CharacterCount = withOwnTheme(ThemelessCharacterCount)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=character-count.js.map