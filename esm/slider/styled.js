import { __assign, __makeTemplateObject, __rest } from "tslib";
import { styled, getTypographyPreset, getSize, getSpace, getStylePreset, getResponsiveSize, getTransitionPreset, } from '../utils/style';
import { Stack } from '../stack';
var ifVertical = function (value, elseValue) { return function (_a) {
    var vertical = _a.vertical, theme = _a.theme;
    var maybeToken = vertical ? value : elseValue;
    return theme.sizing[maybeToken] || maybeToken;
}; };
var getCursor = function (_a) {
    var disabled = _a.disabled, isDragged = _a.dragged, values = _a.values;
    switch (true) {
        case disabled:
            return 'not-allowed';
        case isDragged:
            return 'grabbing';
        case values && values.length < 2:
            return 'pointer';
        default:
            return 'inherit';
    }
};
//
// Containers
//
export var StackContainer = styled(Stack)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  position: relative;\n"], ["\n  width: ", ";\n  position: relative;\n"])), ifVertical(undefined, '100%'));
export var LabelContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  margin-left: ", ";\n  margin-right: ", ";\n\n  padding: ", ";\n"], ["\n  width: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  margin-left: ", ";\n  margin-right: ", ";\n\n  padding: ", ";\n"])), ifVertical(undefined, '100%'), function (_a) {
    var labelPosition = _a.labelPosition, vertical = _a.vertical;
    return !vertical && labelPosition === 'after'
        ? getSpace('slider.labels', 'labels')
        : undefined;
}, function (_a) {
    var labelPosition = _a.labelPosition, vertical = _a.vertical;
    return !vertical && labelPosition === 'before'
        ? getSpace('slider.labels', 'labels')
        : undefined;
}, function (_a) {
    var labelPosition = _a.labelPosition, vertical = _a.vertical;
    return vertical && labelPosition === 'after'
        ? getSpace('slider.labels', 'labels')
        : undefined;
}, function (_a) {
    var labelPosition = _a.labelPosition, vertical = _a.vertical;
    return vertical && labelPosition === 'before'
        ? getSpace('slider.labels', 'labels')
        : undefined;
}, function (_a) {
    var vertical = _a.vertical, rest = __rest(_a, ["vertical"]);
    var padding = "calc(".concat(getSize('slider.thumb', 'thumb')(__assign({}, rest)), " / 2)");
    return "".concat(vertical ? padding : '0', " ").concat(vertical ? '0' : padding);
});
//
// Track
//
export var StyledTrack = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  cursor: ", ";\n  box-sizing: border-box;\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  width: ", ";\n"], ["\n  display: flex;\n  cursor: ", ";\n  box-sizing: border-box;\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  width: ", ";\n"])), getCursor, function (_a) {
    var labelPosition = _a.labelPosition;
    return labelPosition === 'inline' && { alignSelf: 'center' };
}, function (_a) {
    var disabled = _a.disabled;
    return getStylePreset('slider.track', 'track', {
        isDisabled: disabled,
        filterStates: ['base', 'disabled'],
    });
}, function (_a) {
    var vertical = _a.vertical, rest = __rest(_a, ["vertical"]);
    var thumbSize = getSize('slider.thumb', 'thumb')(__assign({}, rest));
    var trackSize = getSize('slider.track', 'track')(__assign({}, rest));
    var halfThumb = "".concat(thumbSize, "/2");
    var halfTrack = "".concat(trackSize, "/2");
    var trackMargin = "".concat(halfThumb, " - ").concat(halfTrack);
    return vertical
        ? "margin: calc(".concat(halfThumb, ") calc(").concat(trackMargin, ");")
        : "margin: calc(".concat(trackMargin, ") calc(").concat(halfThumb, ");");
}, function (_a) {
    var vertical = _a.vertical, labelPosition = _a.labelPosition, rest = __rest(_a, ["vertical", "labelPosition"]);
    if (!vertical) {
        return { height: getSize('slider.track', 'track')(rest) };
    }
    /* istanbul ignore else */
    if (labelPosition === 'inline') {
        return { height: '100%' };
    }
    /* istanbul ignore next */
    return '';
}, function (_a) {
    var vertical = _a.vertical;
    return vertical ? getSize('slider.track', 'track') : '100%';
});
export var StyledThumb = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n  height: ", ";\n  width: ", ";\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: ", ";\n"], ["\n  ", "\n  height: ", ";\n  width: ", ";\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return getStylePreset('slider.thumb', 'thumb', {
        isDisabled: disabled,
    });
}, getSize('slider.thumb', 'thumb'), getSize('slider.thumb', 'thumb'), getCursor);
export var StyledThumbFeedback = styled.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  ", "\n  ", ";\n  ", ";\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  ", "\n  ", ";\n  ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return getStylePreset('slider.feedback', 'feedback', {
        isDisabled: disabled,
    });
}, getResponsiveSize(function (rectSize) { return ({
    width: rectSize,
    height: rectSize,
    transform: "translate3d(calc(".concat(rectSize, " / -2), calc(").concat(rectSize, " / -2), 0)"),
}); }, "slider.feedback", 'feedback', 'size'), getTransitionPreset("slider.feedback", 'feedback'));
export var StyledThumbValue = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n\n  position: absolute;\n  background-color: transparent;\n  width: 100%;\n"], ["\n  ", "\n\n  ", "\n\n  ", "\n\n  position: absolute;\n  background-color: transparent;\n  width: 100%;\n"])), getTypographyPreset('slider.thumbLabel', 'thumbLabel', {
    withCrop: true,
}), function (_a) {
    var disabled = _a.disabled;
    return getStylePreset('slider.thumbLabel', 'thumbLabel', {
        isDisabled: disabled,
        omitStates: ['focus', 'hover'],
    });
}, function (_a) {
    var vertical = _a.vertical, rest = __rest(_a, ["vertical"]);
    var thumbLabelSpace = getSpace('slider.thumbLabel', 'thumbLabel')(__assign({}, rest));
    return vertical
        ? "right: -".concat(thumbLabelSpace, ";")
        : "top: -".concat(thumbLabelSpace, ";");
});
var getLabelMargin = function (_a) {
    var vertical = _a.vertical, labelType = _a.labelType, labelPosition = _a.labelPosition, rest = __rest(_a, ["vertical", "labelType", "labelPosition"]);
    if (labelPosition !== 'inline') {
        return '';
    }
    var marginAmount = getSpace('slider.labels', 'labels')(__assign({}, rest));
    if (labelType === 'min') {
        return vertical
            ? "margin-top: ".concat(marginAmount, ";")
            : "margin-right: ".concat(marginAmount, ";");
    }
    /* istanbul ignore else */
    if (labelType === 'max') {
        return vertical
            ? "margin-bottom: ".concat(marginAmount, ";")
            : "margin-left: ".concat(marginAmount, ";");
    }
    /* istanbul ignore next */
    return '';
};
export var StyledSliderLabel = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n\n  ", "\n"])), getTypographyPreset('slider.labels', 'labels', {
    withCrop: true,
}), function (_a) {
    var text = _a.text, disabled = _a.disabled;
    return text &&
        getStylePreset('slider.labels', 'labels', {
            isDisabled: disabled,
            filterStates: ['base', 'disabled'],
        });
}, getLabelMargin);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map