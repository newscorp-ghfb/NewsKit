import React from 'react';
import {ButtonProps, ButtonSizing, ButtonSize} from './types';
import {BaseButton} from './base-button';

const buttonSizing: Record<ButtonSize, ButtonSizing> = {
  [ButtonSize.Small]: {
    paddingX: 'sizing020',
    paddingY: 'sizing030',
  },
  [ButtonSize.Medium]: {
    paddingX: 'sizing030',
    paddingY: 'sizing040',
  },
  [ButtonSize.Large]: {
    paddingX: 'sizing040',
    paddingY: 'sizing050',
  },
};

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({children, $size = ButtonSize.Small, ...restOfProps}) => (
  <BaseButton
    $stylePreset="buttonSolidPrimary"
    $size={$size}
    {...buttonSizing[$size]}
    {...restOfProps}
  >
    {children}
  </BaseButton>
);
