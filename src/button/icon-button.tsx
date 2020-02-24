import React from 'react';
import {ButtonProps, ButtonSizing, ButtonSize} from './types';
import {BaseButton} from './base-button';

const buttonSizing: Record<ButtonSize, ButtonSizing> = {
  [ButtonSize.Small]: {
    paddingX: 'sizing020',
    paddingY: 'sizing020',
    width: 'sizing060',
    height: 'sizing060',
  },
  [ButtonSize.Medium]: {
    paddingX: 'sizing030',
    paddingY: 'sizing030',
    width: 'sizing080',
    height: 'sizing080',
  },
  [ButtonSize.Large]: {
    paddingX: 'sizing040',
    paddingY: 'sizing040',
    width: 'sizing090',
    height: 'sizing090',
  },
};

export const IconButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({
  children,
  $size = ButtonSize.Small,
  $stylePreset = 'iconButtonSolidPrimary',
  ...restOfProps
}) => (
  <BaseButton
    $stylePreset={$stylePreset}
    $size={$size}
    {...buttonSizing[$size]}
    {...restOfProps}
  >
    {children}
  </BaseButton>
);
