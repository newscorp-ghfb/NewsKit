"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDialogView = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var icons_1 = require("../icons");
var deep_merge_1 = require("../utils/deep-merge");
var filter_object_1 = require("../utils/filter-object");
var merge_breakpoint_object_1 = require("../utils/merge-breakpoint-object");
var theme_1 = require("../theme");
var screen_reader_only_1 = require("../screen-reader-only");
var hooks_1 = require("../utils/hooks");
var icon_button_1 = require("../icon-button");
exports.BaseDialogView = react_1.default.forwardRef(function (_a, panelRef) {
    var handleCloseButtonClick = _a.handleCloseButtonClick, className = _a.className, path = _a.path, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, closePosition = _a.closePosition, header = _a.header, ariaDescribedby = _a.ariaDescribedby, ariaLabelledby = _a.ariaLabelledby, children = _a.children, open = _a.open, disableFocusTrap = _a.disableFocusTrap, transitionInProgress = _a.transitionInProgress, _c = _a.inline, inline = _c === void 0 ? false : _c, props = tslib_1.__rest(_a, ["handleCloseButtonClick", "className", "path", "overrides", "closePosition", "header", "ariaDescribedby", "ariaLabelledby", "children", "open", "disableFocusTrap", "transitionInProgress", "inline"]);
    var listDialogItemNotification = (0, hooks_1.useReactKeys)(1)[0];
    var theme = (0, theme_1.useTheme)();
    var closeButtonOverrides = tslib_1.__assign({}, (0, deep_merge_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults[path].closeButton, (0, filter_object_1.filterOutFalsyProperties)(overrides.closeButton)));
    var MoveFocusInsideWhenFocusTrapDisabled = disableFocusTrap && open && !transitionInProgress
        ? function (_a) {
            var focusChildren = _a.children;
            return (react_1.default.createElement(styled_1.StyledMoveFocusInside, { closePosition: closePosition }, focusChildren));
        }
        : react_1.default.Fragment;
    return (react_1.default.createElement(styled_1.StyledDialogPanel, tslib_1.__assign({ ref: panelRef, className: className, role: "dialog", "aria-modal": disableFocusTrap ? 'false' : 'true', "aria-describedby": ariaDescribedby, "aria-labelledby": ariaLabelledby, overrides: overrides, path: path, inline: inline, "$open": open, closePosition: closePosition }, props),
        react_1.default.createElement(MoveFocusInsideWhenFocusTrapDisabled, null,
            header === undefined && closePosition === 'none' ? null : (react_1.default.createElement(styled_1.StyledDialogHeaderBG, { overrides: overrides, path: path })),
            header !== undefined && (react_1.default.createElement(styled_1.StyledDialogHeader, { overrides: overrides, path: path }, header)),
            react_1.default.createElement(styled_1.StyledDialogContent, { "data-testid": "dialog-content", path: path, overrides: overrides }, children),
            closePosition !== 'none' && (react_1.default.createElement(styled_1.StyledCloseButtonContainer, { path: path, overrides: overrides, closePosition: closePosition },
                react_1.default.createElement(icon_button_1.IconButton, { "aria-label": "close", "aria-describedby": disableFocusTrap ? listDialogItemNotification : undefined, onClick: handleCloseButtonClick, overrides: closeButtonOverrides, size: "medium", eventOriginator: "".concat(path, "-close") },
                    react_1.default.createElement(icons_1.IconFilledClose, null)))),
            disableFocusTrap && (react_1.default.createElement(screen_reader_only_1.ScreenReaderOnly, { id: listDialogItemNotification }, "With the next tab you will be leaving the dialog window.")))));
});
//# sourceMappingURL=base-dialog-view.js.map