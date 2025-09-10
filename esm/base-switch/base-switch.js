import { __assign, __rest } from "tslib";
import React, { useCallback, useEffect, useRef, useState } from 'react';
import composeRefs from '@seznam/compose-react-refs';
import { composeEventHandlers } from '../utils/compose-event-handlers';
import { StyledSwitch, StyledInput, StyledSwitchContainer, StyledSwitchFeedback, StyledSwitchAndLabelWrapper, StyledLabel, } from './styled';
import { getComponentOverrides } from '../utils/overrides';
import { useControlled } from '../utils/hooks';
import { useTheme } from '../theme';
import { getToken } from '../utils/get-token';
import { isFocusVisible } from '../utils/focus-visible';
import { omitLogicalPropsFromOverrides } from '../utils/logical-properties';
import { EventTrigger, useInstrumentation } from '../instrumentation';
export var BaseSwitch = React.forwardRef(function (_a, inputRef) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, checkedProp = _a.checked, defaultChecked = _a.defaultChecked, state = _a.state, overrides = _a.overrides, onFocus = _a.onFocus, onBlur = _a.onBlur, onChange = _a.onChange, label = _a.label, _c = _a.labelPosition, labelPosition = _c === void 0 ? 'end' : _c, _d = _a.labelAttributes, labelAttributes = _d === void 0 ? {} : _d, path = _a.path, defaultSwitchComponent = _a.defaultSwitchSelectorComponent, type = _a.type, hideFeedback = _a.hideFeedback, _e = _a.eventContext, eventContext = _e === void 0 ? {} : _e, 
    /* istanbul ignore next */
    _f = _a.eventOriginator, 
    /* istanbul ignore next */
    eventOriginator = _f === void 0 ? '' : _f, restProps = __rest(_a, ["size", "checked", "defaultChecked", "state", "overrides", "onFocus", "onBlur", "onChange", "label", "labelPosition", "labelAttributes", "path", "defaultSwitchSelectorComponent", "type", "hideFeedback", "eventContext", "eventOriginator"]);
    var ref = useRef(null);
    var _g = React.useState(false), isInputFocused = _g[0], setIsInputFocused = _g[1];
    var _h = React.useState(false), isInputFocusVisible = _h[0], setIsInputFocusVisible = _h[1];
    var _j = React.useState(false), isInputActive = _j[0], setIsInputActive = _j[1];
    var _k = React.useState(false), isLabelHovered = _k[0], setIsLabelHovered = _k[1];
    var fireEvent = useInstrumentation().fireEvent;
    var _l = useControlled({
        controlledValue: checkedProp,
        defaultValue: Boolean(defaultChecked),
    }), checked = _l[0], setCheckedState = _l[1];
    var onFeedbackClick = useCallback(function () {
        // When label is passed, everything ( input and feedback components) is wrap inside the label
        // so there is no need for clicking on the input
        /* istanbul ignore else */
        if (!label && ref && ref.current) {
            ref.current.click();
        }
    }, [ref, label]);
    var onInputChange = useCallback(function (event) {
        setCheckedState(event.target.checked);
        fireEvent({
            originator: eventOriginator,
            trigger: EventTrigger.Change,
            context: __assign({ checked: event.target.checked }, eventContext),
        });
    }, [eventContext, eventOriginator, fireEvent, setCheckedState]);
    var onInputFocus = useCallback(function (e) {
        if (isFocusVisible(e)) {
            setIsInputFocusVisible(true);
        }
        else {
            setIsInputFocused(true);
        }
    }, [setIsInputFocused, setIsInputFocusVisible]);
    var onInputBlur = useCallback(function () {
        setIsInputFocusVisible(false);
        setIsInputFocused(false);
    }, []);
    var onMouseDown = useCallback(function () {
        setIsInputActive(true);
    }, [setIsInputActive]);
    var onMouseUp = useCallback(function () {
        setIsInputActive(false);
    }, [setIsInputActive]);
    var onLabelMouseOver = useCallback(function () {
        if (state !== 'disabled') {
            setIsLabelHovered(true);
        }
    }, [setIsLabelHovered, state]);
    var onLabelMouseLeave = useCallback(function () {
        if (state !== 'disabled') {
            setIsLabelHovered(false);
            setIsInputActive(false);
        }
    }, [setIsLabelHovered, state]);
    var theme = useTheme();
    var iconSize = getToken({ theme: theme, overrides: overrides }, "".concat(path, ".").concat(size, ".icon"), 'icon', 'size');
    var _m = getComponentOverrides(overrides === null || overrides === void 0 ? void 0 : overrides.icon, defaultSwitchComponent, {
        state: state,
        checked: checked,
        size: size,
        iconSize: iconSize,
        parentOverrides: omitLogicalPropsFromOverrides(overrides),
        isFocused: isInputFocused,
        isHovered: isLabelHovered || isInputFocused,
    }), CheckIcon = _m[0], checkIconProps = _m[1];
    var labelElement = label && (React.createElement(StyledLabel, { path: path, size: size, overrides: overrides, state: state }, label));
    var _o = useState(''), switchPadding = _o[0], setSwitchPadding = _o[1];
    var switchRef = useRef(null);
    useEffect(function () {
        setSwitchPadding(getComputedStyle(switchRef.current).paddingInline);
    }, []);
    return (React.createElement(StyledSwitchAndLabelWrapper, __assign({ as: label ? 'label' : 'div', state: state, size: size, overrides: overrides }, (label ? labelAttributes : {}), { onMouseOver: onLabelMouseOver, onMouseLeave: onLabelMouseLeave, onMouseDown: onMouseDown, onMouseUp: onMouseUp, path: path }),
        labelPosition === 'start' && labelElement,
        React.createElement(StyledSwitchContainer, { size: size, overrides: overrides, state: state, labelPosition: labelPosition, role: "presentation", path: path },
            !hideFeedback && (React.createElement(StyledSwitchFeedback, { thumbOffset: switchPadding, centreOnThumb: path === 'switch', checked: checked, size: size, overrides: overrides, state: state, onClick: onFeedbackClick, "data-testid": "".concat(type, "-feedback"), isActive: isInputActive, isHovered: isLabelHovered, path: path })),
            React.createElement(StyledSwitch, { ref: switchRef, checked: checked, state: state, overrides: overrides, size: size, isFocused: isInputFocused, isFocusedVisible: isInputFocusVisible, isHovered: isLabelHovered, feedbackIsVisible: isLabelHovered || isInputFocused, path: path },
                React.createElement(CheckIcon, __assign({}, checkIconProps)),
                React.createElement(StyledInput, __assign({ ref: composeRefs(inputRef, ref), overrides: overrides, checked: checked, disabled: state === 'disabled', "data-testid": "".concat(type, "-input") }, restProps, { state: state, onFocus: composeEventHandlers([onInputFocus, onFocus]), onBlur: composeEventHandlers([onInputBlur, onBlur]), onChange: composeEventHandlers([onInputChange, onChange]), path: path, type: type })))),
        labelPosition === 'end' && labelElement));
});
//# sourceMappingURL=base-switch.js.map