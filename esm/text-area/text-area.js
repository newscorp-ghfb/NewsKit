import { __assign, __rest } from "tslib";
import React from 'react';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
import { StyledTextArea } from './styled';
import { getSingleStylePreset } from '../utils';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
import { EventTrigger, useInstrumentation } from '../instrumentation';
var ThemelessTextArea = React.forwardRef(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.resize, resize = _c === void 0 ? 'vertical' : _c, state = _a.state, overrides = _a.overrides, onFocus = _a.onFocus, eventContext = _a.eventContext, _d = _a.eventOriginator, eventOriginator = _d === void 0 ? 'text area' : _d, props = __rest(_a, ["size", "resize", "state", "overrides", "onFocus", "eventContext", "eventOriginator"]);
    var theme = useTheme();
    // This is a fix to apply the placeholderColor to input
    var textFieldStylePreset = getToken({ theme: theme, overrides: overrides }, "textArea.".concat(size), '', 'stylePreset');
    var placeholderColor = getSingleStylePreset(theme, 'base', 'placeholderColor', textFieldStylePreset);
    var fireEvent = useInstrumentation().fireEvent;
    var onElementFocus = React.useCallback(function (event) {
        fireEvent({
            originator: eventOriginator,
            trigger: EventTrigger.Focus,
            context: __assign({}, eventContext),
        });
        if (onFocus) {
            onFocus(event);
        }
    }, [eventContext, eventOriginator, fireEvent, onFocus]);
    return (React.createElement(StyledTextArea, __assign({ "$size": size, state: state, resize: resize, disabled: state === 'disabled', placeholderColor: placeholderColor, overrides: overrides, ref: ref, onFocus: onElementFocus }, props)));
});
export var TextArea = withOwnTheme(ThemelessTextArea)({
    defaults: defaults,
});
//# sourceMappingURL=text-area.js.map