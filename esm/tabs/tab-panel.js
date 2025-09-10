import React, { useState } from 'react';
import { StyledTabPanelBlock } from './styled';
// This function can be removed once Safari supports "focus-visibile" and the outline is removed on click
var preventClickFocus = function (e) {
    var currentTarget = e.currentTarget;
    var isFocusedDuringMouseDown = currentTarget === document.activeElement;
    /* istanbul ignore next */
    requestAnimationFrame(function () {
        if (isFocusedDuringMouseDown && document.body.contains(currentTarget)) {
            currentTarget.focus();
            return;
        }
        if (!isFocusedDuringMouseDown && document.body.contains(currentTarget)) {
            currentTarget.blur();
        }
    });
};
export var TabPanel = function (_a) {
    var children = _a.children, id = _a.id, 
    /* istanbul ignore next */
    _b = _a.selected, 
    /* istanbul ignore next */
    selected = _b === void 0 ? false : _b;
    var _c = useState(false), focused = _c[0], setFocused = _c[1];
    return (React.createElement(StyledTabPanelBlock, { onMouseDown: preventClickFocus, "data-testid": "tab-panel", as: "div", "aria-labelledby": id, role: "tabpanel", "aria-hidden": !selected, selected: selected, tabIndex: selected ? 0 : -1, hidden: !selected, onFocus: function () { return setFocused(true); }, onBlur: function () { return setFocused(false); }, isFocused: focused }, children));
};
//# sourceMappingURL=tab-panel.js.map