import { __assign, __rest } from "tslib";
import React from 'react';
import { IconFilledCircle } from '../icons';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { BaseSwitch } from '../base-switch';
import { useRadioGroupContext } from './radio-group';
import { composeEventHandlers } from '../utils/compose-event-handlers';
var DefaultIcon = function (_a) {
    var checked = _a.checked, iconSize = _a.iconSize, overrides = _a.overrides;
    return checked ? (React.createElement(IconFilledCircle, { overrides: __assign({ size: iconSize }, overrides) })) : null;
};
var ThemelessRadioButton = React.forwardRef(function (_a, inputRef) {
    var nameProp = _a.name, onChangeProp = _a.onChange, 
    /* istanbul ignore next */
    _b = _a.checked, 
    /* istanbul ignore next */
    checkedProp = _b === void 0 ? false : _b, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'radio-button' : _c, props = __rest(_a, ["name", "onChange", "checked", "eventOriginator"]);
    var radioGroup = useRadioGroupContext();
    var onChange = composeEventHandlers([
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
    return (React.createElement(BaseSwitch, __assign({ path: "radioButton", type: "radio", ref: inputRef, name: name, onChange: onChange, checked: checked, eventOriginator: eventOriginator }, props, { defaultSwitchSelectorComponent: DefaultIcon })));
});
export var RadioButton = withOwnTheme(ThemelessRadioButton)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=radio-button.js.map