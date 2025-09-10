import { __assign, __rest } from "tslib";
import React from 'react';
import { Range, Direction } from 'react-range';
import { Stack } from '../stack';
import { StackContainer, StyledTrack, StyledThumb, StyledSliderLabel, LabelContainer, StyledThumbFeedback, } from './styled';
import { ThumbLabelWrapper } from './thumb-label-wrapper';
import { renderLabel, getTrackBackgroundStyle } from './utils';
import { useTheme } from '../theme';
import { getToken } from '../utils/get-token';
import defaults from './defaults';
import stylePresets from './style-presets';
import { withOwnTheme } from '../utils/with-own-theme';
import { omitLogicalPropsFromOverrides, extractLogicalPropsFromOverrides, } from '../utils/logical-properties';
import { composeEventHandlers } from '../utils/compose-event-handlers';
import { EventTrigger, useInstrumentation } from '../instrumentation';
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
var ThemelessSlider = React.forwardRef(function (_a, ref) {
    var min = _a.min, max = _a.max, _b = _a.step, step = _b === void 0 ? 1 : _b, onChange = _a.onChange, onFinalChangeProp = _a.onFinalChange, onKeyDown = _a.onKeyDown, disabled = _a.disabled, values = _a.values, vertical = _a.vertical, _c = _a.ariaLabel, ariaLabel = _c === void 0 ? 'slider' : _c, ariaValueText = _a.ariaValueText, ariaDescribedBy = _a.ariaDescribedBy, minLabel = _a.minLabel, maxLabel = _a.maxLabel, _d = _a.labelPosition, labelPosition = _d === void 0 ? 'inline' : _d, thumbLabel = _a.thumbLabel, ThumbIcon = _a.thumbIcon, _e = _a.dataTestId, dataTestId = _e === void 0 ? 'slider' : _e, _f = _a.overrides, allOverrides = _f === void 0 ? {} : _f, renderTrack = _a.renderTrack, renderThumb = _a.renderThumb, tabIndex = _a.tabIndex, _g = _a.eventContext, eventContext = _g === void 0 ? {} : _g, _h = _a.eventOriginator, eventOriginator = _h === void 0 ? 'slider' : _h, rest = __rest(_a, ["min", "max", "step", "onChange", "onFinalChange", "onKeyDown", "disabled", "values", "vertical", "ariaLabel", "ariaValueText", "ariaDescribedBy", "minLabel", "maxLabel", "labelPosition", "thumbLabel", "thumbIcon", "dataTestId", "overrides", "renderTrack", "renderThumb", "tabIndex", "eventContext", "eventOriginator"]);
    var overrides = omitLogicalPropsFromOverrides(allOverrides);
    var logicalProps = extractLogicalPropsFromOverrides(allOverrides);
    var theme = useTheme();
    var sliderTrackStylePreset = getToken({ theme: theme, overrides: overrides }, 'slider.track', 'track', 'stylePreset');
    var sliderIndicatorStylePreset = getToken({ theme: theme, overrides: overrides }, 'slider.indicator', 'indicator', 'stylePreset');
    var renderTrackFn = renderTrack ||
        (function (_a) {
            var p = _a.props, children = _a.children, isDragged = _a.isDragged;
            return (React.createElement(StyledTrack, __assign({}, p, { values: values, dragged: isDragged, disabled: disabled, vertical: vertical, labelPosition: labelPosition, style: getTrackBackgroundStyle(theme, sliderTrackStylePreset, sliderIndicatorStylePreset, values, min, max, vertical), "data-testid": "".concat(dataTestId, "-track"), onMouseDown: p.onMouseDown, onTouchStart: p.onTouchStart, onKeyDown: function (e) {
                    var spaceKeyCode = 32;
                    if (e.keyCode === spaceKeyCode)
                        e.preventDefault();
                    return (onKeyDown && onKeyDown(e));
                }, overrides: overrides }), children));
        });
    var renderThumbFn = renderThumb ||
        (function (_a) {
            var p = _a.props, index = _a.index, isDragged = _a.isDragged;
            return (React.createElement(StyledThumb, __assign({}, p, { disabled: disabled, "aria-label": ariaLabel, "aria-orientation": vertical ? 'vertical' : 'horizontal', "aria-valuetext": ariaValueText, "aria-describedby": ariaDescribedBy, values: values, dragged: isDragged, "data-testid": "".concat(dataTestId, "-thumb"), overrides: overrides, tabIndex: tabIndex || p.tabIndex }),
                React.createElement(StyledThumbFeedback, { disabled: disabled, overrides: overrides, "data-testid": "".concat(dataTestId, "-feedback") }),
                ThumbIcon && React.createElement(ThumbIcon, null),
                React.createElement(ThumbLabelWrapper, { values: values, index: index, dragged: isDragged, thumbLabel: thumbLabel, vertical: vertical, overrides: overrides })));
        });
    var minimumLabel = minLabel && (React.createElement(StyledSliderLabel, { labelPosition: labelPosition, disabled: disabled, vertical: vertical, labelType: "min", "data-testid": "min-label", text: typeof minLabel === 'string', overrides: overrides }, renderLabel(minLabel)));
    var maximumLabel = maxLabel && (React.createElement(StyledSliderLabel, { labelPosition: labelPosition, disabled: disabled, vertical: vertical, labelType: "max", "data-testid": "max-label", text: typeof maxLabel === 'string', overrides: overrides }, renderLabel(maxLabel)));
    var fireEvent = useInstrumentation().fireEvent;
    var onFinalChange = composeEventHandlers([
        onFinalChangeProp,
        function (eventValues) {
            return fireEvent({
                originator: eventOriginator,
                trigger: EventTrigger.Change,
                context: __assign({ values: eventValues }, eventContext),
            });
        },
    ]);
    var slider = (React.createElement(Range, { step: step, min: min, max: max, values: values, disabled: disabled, onChange: onChange, onFinalChange: onFinalChange, direction: vertical ? Direction.Up : Direction.Right, renderTrack: renderTrackFn, renderThumb: renderThumbFn }));
    var inlineLabels = labelPosition === 'inline';
    var labelContainer = inlineLabels ? undefined : (React.createElement(LabelContainer, { labelPosition: labelPosition, vertical: vertical, overrides: overrides },
        React.createElement(Stack, { flow: labelFlowMap[vertical ? 1 : 0][labelPosition], stackDistribution: "space-between", flowReverse: vertical, flexGrow: true },
            minimumLabel,
            maximumLabel)));
    var flow = vertical ? 'vertical-center' : 'horizontal-center';
    var flowReverse = vertical;
    if (vertical && labelPosition !== 'inline') {
        flow = 'horizontal-stretch';
        flowReverse = false;
    }
    return (React.createElement(StackContainer, __assign({ ref: ref, vertical: vertical, inline: vertical, flow: flow, stackDistribution: "center", flowReverse: flowReverse, wrap: !inlineLabels, flexGrow: true, "data-testid": dataTestId }, logicalProps, rest),
        inlineLabels && minimumLabel,
        labelPosition === 'before' && labelContainer,
        slider,
        labelPosition === 'after' && labelContainer,
        inlineLabels && maximumLabel));
});
export var Slider = withOwnTheme(ThemelessSlider)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=slider.js.map