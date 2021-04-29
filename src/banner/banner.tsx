import React from 'react';
import {BannerProps} from './types';
import {
  StyledBannerContainer,
  StyledInnerContainer,
  StyledContentContainer,
  StyledIconContainer,
  StyledMessageContainer,
} from './styled';

export const Banner: React.FC<BannerProps> = ({
  overrides,
  children,
  icon,
  ...restProps
}) => (
  <StyledBannerContainer
    role="region"
    aria-live="polite"
    data-testid="banner-container"
    overrides={overrides}
    {...restProps}
  >
    <StyledInnerContainer
      flow="horizontal-top"
      stackDistribution="flex-start"
      wrap="nowrap"
      overrides={overrides}
    >
      {icon && (
        <StyledIconContainer overrides={overrides}>{icon}</StyledIconContainer>
      )}
      <StyledContentContainer overrides={overrides}>
        <StyledMessageContainer
          overrides={overrides}
          as={
            typeof children === 'string' ||
            (Array.isArray(children) &&
              children.some(child => typeof child === 'string'))
              ? 'p'
              : 'div'
          }
        >
          {children}
        </StyledMessageContainer>
      </StyledContentContainer>
    </StyledInnerContainer>
  </StyledBannerContainer>
);
