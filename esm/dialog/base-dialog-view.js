import { __assign, __rest } from "tslib";
import React from 'react';
import { StyledDialogPanel, StyledDialogContent, StyledDialogHeader, StyledDialogHeaderBG, StyledMoveFocusInside, StyledCloseButtonContainer, } from './styled';
import { IconFilledClose } from '../icons';
import { deepMerge } from '../utils/deep-merge';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { mergeBreakpointObject } from '../utils/merge-breakpoint-object';
import { useTheme } from '../theme';
import { ScreenReaderOnly } from '../screen-reader-only';
import { useReactKeys } from '../utils/hooks';
import { IconButton } from '../icon-button';
export var BaseDialogView = React.forwardRef(function (_a, panelRef) {
    var handleCloseButtonClick = _a.handleCloseButtonClick, className = _a.className, path = _a.path, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, closePosition = _a.closePosition, header = _a.header, ariaDescribedby = _a.ariaDescribedby, ariaLabelledby = _a.ariaLabelledby, children = _a.children, open = _a.open, disableFocusTrap = _a.disableFocusTrap, transitionInProgress = _a.transitionInProgress, _c = _a.inline, inline = _c === void 0 ? false : _c, props = __rest(_a, ["handleCloseButtonClick", "className", "path", "overrides", "closePosition", "header", "ariaDescribedby", "ariaLabelledby", "children", "open", "disableFocusTrap", "transitionInProgress", "inline"]);
    var listDialogItemNotification = useReactKeys(1)[0];
    var theme = useTheme();
    var closeButtonOverrides = __assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults[path].closeButton, filterOutFalsyProperties(overrides.closeButton)));
    var MoveFocusInsideWhenFocusTrapDisabled = disableFocusTrap && open && !transitionInProgress
        ? function (_a) {
            var focusChildren = _a.children;
            return (React.createElement(StyledMoveFocusInside, { closePosition: closePosition }, focusChildren));
        }
        : React.Fragment;
    return (React.createElement(StyledDialogPanel, __assign({ ref: panelRef, className: className, role: "dialog", "aria-modal": disableFocusTrap ? 'false' : 'true', "aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledby, overrides: overrides, path: path, inline: inline, "$open": open, closePosition: closePosition }, props),
        React.createElement(MoveFocusInsideWhenFocusTrapDisabled, null,
            header === undefined && closePosition === 'none' ? null : (React.createElement(StyledDialogHeaderBG, { overrides: overrides, path: path })),
            header !== undefined && (React.createElement(StyledDialogHeader, { overrides: overrides, path: path }, header)),
            React.createElement(StyledDialogContent, { "data-testid": "dialog-content", path: path, overrides: overrides }, children),
            closePosition !== 'none' && (React.createElement(StyledCloseButtonContainer, { path: path, overrides: overrides, closePosition: closePosition },
                React.createElement(IconButton, { "aria-label": "close", "aria-describedby": disableFocusTrap ? listDialogItemNotification : undefined, onClick: handleCloseButtonClick, overrides: closeButtonOverrides, size: "medium", eventOriginator: "".concat(path, "-close") },
                    React.createElement(IconFilledClose, null)))),
            disableFocusTrap && (React.createElement(ScreenReaderOnly, { id: listDialogItemNotification }, "With the next tab you will be leaving the dialog window.")))));
});
//# sourceMappingURL=base-dialog-view.js.map