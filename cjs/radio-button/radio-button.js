"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioButton = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("../icons");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var base_switch_1 = require("../base-switch");
var radio_group_1 = require("./radio-group");
var compose_event_handlers_1 = require("../utils/compose-event-handlers");
var DefaultIcon = function (_a) {
    var checked = _a.checked, iconSize = _a.iconSize, overrides = _a.overrides;
    return checked ? (react_1.default.createElement(icons_1.IconFilledCircle, { overrides: tslib_1.__assign({ size: iconSize }, overrides) })) : null;
};
var ThemelessRadioButton = react_1.default.forwardRef(function (_a, inputRef) {
    var nameProp = _a.name, onChangeProp = _a.onChange, 
    /* istanbul ignore next */
    _b = _a.checked, 
    /* istanbul ignore next */
    checkedProp = _b === void 0 ? false : _b, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'radio-button' : _c, props = tslib_1.__rest(_a, ["name", "onChange", "checked", "eventOriginator"]);
    var radioGroup = (0, radio_group_1.useRadioGroupContext)();
    var onChange = (0, compose_event_handlers_1.composeEventHandlers)([
        onChangeProp,
        radioGroup && radioGroup.onChange,
    ]);
    var name = nameProp;
    var checked = checkedProp;
    if (radioGroup) {
        checked = radioGroup.value === props.value;
        if (typeof name === 'undefined') {
            name = radioGroup.name;
        }
    }
    return (react_1.default.createElement(base_switch_1.BaseSwitch, tslib_1.__assign({ path: "radioButton", type: "radio", ref: inputRef, name: name, onChange: onChange, checked: checked, eventOriginator: eventOriginator }, props, { defaultSwitchSelectorComponent: DefaultIcon })));
});
exports.RadioButton = (0, with_own_theme_1.withOwnTheme)(ThemelessRadioButton)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=radio-button.js.map