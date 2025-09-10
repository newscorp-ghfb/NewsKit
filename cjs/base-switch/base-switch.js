"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSwitch = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var compose_react_refs_1 = tslib_1.__importDefault(require("@seznam/compose-react-refs"));
var compose_event_handlers_1 = require("../utils/compose-event-handlers");
var styled_1 = require("./styled");
var overrides_1 = require("../utils/overrides");
var hooks_1 = require("../utils/hooks");
var theme_1 = require("../theme");
var get_token_1 = require("../utils/get-token");
var focus_visible_1 = require("../utils/focus-visible");
var logical_properties_1 = require("../utils/logical-properties");
var instrumentation_1 = require("../instrumentation");
exports.BaseSwitch = react_1.default.forwardRef(function (_a, inputRef) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, checkedProp = _a.checked, defaultChecked = _a.defaultChecked, state = _a.state, overrides = _a.overrides, onFocus = _a.onFocus, onBlur = _a.onBlur, onChange = _a.onChange, label = _a.label, _c = _a.labelPosition, labelPosition = _c === void 0 ? 'end' : _c, _d = _a.labelAttributes, labelAttributes = _d === void 0 ? {} : _d, path = _a.path, defaultSwitchComponent = _a.defaultSwitchSelectorComponent, type = _a.type, hideFeedback = _a.hideFeedback, _e = _a.eventContext, eventContext = _e === void 0 ? {} : _e, 
    /* istanbul ignore next */
    _f = _a.eventOriginator, 
    /* istanbul ignore next */
    eventOriginator = _f === void 0 ? '' : _f, restProps = tslib_1.__rest(_a, ["size", "checked", "defaultChecked", "state", "overrides", "onFocus", "onBlur", "onChange", "label", "labelPosition", "labelAttributes", "path", "defaultSwitchSelectorComponent", "type", "hideFeedback", "eventContext", "eventOriginator"]);
    var ref = (0, react_1.useRef)(null);
    var _g = react_1.default.useState(false), isInputFocused = _g[0], setIsInputFocused = _g[1];
    var _h = react_1.default.useState(false), isInputFocusVisible = _h[0], setIsInputFocusVisible = _h[1];
    var _j = react_1.default.useState(false), isInputActive = _j[0], setIsInputActive = _j[1];
    var _k = react_1.default.useState(false), isLabelHovered = _k[0], setIsLabelHovered = _k[1];
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var _l = (0, hooks_1.useControlled)({
        controlledValue: checkedProp,
        defaultValue: Boolean(defaultChecked),
    }), checked = _l[0], setCheckedState = _l[1];
    var onFeedbackClick = (0, react_1.useCallback)(function () {
        // When label is passed, everything ( input and feedback components) is wrap inside the label
        // so there is no need for clicking on the input
        /* istanbul ignore else */
        if (!label && ref && ref.current) {
            ref.current.click();
        }
    }, [ref, label]);
    var onInputChange = (0, react_1.useCallback)(function (event) {
        setCheckedState(event.target.checked);
        fireEvent({
            originator: eventOriginator,
            trigger: instrumentation_1.EventTrigger.Change,
            context: tslib_1.__assign({ checked: event.target.checked }, eventContext),
        });
    }, [eventContext, eventOriginator, fireEvent, setCheckedState]);
    var onInputFocus = (0, react_1.useCallback)(function (e) {
        if ((0, focus_visible_1.isFocusVisible)(e)) {
            setIsInputFocusVisible(true);
        }
        else {
            setIsInputFocused(true);
        }
    }, [setIsInputFocused, setIsInputFocusVisible]);
    var onInputBlur = (0, react_1.useCallback)(function () {
        setIsInputFocusVisible(false);
        setIsInputFocused(false);
    }, []);
    var onMouseDown = (0, react_1.useCallback)(function () {
        setIsInputActive(true);
    }, [setIsInputActive]);
    var onMouseUp = (0, react_1.useCallback)(function () {
        setIsInputActive(false);
    }, [setIsInputActive]);
    var onLabelMouseOver = (0, react_1.useCallback)(function () {
        if (state !== 'disabled') {
            setIsLabelHovered(true);
        }
    }, [setIsLabelHovered, state]);
    var onLabelMouseLeave = (0, react_1.useCallback)(function () {
        if (state !== 'disabled') {
            setIsLabelHovered(false);
            setIsInputActive(false);
        }
    }, [setIsLabelHovered, state]);
    var theme = (0, theme_1.useTheme)();
    var iconSize = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "".concat(path, ".").concat(size, ".icon"), 'icon', 'size');
    var _m = (0, overrides_1.getComponentOverrides)(overrides === null || overrides === void 0 ? void 0 : overrides.icon, defaultSwitchComponent, {
        state: state,
        checked: checked,
        size: size,
        iconSize: iconSize,
        parentOverrides: (0, logical_properties_1.omitLogicalPropsFromOverrides)(overrides),
        isFocused: isInputFocused,
        isHovered: isLabelHovered || isInputFocused,
    }), CheckIcon = _m[0], checkIconProps = _m[1];
    var labelElement = label && (react_1.default.createElement(styled_1.StyledLabel, { path: path, size: size, overrides: overrides, state: state }, label));
    var _o = (0, react_1.useState)(''), switchPadding = _o[0], setSwitchPadding = _o[1];
    var switchRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        setSwitchPadding(getComputedStyle(switchRef.current).paddingInline);
    }, []);
    return (react_1.default.createElement(styled_1.StyledSwitchAndLabelWrapper, tslib_1.__assign({ as: label ? 'label' : 'div', state: state, size: size, overrides: overrides }, (label ? labelAttributes : {}), { onMouseOver: onLabelMouseOver, onMouseLeave: onLabelMouseLeave, onMouseDown: onMouseDown, onMouseUp: onMouseUp, path: path }),
        labelPosition === 'start' && labelElement,
        react_1.default.createElement(styled_1.StyledSwitchContainer, { size: size, overrides: overrides, state: state, labelPosition: labelPosition, role: "presentation", path: path },
            !hideFeedback && (react_1.default.createElement(styled_1.StyledSwitchFeedback, { thumbOffset: switchPadding, centreOnThumb: path === 'switch', checked: checked, size: size, overrides: overrides, state: state, onClick: onFeedbackClick, "data-testid": "".concat(type, "-feedback"), isActive: isInputActive, isHovered: isLabelHovered, path: path })),
            react_1.default.createElement(styled_1.StyledSwitch, { ref: switchRef, checked: checked, state: state, overrides: overrides, size: size, isFocused: isInputFocused, isFocusedVisible: isInputFocusVisible, isHovered: isLabelHovered, feedbackIsVisible: isLabelHovered || isInputFocused, path: path },
                react_1.default.createElement(CheckIcon, tslib_1.__assign({}, checkIconProps)),
                react_1.default.createElement(styled_1.StyledInput, tslib_1.__assign({ ref: (0, compose_react_refs_1.default)(inputRef, ref), overrides: overrides, checked: checked, disabled: state === 'disabled', "data-testid": "".concat(type, "-input") }, restProps, { state: state, onFocus: (0, compose_event_handlers_1.composeEventHandlers)([onInputFocus, onFocus]), onBlur: (0, compose_event_handlers_1.composeEventHandlers)([onInputBlur, onBlur]), onChange: (0, compose_event_handlers_1.composeEventHandlers)([onInputChange, onChange]), path: path, type: type })))),
        labelPosition === 'end' && labelElement));
});
//# sourceMappingURL=base-switch.js.map