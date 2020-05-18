import React from 'react';
import {ButtonSize, ButtonProps} from './types';
import {Button} from './button';

const iconButtonSizing: Record<ButtonSize, Partial<ButtonProps>> = {
  [ButtonSize.Small]: {
    padding: 'spaceInset020',
    width: 'sizing060',
    height: 'sizing060',
  },
  [ButtonSize.Medium]: {
    padding: 'spaceInset030',
    width: 'sizing080',
    height: 'sizing080',
  },
  [ButtonSize.Large]: {
    padding: 'spaceInset040',
    width: 'sizing090',
    height: 'sizing090',
  },
};

export const IconButton: React.FC<ButtonProps> = ({
  size = ButtonSize.Small,
  ...props
}) => (
  <Button
    stylePreset="iconButtonDefault"
    size={size}
    {...iconButtonSizing[size]}
    {...props}
  />
);
