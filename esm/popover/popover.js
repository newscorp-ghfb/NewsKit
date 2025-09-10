import { __assign, __rest } from "tslib";
import * as React from 'react';
import { useClick, useDismiss, useId, useInteractions as floatingUiUseInteractions, } from '@floating-ui/react-dom-interactions';
import { withOwnTheme } from '../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import { BaseFloatingElement } from '../base-floating-element/base-floating-element';
import { IconButton } from '../icon-button';
import { IconFilledClose } from '../icons';
import { StyledPopoverCloseButtonContainer, StyledPopoverContent, StyledPopoverHeader, StyledPopoverInnerPanel, } from './styled';
import { useTheme } from '../theme';
import { deepMerge } from '../utils';
import { mergeBreakpointObject } from '../utils/merge-breakpoint-object';
import { filterOutFalsyProperties } from '../utils/filter-object';
var ThemelessPopover = React.forwardRef(function (_a, ref) {
    var children = _a.children, content = _a.content, header = _a.header, _b = _a.closePosition, closePosition = _b === void 0 ? 'right' : _b, _c = _a.overrides, overrides = _c === void 0 ? {} : _c, handleCloseButtonClick = _a.handleCloseButtonClick, _d = _a.enableDismiss, enableDismiss = _d === void 0 ? false : _d, _e = _a.disableFocusManagement, disableFocusManagement = _e === void 0 ? false : _e, _f = _a.dismissOnBlur, dismissOnBlur = _f === void 0 ? false : _f, props = __rest(_a, ["children", "content", "header", "closePosition", "overrides", "handleCloseButtonClick", "enableDismiss", "disableFocusManagement", "dismissOnBlur"]);
    var buildContextAriaAttributes = function (_a) {
        var _b = _a.floating, id = _b.id, open = _b.open;
        return ({
            'aria-haspopup': children.props['aria-haspopup'] || 'dialog',
            'aria-controls': open ? id : undefined,
        });
    };
    var theme = useTheme();
    var closeButtonOverrides = __assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.popover.closeButton, filterOutFalsyProperties(overrides.closeButton)));
    var headerId = "header-".concat(useId());
    var buildFloatingElementAriaAttributes = function (_a) {
        var id = _a.ref.id;
        return ({
            'aria-labelledby': header ? undefined : id,
            'aria-describedby': header ? headerId : undefined,
        });
    };
    var useInteractions = function (context) {
        return floatingUiUseInteractions([
            useClick(context),
            useDismiss(context, {
                enabled: enableDismiss,
            }),
        ]);
    };
    if (!content) {
        return children;
    }
    return (React.createElement(BaseFloatingElement, __assign({ ref: ref, path: "popover", content: function (_a, _b) {
            var onClick = _a.onClick;
            var onOpenChange = _b.onOpenChange;
            return (React.createElement(StyledPopoverInnerPanel, { closePosition: closePosition, onBlur: function () {
                    if (dismissOnBlur) {
                        onOpenChange(false);
                    }
                } },
                header !== undefined && (React.createElement(StyledPopoverHeader, { id: headerId, "data-testid": "header-text", overrides: overrides }, header)),
                React.createElement(StyledPopoverContent, { overrides: overrides }, content),
                closePosition !== 'none' && (React.createElement(StyledPopoverCloseButtonContainer, { overrides: overrides, closePosition: closePosition },
                    React.createElement(IconButton, { onClick: function (e) {
                            onClick(e);
                            if (handleCloseButtonClick) {
                                handleCloseButtonClick();
                            }
                        }, eventOriginator: "popover-close", "data-testid": "close-button", "aria-label": "close", overrides: closeButtonOverrides, size: "medium" },
                        React.createElement(IconFilledClose, null))))));
        }, buildRefElAriaAttributes: buildContextAriaAttributes, buildFloatingElAriaAttributes: buildFloatingElementAriaAttributes, useInteractions: useInteractions, role: "dialog", overrides: overrides, disableFocusManagement: disableFocusManagement, dismissOnBlur: dismissOnBlur }, props), children));
});
export var Popover = withOwnTheme(ThemelessPopover)({
    defaults: defaults,
    stylePresets: stylePresets,
});
//# sourceMappingURL=popover.js.map