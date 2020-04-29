import React from 'react';
import {CircularProgressIndicatorProps} from './types';
import {
  StyledCircularProgressIndicator,
  StyledCircularTrack,
  StyledCircularProgressIndicatorFills,
  StyledLeftHalfCircle,
  StyledLeftHalfContainer,
  StyledCircularIndicator,
  StyledRightHalfCircle,
  StyledRightHalfContainer,
} from './styled';

export const CircularProgressIndicator: React.FC<
  CircularProgressIndicatorProps
> = ({
  size,
  hideTrack = false,
  ariaLabel = 'loading',
  sliderTrackStylePreset,
  sliderIndicatorTrackStylePreset,
}) => (
  <StyledCircularProgressIndicator size={size} aria-label={ariaLabel}>
    {!hideTrack && (
      <StyledCircularTrack
        size={size}
        sliderTrackStylePreset={sliderTrackStylePreset}
      />
    )}

    <StyledCircularProgressIndicatorFills size={size}>
      <StyledLeftHalfCircle size={size}>
        <StyledLeftHalfContainer size={size}>
          <StyledCircularIndicator
            size={size}
            sliderIndicatorTrackStylePreset={sliderIndicatorTrackStylePreset}
          />
        </StyledLeftHalfContainer>
      </StyledLeftHalfCircle>

      <StyledRightHalfCircle size={size}>
        <StyledRightHalfContainer size={size}>
          <StyledCircularIndicator
            size={size}
            sliderIndicatorTrackStylePreset={sliderIndicatorTrackStylePreset}
          />
        </StyledRightHalfContainer>
      </StyledRightHalfCircle>
    </StyledCircularProgressIndicatorFills>
  </StyledCircularProgressIndicator>
);
