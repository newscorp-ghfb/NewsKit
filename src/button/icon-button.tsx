import React from 'react';
import {ButtonProps, ButtonSizing, ButtonSize} from './types';
import {BaseButton} from './base-button';

const buttonSizing: Record<ButtonSize, ButtonSizing> = {
  [ButtonSize.Small]: {
    paddingX: 'spaceInset020',
    paddingY: 'spaceInset020',
    $width: 'sizing060',
    $height: 'sizing060',
  },
  [ButtonSize.Medium]: {
    paddingX: 'spaceInset030',
    paddingY: 'spaceInset030',
    $width: 'sizing080',
    $height: 'sizing080',
  },
  [ButtonSize.Large]: {
    paddingX: 'spaceInset040',
    paddingY: 'spaceInset040',
    $width: 'sizing090',
    $height: 'sizing090',
  },
};

export const IconButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({children, $size = ButtonSize.Small, ...restOfProps}) => (
  <BaseButton
    $stylePreset="iconButtonSolidPrimary"
    $size={$size}
    {...buttonSizing[$size]}
    {...restOfProps}
  >
    {children}
  </BaseButton>
);
