"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextArea = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var with_own_theme_1 = require("../utils/with-own-theme");
var styled_1 = require("./styled");
var utils_1 = require("../utils");
var get_token_1 = require("../utils/get-token");
var theme_1 = require("../theme");
var instrumentation_1 = require("../instrumentation");
var ThemelessTextArea = react_1.default.forwardRef(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.resize, resize = _c === void 0 ? 'vertical' : _c, state = _a.state, overrides = _a.overrides, onFocus = _a.onFocus, eventContext = _a.eventContext, _d = _a.eventOriginator, eventOriginator = _d === void 0 ? 'text area' : _d, props = tslib_1.__rest(_a, ["size", "resize", "state", "overrides", "onFocus", "eventContext", "eventOriginator"]);
    var theme = (0, theme_1.useTheme)();
    // This is a fix to apply the placeholderColor to input
    var textFieldStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "textArea.".concat(size), '', 'stylePreset');
    var placeholderColor = (0, utils_1.getSingleStylePreset)(theme, 'base', 'placeholderColor', textFieldStylePreset);
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var onElementFocus = react_1.default.useCallback(function (event) {
        fireEvent({
            originator: eventOriginator,
            trigger: instrumentation_1.EventTrigger.Focus,
            context: tslib_1.__assign({}, eventContext),
        });
        if (onFocus) {
            onFocus(event);
        }
    }, [eventContext, eventOriginator, fireEvent, onFocus]);
    return (react_1.default.createElement(styled_1.StyledTextArea, tslib_1.__assign({ "$size": size, state: state, resize: resize, disabled: state === 'disabled', placeholderColor: placeholderColor, overrides: overrides, ref: ref, onFocus: onElementFocus }, props)));
});
exports.TextArea = (0, with_own_theme_1.withOwnTheme)(ThemelessTextArea)({
    defaults: defaults_1.default,
});
//# sourceMappingURL=text-area.js.map