import React from 'react';
import {ButtonProps} from './types';
import {BaseButton} from './baseButton';

export const IconButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({children, equalSides, ...restOfProps}) => (
  <BaseButton equalSides {...restOfProps}>
    {children}
  </BaseButton>
);
