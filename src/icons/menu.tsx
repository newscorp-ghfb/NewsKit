import React from 'react';
import {SizingKeys, ColorKeys} from '../themes';
import {Svg} from './svg';

export interface MenuIconProps {
  $size: SizingKeys;
  $color?: ColorKeys;
}

export const Menu: React.FC<MenuIconProps> = ({$size, $color}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color}>
    <title>Menu icon</title>
    <rect x="4" y="11" width="16" height="2" rx="1" />
    <rect x="4" y="5" width="16" height="2" rx="1" />
    <rect x="4" y="17" width="16" height="2" rx="1" />
  </Svg>
);
