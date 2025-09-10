"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThumbLabelWrapper = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("./styled");
var ThumbLabelWrapper = function (_a) {
    var disabled = _a.disabled, index = _a.index, dragged = _a.dragged, ThumbLabel = _a.thumbLabel, values = _a.values, vertical = _a.vertical, overrides = _a.overrides;
    if (!ThumbLabel) {
        return null;
    }
    if (ThumbLabel === true) {
        return (react_1.default.createElement(styled_1.StyledThumbValue, { vertical: vertical, overrides: overrides }, values[index]));
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
    return react_1.default.createElement(ThumbLabel, tslib_1.__assign({}, props));
};
exports.ThumbLabelWrapper = ThumbLabelWrapper;
//# sourceMappingURL=thumb-label-wrapper.js.map