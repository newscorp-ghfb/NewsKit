import { __assign, __rest } from "tslib";
import React from 'react';
import { Button } from '../button';
import { useTheme } from '../theme';
import { filterOutFalsyProperties } from '../utils/filter-object';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var ThemelessIconButton = React.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, props = __rest(_a, ["overrides"]);
    var theme = useTheme();
    var _c = props.size, size = _c === void 0 ? 'small' : _c;
    var iconButtonSettings = __assign(__assign({}, theme.componentDefaults.iconButton[size]), filterOutFalsyProperties(overrides));
    return (React.createElement(Button, __assign({}, props, { size: size, ref: ref, overrides: iconButtonSettings })));
});
export var IconButton = withOwnTheme(ThemelessIconButton)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=icon-button.js.map