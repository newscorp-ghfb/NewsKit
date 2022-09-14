import React from 'react';
import {Range, Direction} from 'react-range';
import {SliderProps} from './types';
import {Stack, Flow} from '../stack';
import {
  StackContainer,
  StyledTrack,
  StyledThumb,
  StyledSliderLabel,
  LabelContainer,
  StyledThumbFeedback,
} from './styled';
import {ThumbLabelWrapper} from './thumb-label-wrapper';
import {renderLabel, getTrackBackgroundStyle} from './utils';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {
  omitLogicalPropsFromOverrides,
  extractLogicalPropsFromOverrides,
} from '../utils/logical-properties';

const labelFlowMap = [
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
const ThemelessSlider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      min,
      max,
      step = 1,
      onChange,
      onFinalChange,
      onKeyDown,
      disabled,
      values,
      vertical,
      ariaLabel = 'slider',
      ariaValueText,
      ariaDescribedBy,
      minLabel,
      maxLabel,
      labelPosition = 'inline',
      thumbLabel,
      thumbIcon: ThumbIcon,
      dataTestId = 'slider',
      overrides: allOverrides = {},
      renderTrack,
      renderThumb,
      tabIndex,
      ...rest
    },
    ref,
  ) => {
    const overrides = omitLogicalPropsFromOverrides(allOverrides);
    const logicalProps = extractLogicalPropsFromOverrides(allOverrides);

    const theme = useTheme();
    const sliderTrackStylePreset = getToken(
      {theme, overrides},
      'slider.track',
      'track',
      'stylePreset',
    );
    const sliderIndicatorStylePreset = getToken(
      {theme, overrides},
      'slider.indicator',
      'indicator',
      'stylePreset',
    );

    const renderTrackFn =
      renderTrack ||
      (({props: p, children, isDragged}) => (
        <StyledTrack
          {...p}
          values={values}
          dragged={isDragged}
          disabled={disabled}
          vertical={vertical}
          labelPosition={labelPosition}
          style={getTrackBackgroundStyle(
            theme,
            sliderTrackStylePreset,
            sliderIndicatorStylePreset,
            values,
            min,
            max,
            vertical,
          )}
          data-testid={`${dataTestId}-track`}
          onMouseDown={p.onMouseDown}
          onTouchStart={p.onTouchStart}
          onKeyDown={e => {
            const spaceKeyCode = 32;
            if (e.keyCode === spaceKeyCode) e.preventDefault();
            return onKeyDown && onKeyDown(e);
          }}
          overrides={overrides}
        >
          {children}
        </StyledTrack>
      ));

    const renderThumbFn =
      renderThumb ||
      (({props: p, index, isDragged}) => (
        <StyledThumb
          {...p}
          disabled={disabled}
          aria-label={ariaLabel}
          aria-orientation={vertical ? 'vertical' : 'horizontal'}
          aria-valuetext={ariaValueText}
          aria-describedby={ariaDescribedBy}
          values={values}
          dragged={isDragged}
          data-testid={`${dataTestId}-thumb`}
          overrides={overrides}
          tabIndex={tabIndex || p.tabIndex}
        >
          <StyledThumbFeedback
            disabled={disabled}
            overrides={overrides}
            data-testid={`${dataTestId}-feedback`}
          />
          {ThumbIcon && <ThumbIcon />}
          <ThumbLabelWrapper
            values={values}
            index={index}
            dragged={isDragged}
            thumbLabel={thumbLabel}
            vertical={vertical}
            overrides={overrides}
          />
        </StyledThumb>
      ));

    const minimumLabel = minLabel && (
      <StyledSliderLabel
        labelPosition={labelPosition}
        disabled={disabled}
        vertical={vertical}
        labelType="min"
        data-testid="min-label"
        text={typeof minLabel === 'string'}
        overrides={overrides}
      >
        {renderLabel(minLabel)}
      </StyledSliderLabel>
    );

    const maximumLabel = maxLabel && (
      <StyledSliderLabel
        labelPosition={labelPosition}
        disabled={disabled}
        vertical={vertical}
        labelType="max"
        data-testid="max-label"
        text={typeof maxLabel === 'string'}
        overrides={overrides}
      >
        {renderLabel(maxLabel)}
      </StyledSliderLabel>
    );

    const slider = (
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        disabled={disabled}
        onChange={onChange}
        onFinalChange={onFinalChange}
        direction={vertical ? Direction.Up : Direction.Right}
        renderTrack={renderTrackFn}
        renderThumb={renderThumbFn}
      />
    );

    const inlineLabels = labelPosition === 'inline';
    const labelContainer = inlineLabels ? undefined : (
      <LabelContainer
        labelPosition={labelPosition}
        vertical={vertical}
        overrides={overrides}
      >
        <Stack
          flow={labelFlowMap[vertical ? 1 : 0][labelPosition] as Flow}
          stackDistribution="space-between"
          flowReverse={vertical}
          flexGrow
        >
          {minimumLabel}
          {maximumLabel}
        </Stack>
      </LabelContainer>
    );

    let flow = vertical ? 'vertical-center' : 'horizontal-center';
    let flowReverse = vertical;

    if (vertical && labelPosition !== 'inline') {
      flow = 'horizontal-stretch';
      flowReverse = false;
    }

    return (
      <StackContainer
        ref={ref}
        vertical={vertical}
        inline={vertical}
        flow={flow as Flow}
        stackDistribution="center"
        flowReverse={flowReverse}
        wrap={!inlineLabels}
        flexGrow
        data-testid={dataTestId}
        {...logicalProps}
        {...rest}
      >
        {inlineLabels && minimumLabel}
        {labelPosition === 'before' && labelContainer}
        {slider}
        {labelPosition === 'after' && labelContainer}
        {inlineLabels && maximumLabel}
      </StackContainer>
    );
  },
);

export const Slider = withOwnTheme(ThemelessSlider)({defaults, stylePresets});
