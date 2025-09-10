import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledGridLayout } from './styled';
import { useTheme } from '../theme';
import { getToken } from '../utils/get-token';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { TextBlock } from '../text-block';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
export var BaseFlag = React.forwardRef(function (_a, ref) {
    var children = _a.children, overrides = _a.overrides, loading = _a.loading, disabled = _a.disabled, as = _a.as, props = __rest(_a, ["children", "overrides", "loading", "disabled", "as"]);
    var theme = useTheme();
    return (React.createElement(StyledGridLayout, __assign({}, props, { "$loading": loading, "$disabled": disabled, disabled: as !== 'a' && disabled, overrides: overrides, ref: ref, as: as, justifyContent: "center", alignContent: "center", alignItems: "center", justifyItems: "center", columnGap: getToken({ theme: theme, overrides: overrides }, '', '', 'spaceInline'), columns: "repeat(".concat(React.Children.toArray(children).length, ", auto)"), inline: true }), React.Children.map(children, function (child) {
        return ['string', 'number'].includes(typeof child) ? (React.createElement(TextBlock, { as: "span", typographyPreset: overrides && overrides.typographyPreset }, child)) : (child);
    })));
});
var ThemelessFlag = React.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, props = __rest(_a, ["overrides"]);
    var theme = useTheme();
    var _c = props.size, size = _c === void 0 ? 'medium' : _c;
    return (React.createElement(BaseFlag, __assign({ "data-testid": "flag" }, props, { loading: false, ref: ref, overrides: __assign(__assign({}, theme.componentDefaults.flag[size]), filterOutFalsyProperties(overrides)) })));
});
export var Flag = withOwnTheme(ThemelessFlag)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=flag.js.map