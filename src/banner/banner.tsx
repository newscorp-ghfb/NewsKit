import React from 'react';
import {BannerProps} from './types';
import {
  StyledBannerContainer,
  StyledInnerContainer,
  StyledContentContainer,
  StyledIconContainer,
} from './styled';

export const Banner: React.FC<BannerProps> = ({overrides, children, icon}) => (
  <StyledBannerContainer data-testid="banner-container" overrides={overrides}>
    <StyledInnerContainer
      flow="horizontal-top"
      stackDistribution="flex-start"
      wrap="nowrap"
      overrides={overrides}
    >
      {icon && (
        <StyledIconContainer overrides={overrides}>{icon}</StyledIconContainer>
      )}
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledInnerContainer>
  </StyledBannerContainer>
);
