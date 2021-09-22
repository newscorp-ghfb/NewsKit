import React from 'react';
import {StyledLabel} from './styled';
import {LabelProps, TextFieldSize} from './types';

export const Label = ({
  size = TextFieldSize.Medium,
  children,
  state,
  ...props
}: LabelProps) => (
  <StyledLabel size={size} state={state} {...props}>
    {children}
  </StyledLabel>
);
