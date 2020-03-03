import React from 'react';
import {ButtonCommonProps, ButtonSizing, ButtonSize} from './types';
import {BaseButton} from './base-button';
import {buttonSizeStyleTokens} from './styles';

const buttonSizing: Record<ButtonSize, ButtonSizing> = {
  [ButtonSize.Small]: {
    ...buttonSizeStyleTokens[ButtonSize.Small],
    padding: 'spaceInset020',
    $width: 'sizing060',
    $height: 'sizing060',
  },
  [ButtonSize.Medium]: {
    ...buttonSizeStyleTokens[ButtonSize.Medium],
    padding: 'spaceInset030',
    $width: 'sizing080',
    $height: 'sizing080',
  },
  [ButtonSize.Large]: {
    ...buttonSizeStyleTokens[ButtonSize.Large],
    padding: 'spaceInset040',
    $width: 'sizing090',
    $height: 'sizing090',
  },
};

export const IconButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonCommonProps
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
