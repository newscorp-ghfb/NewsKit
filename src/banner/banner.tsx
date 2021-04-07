import React from 'react';
import {BannerProps} from './types';
import {StyledBannerContainer, StyledContentActionsContainer} from './styled';

export const Banner: React.FC<BannerProps> = ({overrides, children}) => (
  <StyledBannerContainer overrides={overrides}>
    <StyledContentActionsContainer overrides={overrides}>
      {children}
    </StyledContentActionsContainer>
  </StyledBannerContainer>
);
