import { __assign, __rest } from "tslib";
import React from 'react';
import { IconFilledCheck } from '../icons';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { BaseSwitch } from '../base-switch';
var DefaultCheckboxIcon = function (_a) {
    var checked = _a.checked, overrides = _a.overrides;
    return checked ? (React.createElement(IconFilledCheck, { overrides: __assign({ size: 'iconSize020' }, overrides) })) : null;
};
var ThemelessCheckbox = React.forwardRef(function (_a, inputRef) {
    var _b = _a.eventOriginator, eventOriginator = _b === void 0 ? 'checkbox' : _b, props = __rest(_a, ["eventOriginator"]);
    return (React.createElement(BaseSwitch, __assign({ path: "checkbox", ref: inputRef, type: "checkbox", eventOriginator: eventOriginator }, props, { defaultSwitchSelectorComponent: DefaultCheckboxIcon })));
});
export var Checkbox = withOwnTheme(ThemelessCheckbox)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=checkbox.js.map