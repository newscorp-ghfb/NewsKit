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
import {useTheme} from '../themes/emotion';

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
  disabled,
  values,
  vertical,
  ariaLabel = 'slider',
  minLabel,
  maxLabel,
  labelPosition = LabelPosition.Inline,
  thumbLabel,
  dataTestId = 'slider',
  $sliderTrackStylePreset,
  $sliderIndicatorTrackStylePreset,
  $sliderThumbStylePreset,
  $sliderThumbLabelStylePreset,
  $sliderLabelsStylePreset,
  $trackSize,
  $thumbSize,
  $labelStackSpace,
  renderTrack,
  renderThumb,
}) => {
  const theme = useTheme();

  const renderTrackFn =
    renderTrack ||
    (({props: p, children, isDragged}) => (
      <StyledTrack
        {...p}
        values={values}
        isDragged={isDragged}
        disabled={disabled}
        vertical={vertical}
        style={getTrackBackgroundStyle(
          theme,
          $sliderTrackStylePreset,
          $sliderIndicatorTrackStylePreset,
          values,
          min,
          max,
          vertical,
        )}
        $stylePreset={$sliderTrackStylePreset}
        $trackSize={$trackSize}
        $thumbSize={$thumbSize}
        data-testid={`${dataTestId}-track`}
        onMouseDown={p.onMouseDown}
        onTouchStart={p.onTouchStart}
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
        $stylePreset={$sliderThumbStylePreset}
        $thumbSize={$thumbSize}
        values={values}
        isDragged={isDragged}
        data-testid={`${dataTestId}-thumb`}
      >
        <ThumbLabelWrapper
          values={values}
          index={index}
          isDragged={isDragged}
          thumbLabel={thumbLabel}
          vertical={vertical}
          $stylePreset={$sliderThumbLabelStylePreset}
        />
      </StyledThumb>
    ));

  const minimumLabel = minLabel && (
    <StyledSliderLabel
      labelPosition={labelPosition}
      $stylePreset={$sliderLabelsStylePreset}
      $thumbSize={$thumbSize}
      disabled={disabled}
      vertical={vertical}
      labelType="min"
      data-testid="min-label"
      isText={typeof minLabel === 'string'}
    >
      {renderLabel(minLabel)}
    </StyledSliderLabel>
  );

  const maximumLabel = maxLabel && (
    <StyledSliderLabel
      labelPosition={labelPosition}
      $stylePreset={$sliderLabelsStylePreset}
      $thumbSize={$thumbSize}
      disabled={disabled}
      vertical={vertical}
      labelType="max"
      data-testid="max-label"
      isText={typeof maxLabel === 'string'}
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
      $labelStackSpace={$labelStackSpace}
      $thumbSize={$thumbSize}
      vertical={vertical}
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
