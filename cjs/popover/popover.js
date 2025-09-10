"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Popover = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_dom_interactions_1 = require("@floating-ui/react-dom-interactions");
var with_own_theme_1 = require("../utils/with-own-theme");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var base_floating_element_1 = require("../base-floating-element/base-floating-element");
var icon_button_1 = require("../icon-button");
var icons_1 = require("../icons");
var styled_1 = require("./styled");
var theme_1 = require("../theme");
var utils_1 = require("../utils");
var merge_breakpoint_object_1 = require("../utils/merge-breakpoint-object");
var filter_object_1 = require("../utils/filter-object");
var ThemelessPopover = React.forwardRef(function (_a, ref) {
    var children = _a.children, content = _a.content, header = _a.header, _b = _a.closePosition, closePosition = _b === void 0 ? 'right' : _b, _c = _a.overrides, overrides = _c === void 0 ? {} : _c, handleCloseButtonClick = _a.handleCloseButtonClick, _d = _a.enableDismiss, enableDismiss = _d === void 0 ? false : _d, _e = _a.disableFocusManagement, disableFocusManagement = _e === void 0 ? false : _e, _f = _a.dismissOnBlur, dismissOnBlur = _f === void 0 ? false : _f, props = tslib_1.__rest(_a, ["children", "content", "header", "closePosition", "overrides", "handleCloseButtonClick", "enableDismiss", "disableFocusManagement", "dismissOnBlur"]);
    var buildContextAriaAttributes = function (_a) {
        var _b = _a.floating, id = _b.id, open = _b.open;
        return ({
            'aria-haspopup': children.props['aria-haspopup'] || 'dialog',
            'aria-controls': open ? id : undefined,
        });
    };
    var theme = (0, theme_1.useTheme)();
    var closeButtonOverrides = tslib_1.__assign({}, (0, utils_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.popover.closeButton, (0, filter_object_1.filterOutFalsyProperties)(overrides.closeButton)));
    var headerId = "header-".concat((0, react_dom_interactions_1.useId)());
    var buildFloatingElementAriaAttributes = function (_a) {
        var id = _a.ref.id;
        return ({
            'aria-labelledby': header ? undefined : id,
            'aria-describedby': header ? headerId : undefined,
        });
    };
    var useInteractions = function (context) {
        return (0, react_dom_interactions_1.useInteractions)([
            (0, react_dom_interactions_1.useClick)(context),
            (0, react_dom_interactions_1.useDismiss)(context, {
                enabled: enableDismiss,
            }),
        ]);
    };
    if (!content) {
        return children;
    }
    return (React.createElement(base_floating_element_1.BaseFloatingElement, tslib_1.__assign({ ref: ref, path: "popover", content: function (_a, _b) {
            var onClick = _a.onClick;
            var onOpenChange = _b.onOpenChange;
            return (React.createElement(styled_1.StyledPopoverInnerPanel, { closePosition: closePosition, onBlur: function () {
                    if (dismissOnBlur) {
                        onOpenChange(false);
                    }
                } },
                header !== undefined && (React.createElement(styled_1.StyledPopoverHeader, { id: headerId, "data-testid": "header-text", overrides: overrides }, header)),
                React.createElement(styled_1.StyledPopoverContent, { overrides: overrides }, content),
                closePosition !== 'none' && (React.createElement(styled_1.StyledPopoverCloseButtonContainer, { overrides: overrides, closePosition: closePosition },
                    React.createElement(icon_button_1.IconButton, { onClick: function (e) {
                            onClick(e);
                            if (handleCloseButtonClick) {
                                handleCloseButtonClick();
                            }
                        }, eventOriginator: "popover-close", "data-testid": "close-button", "aria-label": "close", overrides: closeButtonOverrides, size: "medium" },
                        React.createElement(icons_1.IconFilledClose, null))))));
        }, buildRefElAriaAttributes: buildContextAriaAttributes, buildFloatingElAriaAttributes: buildFloatingElementAriaAttributes, useInteractions: useInteractions, role: "dialog", overrides: overrides, disableFocusManagement: disableFocusManagement, dismissOnBlur: dismissOnBlur }, props), children));
});
exports.Popover = (0, with_own_theme_1.withOwnTheme)(ThemelessPopover)({
    defaults: defaults_1.default,
    stylePresets: style_presets_1.default,
});
//# sourceMappingURL=popover.js.map