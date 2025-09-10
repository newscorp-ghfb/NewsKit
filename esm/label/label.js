import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledLabel } from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var ThemelessLabel = React.forwardRef(function (_a, ref) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, children = _a.children, state = _a.state, props = __rest(_a, ["size", "children", "state"]);
    return (React.createElement(StyledLabel, __assign({ ref: ref, "aria-disabled": state === 'disabled' ? true : undefined, size: size, state: state }, props), children));
});
export var Label = withOwnTheme(ThemelessLabel)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=label.js.map