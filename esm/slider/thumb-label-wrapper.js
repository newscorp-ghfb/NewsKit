import { __assign } from "tslib";
import React from 'react';
import { StyledThumbValue } from './styled';
export var ThumbLabelWrapper = function (_a) {
    var disabled = _a.disabled, index = _a.index, dragged = _a.dragged, ThumbLabel = _a.thumbLabel, values = _a.values, vertical = _a.vertical, overrides = _a.overrides;
    if (!ThumbLabel) {
        return null;
    }
    if (ThumbLabel === true) {
        return (React.createElement(StyledThumbValue, { vertical: vertical, overrides: overrides }, values[index]));
    }
    var props = {
        children: values[index],
        disabled: disabled,
        index: index,
        dragged: dragged,
        values: values,
        vertical: vertical,
        overrides: overrides,
    };
    return React.createElement(ThumbLabel, __assign({}, props));
};
//# sourceMappingURL=thumb-label-wrapper.js.map