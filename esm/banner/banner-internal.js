import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledBannerContainer, StyledMaxWidthContainer, StyledContentContainer, StyledIconContainer, StyledMessageContainer, StyledActionsContainer, StyledIconContentContainer, StyledTitleContainer, } from './styled';
import { renderIfReactComponent } from '../utils/component';
import { StackChild } from '../stack-child';
import { useTheme } from '../theme';
import { useReactKeys } from '../utils/hooks';
import { Button } from '../button';
import { IconFilledClose } from '../icons';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { IconButton } from '../icon-button';
import { deepMerge } from '../utils';
import { mergeBreakpointObject } from '../utils/merge-breakpoint-object';
import { Cell, Grid } from '../grid';
import { childrenIsString } from '../utils/react-children-utilities';
import { omitLogicalPropsFromOverrides } from '../utils/logical-properties';
var gridOverrides = [
    'xsColumnGutter',
    'smColumnGutter',
    'mdColumnGutter',
    'lgColumnGutter',
    'xlColumnGutter',
    'xsRowGutter',
    'smRowGutter',
    'mdRowGutter',
    'lgRowGutter',
    'xlRowGutter',
    'xsMargin',
    'smMargin',
    'mdMargin',
    'lgMargin',
    'xlMargin',
];
export var BannerInternal = React.forwardRef(function (_a, ref) {
    var _b, _c, _d, _e;
    var actions = _a.actions, children = _a.children, icon = _a.icon, overrides = _a.overrides, layout = _a.layout, _f = _a.closeButtonLabel, closeButtonLabel = _f === void 0 ? 'Close' : _f, onClose = _a.onClose, title = _a.title, restProps = __rest(_a, ["actions", "children", "icon", "overrides", "layout", "closeButtonLabel", "onClose", "title"]);
    var theme = useTheme();
    var closeButtonStyles = __assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.banner[layout].actions.closeButton, filterOutFalsyProperties((_b = overrides === null || overrides === void 0 ? void 0 : overrides.actions) === null || _b === void 0 ? void 0 : _b.closeButton)));
    var actionsCount = actions ? actions.length : 0;
    var actionKeys = useReactKeys(actionsCount);
    var actionsSpacing = ((_c = overrides === null || overrides === void 0 ? void 0 : overrides.actions) === null || _c === void 0 ? void 0 : _c.spaceInline) ||
        theme.componentDefaults.banner[layout].actions.spaceInline;
    var nonLogicalOverrides = omitLogicalPropsFromOverrides(overrides);
    return (React.createElement(StyledBannerContainer, __assign({ ref: ref, role: "region", "data-testid": "banner-container", overrides: overrides, layout: layout }, restProps),
        React.createElement(Grid, __assign({}, gridOverrides.reduce(function (prev, next) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[next] = 'space000', _a)));
        }, {}), (_d = overrides === null || overrides === void 0 ? void 0 : overrides.grid) === null || _d === void 0 ? void 0 : _d.props),
            React.createElement(Cell, __assign({ xs: 12 }, (_e = overrides === null || overrides === void 0 ? void 0 : overrides.cell) === null || _e === void 0 ? void 0 : _e.props),
                React.createElement(StyledMaxWidthContainer, { flow: layout === 'vertical' ? 'vertical-center' : 'horizontal-center', stackDistribution: "flex-start", wrap: "nowrap", layout: layout, overrides: nonLogicalOverrides },
                    React.createElement(StyledIconContentContainer, { flow: "horizontal-top", stackDistribution: "flex-start", wrap: "nowrap", layout: layout, overrides: nonLogicalOverrides, height: "auto" },
                        icon && (React.createElement(StyledIconContainer, { layout: layout, overrides: nonLogicalOverrides }, icon)),
                        React.createElement(StyledContentContainer, null,
                            title && (React.createElement(StyledTitleContainer, { as: "span", layout: layout, overrides: nonLogicalOverrides }, title)),
                            React.createElement(StyledMessageContainer, { layout: layout, overrides: nonLogicalOverrides, as: childrenIsString(children) ? 'p' : 'div' }, children))),
                    ((actions === null || actions === void 0 ? void 0 : actions.length) || onClose) && (React.createElement(StyledActionsContainer, { flow: layout === 'vertical'
                            ? 'vertical-center'
                            : 'horizontal-center', stackDistribution: "flex-start", spaceInline: actionsSpacing, layout: layout },
                        onClose && layout === 'vertical' && (React.createElement(StackChild, { key: "banner-close-button", alignSelf: "stretch" },
                            React.createElement(Button, { overrides: __assign(__assign({}, closeButtonStyles), { width: '100%' }), onClick: onClose, "data-testid": "banner-close-button", eventOriginator: "banner-close" }, closeButtonLabel))),
                        actions &&
                            actionKeys.length &&
                            actions.map(function (action, idx) { return (React.createElement(StackChild, { key: actionKeys[idx], alignSelf: layout === 'vertical' ? 'stretch' : 'auto' }, renderIfReactComponent(action))); }),
                        onClose && layout === 'horizontal' && (React.createElement(IconButton, { key: "banner-close-button-horizontal", "data-testid": "banner-close-button", "aria-label": closeButtonLabel, size: "small", overrides: closeButtonStyles, onClick: onClose, eventOriginator: "banner-close" },
                            React.createElement(IconFilledClose, null))))))))));
});
//# sourceMappingURL=banner-internal.js.map