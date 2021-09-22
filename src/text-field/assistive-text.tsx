import React from 'react';
import {StyledAssistiveText, StyledAssistiveTextContainer} from './styled';

import {AssistiveTextProps, TextFieldSize} from './types';

export const AssistiveText = ({
  overrides,
  size = TextFieldSize.Medium,
  state,
  children,
  ...props
}: AssistiveTextProps) => (
  <StyledAssistiveTextContainer size={size} overrides={overrides}>
    {children && (
      <StyledAssistiveText
        size={size}
        overrides={overrides}
        state={state}
        role={state === 'invalid' ? 'alert' : undefined}
        aria-live={state === 'invalid' ? 'polite' : undefined}
        {...props}
      >
        {children}
      </StyledAssistiveText>
    )}
  </StyledAssistiveTextContainer>
);
