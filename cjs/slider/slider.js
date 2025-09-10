"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slider = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var react_range_1 = require("react-range");
var stack_1 = require("../stack");
var styled_1 = require("./styled");
var thumb_label_wrapper_1 = require("./thumb-label-wrapper");
var utils_1 = require("./utils");
var theme_1 = require("../theme");
var get_token_1 = require("../utils/get-token");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var with_own_theme_1 = require("../utils/with-own-theme");
var logical_properties_1 = require("../utils/logical-properties");
var compose_event_handlers_1 = require("../utils/compose-event-handlers");
var instrumentation_1 = require("../instrumentation");
var labelFlowMap = [
    // horizontal
    {
        before: 'horizontal-bottom',
        after: 'horizontal-top',
        inline: undefined,
    },
    // vertical
    {
        before: 'vertical-right',
        after: 'vertical-left',
        inline: undefined,
    },
];
var ThemelessSlider = react_1.default.forwardRef(function (_a, ref) {
    var min = _a.min, max = _a.max, _b = _a.step, step = _b === void 0 ? 1 : _b, onChange = _a.onChange, onFinalChangeProp = _a.onFinalChange, onKeyDown = _a.onKeyDown, disabled = _a.disabled, values = _a.values, vertical = _a.vertical, _c = _a.ariaLabel, ariaLabel = _c === void 0 ? 'slider' : _c, ariaValueText = _a.ariaValueText, ariaDescribedBy = _a.ariaDescribedBy, minLabel = _a.minLabel, maxLabel = _a.maxLabel, _d = _a.labelPosition, labelPosition = _d === void 0 ? 'inline' : _d, thumbLabel = _a.thumbLabel, ThumbIcon = _a.thumbIcon, _e = _a.dataTestId, dataTestId = _e === void 0 ? 'slider' : _e, _f = _a.overrides, allOverrides = _f === void 0 ? {} : _f, renderTrack = _a.renderTrack, renderThumb = _a.renderThumb, tabIndex = _a.tabIndex, _g = _a.eventContext, eventContext = _g === void 0 ? {} : _g, _h = _a.eventOriginator, eventOriginator = _h === void 0 ? 'slider' : _h, rest = tslib_1.__rest(_a, ["min", "max", "step", "onChange", "onFinalChange", "onKeyDown", "disabled", "values", "vertical", "ariaLabel", "ariaValueText", "ariaDescribedBy", "minLabel", "maxLabel", "labelPosition", "thumbLabel", "thumbIcon", "dataTestId", "overrides", "renderTrack", "renderThumb", "tabIndex", "eventContext", "eventOriginator"]);
    var overrides = (0, logical_properties_1.omitLogicalPropsFromOverrides)(allOverrides);
    var logicalProps = (0, logical_properties_1.extractLogicalPropsFromOverrides)(allOverrides);
    var theme = (0, theme_1.useTheme)();
    var sliderTrackStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'slider.track', 'track', 'stylePreset');
    var sliderIndicatorStylePreset = (0, get_token_1.getToken)({ theme: theme, overrides: overrides }, 'slider.indicator', 'indicator', 'stylePreset');
    var renderTrackFn = renderTrack ||
        (function (_a) {
            var p = _a.props, children = _a.children, isDragged = _a.isDragged;
            return (react_1.default.createElement(styled_1.StyledTrack, tslib_1.__assign({}, p, { values: values, dragged: isDragged, disabled: disabled, vertical: vertical, labelPosition: labelPosition, style: (0, utils_1.getTrackBackgroundStyle)(theme, sliderTrackStylePreset, sliderIndicatorStylePreset, values, min, max, vertical), "data-testid": "".concat(dataTestId, "-track"), onMouseDown: p.onMouseDown, onTouchStart: p.onTouchStart, onKeyDown: function (e) {
                    var spaceKeyCode = 32;
                    if (e.keyCode === spaceKeyCode)
                        e.preventDefault();
                    return (onKeyDown && onKeyDown(e));
                }, overrides: overrides }), children));
        });
    var renderThumbFn = renderThumb ||
        (function (_a) {
            var p = _a.props, index = _a.index, isDragged = _a.isDragged;
            return (react_1.default.createElement(styled_1.StyledThumb, tslib_1.__assign({}, p, { disabled: disabled, "aria-label": ariaLabel, "aria-orientation": vertical ? 'vertical' : 'horizontal', "aria-valuetext": ariaValueText, "aria-describedby": ariaDescribedBy, values: values, dragged: isDragged, "data-testid": "".concat(dataTestId, "-thumb"), overrides: overrides, tabIndex: tabIndex || p.tabIndex }),
                react_1.default.createElement(styled_1.StyledThumbFeedback, { disabled: disabled, overrides: overrides, "data-testid": "".concat(dataTestId, "-feedback") }),
                ThumbIcon && react_1.default.createElement(ThumbIcon, null),
                react_1.default.createElement(thumb_label_wrapper_1.ThumbLabelWrapper, { values: values, index: index, dragged: isDragged, thumbLabel: thumbLabel, vertical: vertical, overrides: overrides })));
        });
    var minimumLabel = minLabel && (react_1.default.createElement(styled_1.StyledSliderLabel, { labelPosition: labelPosition, disabled: disabled, vertical: vertical, labelType: "min", "data-testid": "min-label", text: typeof minLabel === 'string', overrides: overrides }, (0, utils_1.renderLabel)(minLabel)));
    var maximumLabel = maxLabel && (react_1.default.createElement(styled_1.StyledSliderLabel, { labelPosition: labelPosition, disabled: disabled, vertical: vertical, labelType: "max", "data-testid": "max-label", text: typeof maxLabel === 'string', overrides: overrides }, (0, utils_1.renderLabel)(maxLabel)));
    var fireEvent = (0, instrumentation_1.useInstrumentation)().fireEvent;
    var onFinalChange = (0, compose_event_handlers_1.composeEventHandlers)([
        onFinalChangeProp,
        function (eventValues) {
            return fireEvent({
                originator: eventOriginator,
                trigger: instrumentation_1.EventTrigger.Change,
                context: tslib_1.__assign({ values: eventValues }, eventContext),
            });
        },
    ]);
    var slider = (react_1.default.createElement(react_range_1.Range, { step: step, min: min, max: max, values: values, disabled: disabled, onChange: onChange, onFinalChange: onFinalChange, direction: vertical ? react_range_1.Direction.Up : react_range_1.Direction.Right, renderTrack: renderTrackFn, renderThumb: renderThumbFn }));
    var inlineLabels = labelPosition === 'inline';
    var labelContainer = inlineLabels ? undefined : (react_1.default.createElement(styled_1.LabelContainer, { labelPosition: labelPosition, vertical: vertical, overrides: overrides },
        react_1.default.createElement(stack_1.Stack, { flow: labelFlowMap[vertical ? 1 : 0][labelPosition], stackDistribution: "space-between", flowReverse: vertical, flexGrow: true },
            minimumLabel,
            maximumLabel)));
    var flow = vertical ? 'vertical-center' : 'horizontal-center';
    var flowReverse = vertical;
    if (vertical && labelPosition !== 'inline') {
        flow = 'horizontal-stretch';
        flowReverse = false;
    }
    return (react_1.default.createElement(styled_1.StackContainer, tslib_1.__assign({ ref: ref, vertical: vertical, inline: vertical, flow: flow, stackDistribution: "center", flowReverse: flowReverse, wrap: !inlineLabels, flexGrow: true, "data-testid": dataTestId }, logicalProps, rest),
        inlineLabels && minimumLabel,
        labelPosition === 'before' && labelContainer,
        slider,
        labelPosition === 'after' && labelContainer,
        inlineLabels && maximumLabel));
});
exports.Slider = (0, with_own_theme_1.withOwnTheme)(ThemelessSlider)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=slider.js.map