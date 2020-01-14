import React, {useRef} from 'react';
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
  const rangeRef = useRef<Range>(null);
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
  } = props;

  return (
    <StyledContainer vertical={vertical}>
      {minLabel && (
        <StyledSliderLabel vertical={vertical} labelType="min">
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
        ref={rangeRef}
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
          >
            <StyledInnerTrack
              values={values}
              min={min}
              max={max}
              ref={p.ref}
              vertical={vertical}
              style={getTrackBackgroundStyle(props)}
              disabled={disabled}
            >
              {children}
            </StyledInnerTrack>
          </StyledTrack>
        )}
        renderThumb={({props: p, index, isDragged}) => (
          <StyledThumb {...p} disabled={disabled} aria-label={ariaLabel}>
            <ThumbLabelWrapper
              values={values}
              index={index}
              rangeRef={rangeRef.current}
              isDragged={isDragged}
              thumbLabel={thumbLabel}
              vertical={vertical}
            />
          </StyledThumb>
        )}
      />
      {maxLabel && (
        <StyledSliderLabel vertical={vertical} labelType="max">
          {renderLabel(maxLabel)}
        </StyledSliderLabel>
      )}
    </StyledContainer>
  );
});
