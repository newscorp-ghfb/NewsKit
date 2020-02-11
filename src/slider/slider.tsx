import React from 'react';
import {Range, Direction} from 'react-range';
import {SliderProps} from './types';
import {
  StyledContainer,
  StyledTrack,
  StyledThumb,
  StyledSliderLabel,
} from './styled';
import {ThumbLabelWrapper} from './thumb-label-wrapper';
import {renderLabel, getTrackBackgroundStyle} from './utils';
import {useTheme} from '../themes/emotion';

const noop = () => {};

export const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  onChange,
  onFinalChange = noop,
  disabled,
  values,
  vertical,
  ariaLabel = 'slider',
  minLabel,
  maxLabel,
  thumbLabel,
  dataTestId = 'slider-track',
  $trackStylePreset,
  $indicatorStylePreset,
  $thumbStylePreset,
  $labelStylePreset,
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
          $trackStylePreset,
          $indicatorStylePreset,
          values,
          min,
          max,
          vertical,
        )}
        $trackStylePreset={$trackStylePreset}
        data-testid={dataTestId}
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
        $thumbStylePreset={$thumbStylePreset}
      >
        <ThumbLabelWrapper
          values={values}
          index={index}
          isDragged={isDragged}
          thumbLabel={thumbLabel}
          vertical={vertical}
          $labelStylePreset={$labelStylePreset}
        />
      </StyledThumb>
    ));

  return (
    <StyledContainer vertical={vertical}>
      {minLabel && (
        <StyledSliderLabel
          $labelStylePreset={$labelStylePreset}
          disabled={disabled}
          vertical={vertical}
          labelType="min"
          data-testid="min-label"
        >
          {renderLabel(minLabel)}
        </StyledSliderLabel>
      )}
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
      {maxLabel && (
        <StyledSliderLabel
          $labelStylePreset={$labelStylePreset}
          disabled={disabled}
          vertical={vertical}
          labelType="max"
          data-testid="max-label"
        >
          {renderLabel(maxLabel)}
        </StyledSliderLabel>
      )}
    </StyledContainer>
  );
};
