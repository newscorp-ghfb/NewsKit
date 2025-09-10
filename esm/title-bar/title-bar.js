import { __assign, __rest } from "tslib";
import React from 'react';
import { Headline } from '../headline';
import { Hidden } from '../grid/visibility';
import { useTheme } from '../theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { StyledBlock, StyledStackContainer } from './styled';
var ThemelessTitleBar = React.forwardRef(function (props, ref) {
    var children = props.children, _a = props.hideActionItemOn, hideActionItemOn = _a === void 0 ? { xs: true } : _a, _b = props.headingAs, headingAs = _b === void 0 ? 'h3' : _b, ActionItem = props.actionItem, _c = props.overrides, overrides = _c === void 0 ? {} : _c, rest = __rest(props, ["children", "hideActionItemOn", "headingAs", "actionItem", "overrides"]);
    var theme = useTheme();
    var hasActions = !!ActionItem;
    var addTitleBarHeadingOverrides = function () {
        var headingOverrides = {};
        if (!overrides.heading) {
            return headingOverrides;
        }
        if (overrides.heading.typographyPreset) {
            headingOverrides.typographyPreset = overrides.heading.typographyPreset;
        }
        if (overrides.heading.stylePreset) {
            headingOverrides.heading = { stylePreset: overrides.heading.stylePreset };
        }
        return headingOverrides;
    };
    var headlineOverrides = __assign({ typographyPreset: __assign({}, theme.componentDefaults.titleBar.heading.typographyPreset), heading: {
            stylePreset: theme.componentDefaults.titleBar.heading.stylePreset,
        } }, addTitleBarHeadingOverrides());
    var blockOverrides = { spaceInline: hasActions ? 'space040' : '' };
    return (React.createElement(StyledStackContainer, __assign({ overrides: overrides, flow: "horizontal-center", stackDistribution: "space-between", ref: ref }, rest),
        React.createElement(StyledBlock, __assign({}, blockOverrides),
            React.createElement(Headline, { headingAs: headingAs, overrides: headlineOverrides }, children)),
        ActionItem && (React.createElement(Hidden, __assign({}, hideActionItemOn),
            React.createElement(ActionItem, null)))));
});
export var TitleBar = withOwnTheme(ThemelessTitleBar)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=title-bar.js.map