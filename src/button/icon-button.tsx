import React from 'react';
import {ButtonProps, ButtonSizing, ButtonSize} from './types';
import {BaseButton} from './base-button';

const buttonSizing: Record<ButtonSize, ButtonSizing> = {
  [ButtonSize.Small]: {
    paddingX: 'sizing020',
    paddingY: 'sizing020',
  },
  [ButtonSize.Medium]: {
    paddingX: 'sizing030',
    paddingY: 'sizing030',
  },
  [ButtonSize.Large]: {
    paddingX: 'sizing040',
    paddingY: 'sizing040',
  },
};

export const IconButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({children, $size = ButtonSize.Small, ...restOfProps}) => (
  <BaseButton
    $stylePreset="iconBButtonSolidPrimary"
    $size={$size}
    {...buttonSizing[$size]}
    {...restOfProps}
  >
    {children}
  </BaseButton>
);
