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
> = ({size, hideTrack = false, ariaLabel = 'loading', overrides = {}}) => (
  <StyledCircularProgressIndicator size={size} aria-label={ariaLabel}>
    {!hideTrack && <StyledCircularTrack size={size} overrides={overrides} />}

    <StyledCircularProgressIndicatorFills size={size}>
      <StyledLeftHalfCircle size={size}>
        <StyledLeftHalfContainer size={size}>
          <StyledCircularIndicator size={size} overrides={overrides} />
        </StyledLeftHalfContainer>
      </StyledLeftHalfCircle>

      <StyledRightHalfCircle size={size}>
        <StyledRightHalfContainer size={size}>
          <StyledCircularIndicator size={size} overrides={overrides} />
        </StyledRightHalfContainer>
      </StyledRightHalfCircle>
    </StyledCircularProgressIndicatorFills>
  </StyledCircularProgressIndicator>
);
