import { __assign, __rest } from "tslib";
import React from 'react';
import { filterOutFalsyProperties } from '../utils/filter-object';
import { useTheme } from '../theme/emotion';
import { StyledTabButton } from './styled';
export var TabButton = React.forwardRef(function (_a, ref) {
    var children = _a.children, 
    /* istanbul ignore next */
    _b = _a.overrides, 
    /* istanbul ignore next */
    overrides = _b === void 0 ? {} : _b, 
    /* istanbul ignore next */
    _c = _a.size, 
    /* istanbul ignore next */
    size = _c === void 0 ? 'medium' : _c, ariaLabel = _a.ariaLabel, selected = _a.selected, id = _a.id, 
    /* istanbul ignore next */
    _d = _a.align, 
    /* istanbul ignore next */
    align = _d === void 0 ? 'center' : _d, _e = _a.dataTestId, dataTestId = _e === void 0 ? 'tab' : _e, props = __rest(_a, ["children", "overrides", "size", "ariaLabel", "selected", "id", "align", "dataTestId"]);
    var theme = useTheme();
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' &&
        typeof theme.componentDefaults.tab !== 'object') {
        // eslint-disable-next-line no-console
        console.error('<Tab /> component needs to be used as child of <Tabs />');
        return null;
    }
    var tabSettings = __assign(__assign({}, theme.componentDefaults.tab[size]), filterOutFalsyProperties(overrides));
    return (React.createElement(StyledTabButton, __assign({ "data-testid": dataTestId, role: "tab", "aria-label": ariaLabel, ref: ref, "aria-selected": Boolean(selected), "aria-controls": id, id: id, tabIndex: selected ? 0 : -1, selected: selected }, props, { overrides: tabSettings, align: align }), children));
});
TabButton.displayName = 'TabButton';
//# sourceMappingURL=tab-button.js.map