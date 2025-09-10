"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledSliderLabel = exports.StyledThumbValue = exports.StyledThumbFeedback = exports.StyledThumb = exports.StyledTrack = exports.LabelContainer = exports.StackContainer = void 0;
var tslib_1 = require("tslib");
var style_1 = require("../utils/style");
var stack_1 = require("../stack");
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
exports.StackContainer = (0, style_1.styled)(stack_1.Stack)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  width: ", ";\n  position: relative;\n"], ["\n  width: ", ";\n  position: relative;\n"])), ifVertical(undefined, '100%'));
exports.LabelContainer = style_1.styled.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  margin-left: ", ";\n  margin-right: ", ";\n\n  padding: ", ";\n"], ["\n  width: ", ";\n  margin-top: ", ";\n  margin-bottom: ", ";\n\n  margin-left: ", ";\n  margin-right: ", ";\n\n  padding: ", ";\n"])), ifVertical(undefined, '100%'), function (_a) {
    var labelPosition = _a.labelPosition, vertical = _a.vertical;
    return !vertical && labelPosition === 'after'
        ? (0, style_1.getSpace)('slider.labels', 'labels')
        : undefined;
}, function (_a) {
    var labelPosition = _a.labelPosition, vertical = _a.vertical;
    return !vertical && labelPosition === 'before'
        ? (0, style_1.getSpace)('slider.labels', 'labels')
        : undefined;
}, function (_a) {
    var labelPosition = _a.labelPosition, vertical = _a.vertical;
    return vertical && labelPosition === 'after'
        ? (0, style_1.getSpace)('slider.labels', 'labels')
        : undefined;
}, function (_a) {
    var labelPosition = _a.labelPosition, vertical = _a.vertical;
    return vertical && labelPosition === 'before'
        ? (0, style_1.getSpace)('slider.labels', 'labels')
        : undefined;
}, function (_a) {
    var vertical = _a.vertical, rest = tslib_1.__rest(_a, ["vertical"]);
    var padding = "calc(".concat((0, style_1.getSize)('slider.thumb', 'thumb')(tslib_1.__assign({}, rest)), " / 2)");
    return "".concat(vertical ? padding : '0', " ").concat(vertical ? '0' : padding);
});
//
// Track
//
exports.StyledTrack = style_1.styled.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  cursor: ", ";\n  box-sizing: border-box;\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  width: ", ";\n"], ["\n  display: flex;\n  cursor: ", ";\n  box-sizing: border-box;\n  ", "\n\n  ", "\n\n  ", ";\n\n  ", "\n\n  width: ", ";\n"])), getCursor, function (_a) {
    var labelPosition = _a.labelPosition;
    return labelPosition === 'inline' && { alignSelf: 'center' };
}, function (_a) {
    var disabled = _a.disabled;
    return (0, style_1.getStylePreset)('slider.track', 'track', {
        isDisabled: disabled,
        filterStates: ['base', 'disabled'],
    });
}, function (_a) {
    var vertical = _a.vertical, rest = tslib_1.__rest(_a, ["vertical"]);
    var thumbSize = (0, style_1.getSize)('slider.thumb', 'thumb')(tslib_1.__assign({}, rest));
    var trackSize = (0, style_1.getSize)('slider.track', 'track')(tslib_1.__assign({}, rest));
    var halfThumb = "".concat(thumbSize, "/2");
    var halfTrack = "".concat(trackSize, "/2");
    var trackMargin = "".concat(halfThumb, " - ").concat(halfTrack);
    return vertical
        ? "margin: calc(".concat(halfThumb, ") calc(").concat(trackMargin, ");")
        : "margin: calc(".concat(trackMargin, ") calc(").concat(halfThumb, ");");
}, function (_a) {
    var vertical = _a.vertical, labelPosition = _a.labelPosition, rest = tslib_1.__rest(_a, ["vertical", "labelPosition"]);
    if (!vertical) {
        return { height: (0, style_1.getSize)('slider.track', 'track')(rest) };
    }
    /* istanbul ignore else */
    if (labelPosition === 'inline') {
        return { height: '100%' };
    }
    /* istanbul ignore next */
    return '';
}, function (_a) {
    var vertical = _a.vertical;
    return vertical ? (0, style_1.getSize)('slider.track', 'track') : '100%';
});
exports.StyledThumb = style_1.styled.div(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", "\n  height: ", ";\n  width: ", ";\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: ", ";\n"], ["\n  ", "\n  height: ", ";\n  width: ", ";\n  justify-content: center;\n  align-items: center;\n  box-sizing: border-box;\n  cursor: ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return (0, style_1.getStylePreset)('slider.thumb', 'thumb', {
        isDisabled: disabled,
    });
}, (0, style_1.getSize)('slider.thumb', 'thumb'), (0, style_1.getSize)('slider.thumb', 'thumb'), getCursor);
exports.StyledThumbFeedback = style_1.styled.span(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  ", "\n  ", ";\n  ", ";\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  ", "\n  ", ";\n  ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return (0, style_1.getStylePreset)('slider.feedback', 'feedback', {
        isDisabled: disabled,
    });
}, (0, style_1.getResponsiveSize)(function (rectSize) { return ({
    width: rectSize,
    height: rectSize,
    transform: "translate3d(calc(".concat(rectSize, " / -2), calc(").concat(rectSize, " / -2), 0)"),
}); }, "slider.feedback", 'feedback', 'size'), (0, style_1.getTransitionPreset)("slider.feedback", 'feedback'));
exports.StyledThumbValue = style_1.styled.div(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n\n  position: absolute;\n  background-color: transparent;\n  width: 100%;\n"], ["\n  ", "\n\n  ", "\n\n  ", "\n\n  position: absolute;\n  background-color: transparent;\n  width: 100%;\n"])), (0, style_1.getTypographyPreset)('slider.thumbLabel', 'thumbLabel', {
    withCrop: true,
}), function (_a) {
    var disabled = _a.disabled;
    return (0, style_1.getStylePreset)('slider.thumbLabel', 'thumbLabel', {
        isDisabled: disabled,
        omitStates: ['focus', 'hover'],
    });
}, function (_a) {
    var vertical = _a.vertical, rest = tslib_1.__rest(_a, ["vertical"]);
    var thumbLabelSpace = (0, style_1.getSpace)('slider.thumbLabel', 'thumbLabel')(tslib_1.__assign({}, rest));
    return vertical
        ? "right: -".concat(thumbLabelSpace, ";")
        : "top: -".concat(thumbLabelSpace, ";");
});
var getLabelMargin = function (_a) {
    var vertical = _a.vertical, labelType = _a.labelType, labelPosition = _a.labelPosition, rest = tslib_1.__rest(_a, ["vertical", "labelType", "labelPosition"]);
    if (labelPosition !== 'inline') {
        return '';
    }
    var marginAmount = (0, style_1.getSpace)('slider.labels', 'labels')(tslib_1.__assign({}, rest));
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
exports.StyledSliderLabel = style_1.styled.div(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n  ", "\n\n  ", "\n\n  ", "\n"], ["\n  ", "\n\n  ", "\n\n  ", "\n"])), (0, style_1.getTypographyPreset)('slider.labels', 'labels', {
    withCrop: true,
}), function (_a) {
    var text = _a.text, disabled = _a.disabled;
    return text &&
        (0, style_1.getStylePreset)('slider.labels', 'labels', {
            isDisabled: disabled,
            filterStates: ['base', 'disabled'],
        });
}, getLabelMargin);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map