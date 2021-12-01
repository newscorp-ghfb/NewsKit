import React from 'react';
import {TextFieldSize} from '../text-field';
import {StyledAssistiveText, StyledAssistiveTextContainer} from './styled';

import {AssistiveTextProps} from './types';

export const AssistiveText = ({
  overrides,
  size = 'medium' as TextFieldSize,
  state,
  children,
  ...props
}: AssistiveTextProps) => (
  <StyledAssistiveTextContainer size={size} overrides={overrides}>
    {children && (
      <StyledAssistiveText
        aria-disabled={state === 'disabled' ? true : undefined}
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
