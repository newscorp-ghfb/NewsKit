import React from 'react';
import { getTrackBackground, Direction } from 'react-range';
import { getSingleStylePreset } from '../utils/style';
export var renderLabel = function (Label) {
    if (typeof Label === 'string') {
        return Label;
    }
    return React.createElement(Label, null);
};
export var getFillColor = function (theme, fallback, token) {
    return getSingleStylePreset(theme, 'base', 'backgroundColor', fallback, token);
};
export var getTrackBackgroundStyle = function (theme, sliderTrackToken, indicatorFillToken, values, min, max, vertical) {
    var trackFill = getSingleStylePreset(theme, 'base', 'backgroundColor', sliderTrackToken);
    var indicatorFill = getSingleStylePreset(theme, 'base', 'backgroundColor', indicatorFillToken);
    return {
        background: getTrackBackground({
            values: values,
            colors: values.length > 1
                ? Array.from({ length: values.length + 1 }, function (v, i) {
                    return i % 2 ? indicatorFill : trackFill;
                })
                : [indicatorFill, trackFill],
            min: min,
            max: max,
            direction: vertical ? Direction.Up : undefined,
        }),
    };
};
//# sourceMappingURL=utils.js.map