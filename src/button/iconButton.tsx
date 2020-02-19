import React from 'react';
import {ButtonProps} from './types';
import {Button} from './button';

export const IconButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({children, equalSides, ...restOfProps}) => (
  <Button equalSides {...restOfProps}>
    {children}
  </Button>
);
