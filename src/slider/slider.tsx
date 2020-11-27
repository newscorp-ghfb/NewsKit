import React from 'react';
import {Range, Direction} from 'react-range';
import {SliderProps, LabelPosition} from './types';
import {Flow, StackDistribution, Stack} from '../stack';
import {
  StackContainer,
  StyledTrack,
  StyledThumb,
  StyledSliderLabel,
  LabelContainer,
} from './styled';
import {ThumbLabelWrapper} from './thumb-label-wrapper';
import {renderLabel, getTrackBackgroundStyle} from './utils';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';

const labelFlowMap = [
  // horizontal
  {
    [LabelPosition.Before]: Flow.HorizontalBottom,
    [LabelPosition.After]: Flow.HorizontalTop,
    [LabelPosition.Inline]: undefined,
  },
  // vertical
  {
    [LabelPosition.Before]: Flow.VerticalRight,
    [LabelPosition.After]: Flow.VerticalLeft,
    [LabelPosition.Inline]: undefined,
  },
];

export const Slider: React.FC<SliderProps> = ({
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
  labelPosition = LabelPosition.Inline,
  thumbLabel,
  thumbIcon: ThumbIcon,
  dataTestId = 'slider',
  overrides = {},
  renderTrack,
  renderThumb,
}) => {
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
    (({props: p, children, dragged}) => (
      <StyledTrack
        {...p}
        values={values}
        dragged={dragged}
        disabled={disabled}
        vertical={vertical}
        aria-valuemin={min}
        aria-valuemax={Math.floor(max)}
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
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
    (({props: p, index, dragged}) => (
      <StyledThumb
        {...p}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-valuetext={ariaValueText}
        aria-describedby={ariaDescribedBy}
        values={values}
        dragged={dragged}
        data-testid={`${dataTestId}-thumb`}
        overrides={overrides}
      >
        {ThumbIcon && <ThumbIcon />}
        <ThumbLabelWrapper
          values={values}
          index={index}
          dragged={dragged}
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

  const inlineLabels = labelPosition === LabelPosition.Inline;
  const labelContainer = inlineLabels ? (
    undefined
  ) : (
    <LabelContainer
      labelPosition={labelPosition}
      vertical={vertical}
      overrides={overrides}
    >
      <Stack
        flow={labelFlowMap[vertical ? 1 : 0][labelPosition]}
        stackDistribution={StackDistribution.SpaceBetween}
        flexGrow
      >
        {minimumLabel}
        {maximumLabel}
      </Stack>
    </LabelContainer>
  );

  return (
    <StackContainer
      vertical={vertical}
      inline={vertical}
      flow={vertical ? Flow.VerticalCenter : Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
      flowReverse={vertical}
      wrap={!inlineLabels}
      flexGrow
      data-testid={dataTestId}
    >
      {inlineLabels && minimumLabel}
      {labelPosition === LabelPosition.Before && labelContainer}
      {slider}
      {labelPosition === LabelPosition.After && labelContainer}
      {inlineLabels && maximumLabel}
    </StackContainer>
  );
};
