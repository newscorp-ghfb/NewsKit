import React from 'react';
import {
  ButtonProps,
  RegularButtonSize,
  ButtonSizing,
  ButtonSize,
} from './types';
import {BaseButton} from './base-button';
import {buttonSizeStyleTokens} from './styles';

const buttonSizing: Record<RegularButtonSize, ButtonSizing> = {
  [ButtonSize.Small]: {
    ...buttonSizeStyleTokens[ButtonSize.Small],
    padding: 'spaceInset020Squish',
  },
  [ButtonSize.Large]: {
    ...buttonSizeStyleTokens[ButtonSize.Medium],
    padding: 'spaceInset030Squish',
  },
};

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({children, $size = ButtonSize.Small, ...restOfProps}) => (
  <BaseButton
    $stylePreset="buttonSolidPrimary"
    $size={$size}
    {...buttonSizing[$size as RegularButtonSize]}
    {...restOfProps}
  >
    {children}
  </BaseButton>
);
