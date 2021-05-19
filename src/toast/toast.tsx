import React from 'react';
import {ToastProps} from './types';
import {
  StyledToastContainer,
  StyledContentContainer,
  StyledMessageContainer,
  StyledIconContainer,
} from './styled';

export const Toast: React.FC<ToastProps> = ({
  overrides,
  children,
  icon,
  ...restProps
}) => (
  <StyledToastContainer
    role="status"
    aria-live="polite"
    data-testid="toast-container"
    overrides={overrides}
    {...restProps}
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
  </StyledToastContainer>
);
