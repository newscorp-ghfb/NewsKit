"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectionListOption = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var icons_1 = require("../icons");
var instrumentation_1 = require("../instrumentation");
var theme_1 = require("../theme");
var compose_event_handlers_1 = require("../utils/compose-event-handlers");
var get_token_1 = require("../utils/get-token");
var styled_1 = require("./styled");
exports.SelectionListOption = react_1.default.forwardRef(function (_a, forwardRef) {
    var children = _a.children, selected = _a.selected, selectedIcon = _a.selectedIcon, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.eventContext, eventContext = _c === void 0 ? {} : _c, _d = _a.eventOriginator, eventOriginator = _d === void 0 ? 'selection-list-option' : _d, onClickProp = _a.onClick, restProps = tslib_1.__rest(_a, ["children", "selected", "selectedIcon", "overrides", "eventContext", "eventOriginator", "onClick"]);
    var theme = (0, theme_1.useTheme)();
    var iconSize = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "selectionListOption.icon", 'icon', 'iconSize');
    var iconStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, "selectionListOption.icon", '', 'stylePreset');
    var renderIcon = function () {
        if (selectedIcon)
            return selectedIcon;
        return (react_1.default.createElement(icons_1.IconFilledCheck, { overrides: { size: iconSize, stylePreset: iconStylePreset } }));
    };
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var onClick = (0, compose_event_handlers_1.composeEventHandlers)([
        onClickProp,
        function () {
            return fireEvent({
                originator: eventOriginator,
                trigger: instrumentation_1.EventTrigger.Click,
                context: tslib_1.__assign({}, eventContext),
            });
        },
    ]);
    return (react_1.default.createElement(styled_1.StyledSelectionListOption, tslib_1.__assign({ ref: forwardRef, role: "menuitemradio", "aria-checked": !!selected, selected: selected, overrides: overrides, tabIndex: selected ? 0 : -1, onClick: onClick }, restProps),
        children,
        selected && renderIcon()));
});
//# sourceMappingURL=selection-list-option.js.map