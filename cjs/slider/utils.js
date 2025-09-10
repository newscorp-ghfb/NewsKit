"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrackBackgroundStyle = exports.getFillColor = exports.renderLabel = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_range_1 = require("react-range");
var style_1 = require("../utils/style");
var renderLabel = function (Label) {
    if (typeof Label === 'string') {
        return Label;
    }
    return react_1.default.createElement(Label, null);
};
exports.renderLabel = renderLabel;
var getFillColor = function (theme, fallback, token) {
    return (0, style_1.getSingleStylePreset)(theme, 'base', 'backgroundColor', fallback, token);
};
exports.getFillColor = getFillColor;
var getTrackBackgroundStyle = function (theme, sliderTrackToken, indicatorFillToken, values, min, max, vertical) {
    var trackFill = (0, style_1.getSingleStylePreset)(theme, 'base', 'backgroundColor', sliderTrackToken);
    var indicatorFill = (0, style_1.getSingleStylePreset)(theme, 'base', 'backgroundColor', indicatorFillToken);
    return {
        background: (0, react_range_1.getTrackBackground)({
            values: values,
            colors: values.length > 1
                ? Array.from({ length: values.length + 1 }, function (v, i) {
                    return i % 2 ? indicatorFill : trackFill;
                })
                : [indicatorFill, trackFill],
            min: min,
            max: max,
            direction: vertical ? react_range_1.Direction.Up : undefined,
        }),
    };
};
exports.getTrackBackgroundStyle = getTrackBackgroundStyle;
//# sourceMappingURL=utils.js.map