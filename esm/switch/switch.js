import { __assign, __rest } from "tslib";
import React from 'react';
import { isValidElementType } from 'react-is';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { BaseSwitch } from '../base-switch';
import { StyledSwitchContainer, StyledThumb, StyledTrackIcon } from './styled';
var iconAsComponent = function (OverridesValue) {
    if (OverridesValue && isValidElementType(OverridesValue)) {
        return OverridesValue;
    }
    return null;
};
var SwitchTrackContents = function (props) {
    var _a = props, size = _a.size, checked = _a.checked, overrides = _a.parentOverrides, isFocused = _a.isFocused, isHovered = _a.isHovered, state = _a.state;
    var OnIcon = iconAsComponent(overrides.onIcon);
    var OffIcon = iconAsComponent(overrides.offIcon);
    var ThumbIcon = iconAsComponent(overrides.thumbIcon);
    return (React.createElement(StyledSwitchContainer, { size: size, overrides: overrides },
        React.createElement(StyledTrackIcon, { state: state, size: size, overrides: overrides, justifyContent: "flex-start" }, OnIcon && React.createElement(OnIcon, null)),
        React.createElement(StyledTrackIcon, { state: state, size: size, overrides: overrides, justifyContent: "flex-end" }, OffIcon && React.createElement(OffIcon, null)),
        React.createElement(StyledThumb, { size: size, checked: checked, isFocused: isFocused, isHovered: isHovered, overrides: overrides }, !!ThumbIcon && React.createElement(ThumbIcon, { checked: checked }))));
};
var ThemelessSwitch = React.forwardRef(function (_a, inputRef) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.eventOriginator, eventOriginator = _c === void 0 ? 'switch' : _c, rest = __rest(_a, ["overrides", "eventOriginator"]);
    return (React.createElement(BaseSwitch, __assign({ path: "switch", ref: inputRef, type: "checkbox", role: "switch", overrides: overrides, eventOriginator: eventOriginator }, rest, { defaultSwitchSelectorComponent: SwitchTrackContents })));
});
export var Switch = withOwnTheme(ThemelessSwitch)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=switch.js.map