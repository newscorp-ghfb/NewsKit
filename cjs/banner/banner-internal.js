"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerInternal = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var component_1 = require("../utils/component");
var stack_child_1 = require("../stack-child");
var theme_1 = require("../theme");
var hooks_1 = require("../utils/hooks");
var button_1 = require("../button");
var icons_1 = require("../icons");
var filter_object_1 = require("../utils/filter-object");
var icon_button_1 = require("../icon-button");
var utils_1 = require("../utils");
var merge_breakpoint_object_1 = require("../utils/merge-breakpoint-object");
var grid_1 = require("../grid");
var react_children_utilities_1 = require("../utils/react-children-utilities");
var logical_properties_1 = require("../utils/logical-properties");
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
exports.BannerInternal = react_1.default.forwardRef(function (_a, ref) {
    var _b, _c, _d, _e;
    var actions = _a.actions, children = _a.children, icon = _a.icon, overrides = _a.overrides, layout = _a.layout, _f = _a.closeButtonLabel, closeButtonLabel = _f === void 0 ? 'Close' : _f, onClose = _a.onClose, title = _a.title, restProps = tslib_1.__rest(_a, ["actions", "children", "icon", "overrides", "layout", "closeButtonLabel", "onClose", "title"]);
    var theme = (0, theme_1.useTheme)();
    var closeButtonStyles = tslib_1.__assign({}, (0, utils_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.banner[layout].actions.closeButton, (0, filter_object_1.filterOutFalsyProperties)((_b = overrides === null || overrides === void 0 ? void 0 : overrides.actions) === null || _b === void 0 ? void 0 : _b.closeButton)));
    var actionsCount = actions ? actions.length : 0;
    var actionKeys = (0, hooks_1.useReactKeys)(actionsCount);
    var actionsSpacing = ((_c = overrides === null || overrides === void 0 ? void 0 : overrides.actions) === null || _c === void 0 ? void 0 : _c.spaceInline) ||
        theme.componentDefaults.banner[layout].actions.spaceInline;
    var nonLogicalOverrides = (0, logical_properties_1.omitLogicalPropsFromOverrides)(overrides);
    return (react_1.default.createElement(styled_1.StyledBannerContainer, tslib_1.__assign({ ref: ref, role: "region", "data-testid": "banner-container", overrides: overrides, layout: layout }, restProps),
        react_1.default.createElement(grid_1.Grid, tslib_1.__assign({}, gridOverrides.reduce(function (prev, next) {
            var _a;
            return (tslib_1.__assign(tslib_1.__assign({}, prev), (_a = {}, _a[next] = 'space000', _a)));
        }, {}), (_d = overrides === null || overrides === void 0 ? void 0 : overrides.grid) === null || _d === void 0 ? void 0 : _d.props),
            react_1.default.createElement(grid_1.Cell, tslib_1.__assign({ xs: 12 }, (_e = overrides === null || overrides === void 0 ? void 0 : overrides.cell) === null || _e === void 0 ? void 0 : _e.props),
                react_1.default.createElement(styled_1.StyledMaxWidthContainer, { flow: layout === 'vertical' ? 'vertical-center' : 'horizontal-center', stackDistribution: "flex-start", wrap: "nowrap", layout: layout, overrides: nonLogicalOverrides },
                    react_1.default.createElement(styled_1.StyledIconContentContainer, { flow: "horizontal-top", stackDistribution: "flex-start", wrap: "nowrap", layout: layout, overrides: nonLogicalOverrides, height: "auto" },
                        icon && (react_1.default.createElement(styled_1.StyledIconContainer, { layout: layout, overrides: nonLogicalOverrides }, icon)),
                        react_1.default.createElement(styled_1.StyledContentContainer, null,
                            title && (react_1.default.createElement(styled_1.StyledTitleContainer, { as: "span", layout: layout, overrides: nonLogicalOverrides }, title)),
                            react_1.default.createElement(styled_1.StyledMessageContainer, { layout: layout, overrides: nonLogicalOverrides, as: (0, react_children_utilities_1.childrenIsString)(children) ? 'p' : 'div' }, children))),
                    ((actions === null || actions === void 0 ? void 0 : actions.length) || onClose) && (react_1.default.createElement(styled_1.StyledActionsContainer, { flow: layout === 'vertical'
                            ? 'vertical-center'
                            : 'horizontal-center', stackDistribution: "flex-start", spaceInline: actionsSpacing, layout: layout },
                        onClose && layout === 'vertical' && (react_1.default.createElement(stack_child_1.StackChild, { key: "banner-close-button", alignSelf: "stretch" },
                            react_1.default.createElement(button_1.Button, { overrides: tslib_1.__assign(tslib_1.__assign({}, closeButtonStyles), { width: '100%' }), onClick: onClose, "data-testid": "banner-close-button", eventOriginator: "banner-close" }, closeButtonLabel))),
                        actions &&
                            actionKeys.length &&
                            actions.map(function (action, idx) { return (react_1.default.createElement(stack_child_1.StackChild, { key: actionKeys[idx], alignSelf: layout === 'vertical' ? 'stretch' : 'auto' }, (0, component_1.renderIfReactComponent)(action))); }),
                        onClose && layout === 'horizontal' && (react_1.default.createElement(icon_button_1.IconButton, { key: "banner-close-button-horizontal", "data-testid": "banner-close-button", "aria-label": closeButtonLabel, size: "small", overrides: closeButtonStyles, onClick: onClose, eventOriginator: "banner-close" },
                            react_1.default.createElement(icons_1.IconFilledClose, null))))))))));
});
//# sourceMappingURL=banner-internal.js.map