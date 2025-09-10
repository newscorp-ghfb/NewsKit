import { __assign, __rest } from "tslib";
import React from 'react';
import { IconFilledCheck } from '../icons';
import { EventTrigger, useInstrumentation } from '../instrumentation';
import { useTheme } from '../theme';
import { composeEventHandlers } from '../utils/compose-event-handlers';
import { getToken } from '../utils/get-token';
import { StyledSelectionListOption } from './styled';
export var SelectionListOption = React.forwardRef(function (_a, forwardRef) {
    var children = _a.children, selected = _a.selected, selectedIcon = _a.selectedIcon, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, _c = _a.eventContext, eventContext = _c === void 0 ? {} : _c, _d = _a.eventOriginator, eventOriginator = _d === void 0 ? 'selection-list-option' : _d, onClickProp = _a.onClick, restProps = __rest(_a, ["children", "selected", "selectedIcon", "overrides", "eventContext", "eventOriginator", "onClick"]);
    var theme = useTheme();
    var iconSize = getToken({ theme: theme, overrides: overrides }, "selectionListOption.icon", 'icon', 'iconSize');
    var iconStylePreset = getToken({ theme: theme, overrides: overrides }, "selectionListOption.icon", '', 'stylePreset');
    var renderIcon = function () {
        if (selectedIcon)
            return selectedIcon;
        return (React.createElement(IconFilledCheck, { overrides: { size: iconSize, stylePreset: iconStylePreset } }));
    };
    var fireEvent = useInstrumentation().fireEvent;
    var onClick = composeEventHandlers([
        onClickProp,
        function () {
            return fireEvent({
                originator: eventOriginator,
                trigger: EventTrigger.Click,
                context: __assign({}, eventContext),
            });
        },
    ]);
    return (React.createElement(StyledSelectionListOption, __assign({ ref: forwardRef, role: "menuitemradio", "aria-checked": !!selected, selected: selected, overrides: overrides, tabIndex: selected ? 0 : -1, onClick: onClick }, restProps),
        children,
        selected && renderIcon()));
});
//# sourceMappingURL=selection-list-option.js.map