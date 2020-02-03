import React from 'react';
import {Range, Direction} from 'react-range';
import {withTheme} from 'emotion-theming';
import {SliderProps} from './types';
import {
  StyledContainer,
  StyledTrack,
  StyledInnerTrack,
  StyledThumb,
  StyledSliderLabel,
} from './styled';
import {ThumbLabelWrapper} from './thumb-label-wrapper';
import {renderLabel, getTrackBackgroundStyle} from './utils';
import {ThemeProp} from '../utils/style';

export const Slider: React.FC<SliderProps> = withTheme<
  React.FC<SliderProps & ThemeProp>
>(props => {
  const {
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
    thumbLabel,
    $trackStylePreset,
    $thumbStylePreset,
    $labelStylePreset,
  } = props;

  return (
    <StyledContainer vertical={vertical}>
      {minLabel && (
        <StyledSliderLabel
          $labelStylePreset={$labelStylePreset}
          disabled={disabled}
          vertical={vertical}
          labelType="min"
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
        onChange={v => onChange(v)}
        onFinalChange={v => onFinalChange && onFinalChange(v)}
        direction={vertical ? Direction.Up : Direction.Right}
        renderTrack={({props: p, children, isDragged}) => (
          <StyledTrack
            onMouseDown={p.onMouseDown}
            onTouchStart={p.onTouchStart}
            isDragged={isDragged}
            values={values}
            data-testid="slider-track"
            vertical={vertical}
            disabled={disabled}
            $trackStylePreset={$trackStylePreset}
          >
            <StyledInnerTrack
              ref={p.ref}
              vertical={vertical}
              style={getTrackBackgroundStyle(props)}
              disabled={disabled}
              $trackStylePreset={$trackStylePreset}
            >
              {children}
            </StyledInnerTrack>
          </StyledTrack>
        )}
        renderThumb={({props: p, index, isDragged}) => (
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
        )}
      />
      {maxLabel && (
        <StyledSliderLabel
          $labelStylePreset={$labelStylePreset}
          disabled={disabled}
          vertical={vertical}
          labelType="max"
        >
          {renderLabel(maxLabel)}
        </StyledSliderLabel>
      )}
    </StyledContainer>
  );
});
