"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCount = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
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
var ThemelessCharacterCount = react_1.default.forwardRef(function (_a, ref) {
    var inputRef = _a.inputRef, customFormat = _a.format, _b = _a.state, state = _b === void 0 ? 'valid' : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, overrides = _a.overrides, minLengthDefault = _a.minLength, maxLengthDefault = _a.maxLength, rest = tslib_1.__rest(_a, ["inputRef", "format", "state", "size", "overrides", "minLength", "maxLength"]);
    var _d = (0, react_1.useState)(0), currentLength = _d[0], setCurrentLength = _d[1];
    var _e = (0, react_1.useState)(maxLengthDefault), maxLength = _e[0], setMaxLength = _e[1];
    var _f = (0, react_1.useState)(minLengthDefault), minLength = _f[0], setMinLength = _f[1];
    var onInput = (0, react_1.useCallback)(function (event) {
        var target = event.target;
        setCurrentLength(target.value.length);
    }, [setCurrentLength]);
    (0, react_1.useEffect)(function () {
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
    return (react_1.default.createElement(styled_1.StyledCharacterCount, tslib_1.__assign({ ref: ref, size: size, state: state, overrides: overrides }, rest), format({
        currentLength: currentLength,
        minLength: minLength,
        maxLength: maxLength,
    })));
});
exports.CharacterCount = (0, with_own_theme_1.withOwnTheme)(ThemelessCharacterCount)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=character-count.js.map