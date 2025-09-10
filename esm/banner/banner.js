import { __assign, __rest } from "tslib";
import React from 'react';
import { Visible } from '../grid/visibility';
import { BannerInternal } from './banner-internal';
import { useTheme } from '../theme';
import { getVisibleBreakpointsForLayout } from './utils';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
var ThemelessBanner = React.forwardRef(function (_a, ref) {
    var _b;
    var _c = _a.layout, layout = _c === void 0 ? {
        xs: 'vertical',
        md: 'horizontal',
    } : _c, restProps = __rest(_a, ["layout"]);
    var layoutHasMQ = false;
    var theme = useTheme();
    var horizontalBreakpoints = {};
    var verticalBreakpoints = {};
    if (typeof layout === 'object') {
        layoutHasMQ = true;
        (_b = getVisibleBreakpointsForLayout(layout, theme), verticalBreakpoints = _b.verticalBreakpoints, horizontalBreakpoints = _b.horizontalBreakpoints);
    }
    return (React.createElement(React.Fragment, null, layoutHasMQ ? (React.createElement(React.Fragment, null,
        React.createElement(Visible, __assign({}, verticalBreakpoints),
            React.createElement(BannerInternal, __assign({ ref: ref }, restProps, { layout: "vertical" }))),
        React.createElement(Visible, __assign({}, horizontalBreakpoints),
            React.createElement(BannerInternal, __assign({ ref: ref }, restProps, { layout: "horizontal" }))))) : (React.createElement(BannerInternal, __assign({ ref: ref }, restProps, { layout: layout })))));
});
export var Banner = withOwnTheme(ThemelessBanner)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=banner.js.map