import React from 'react';
import {TextFieldSize} from '../text-field';
import {StyledLabel} from './styled';
import {LabelProps} from './types';

export const Label = ({
  size = 'medium' as TextFieldSize,
  children,
  state,
  ...props
}: LabelProps) => (
  <StyledLabel
    aria-disabled={state === 'disabled' ? true : undefined}
    size={size}
    state={state}
    {...props}
  >
    {children}
  </StyledLabel>
);
