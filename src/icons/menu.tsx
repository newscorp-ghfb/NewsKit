import React from 'react';
import {IconSizeKeys, ColorKeys} from '../themes';
import {Svg, SvgLabels} from './svg';

export interface MenuIconProps extends SvgLabels {
  $size: IconSizeKeys;
  $color?: ColorKeys;
}

export const Menu: React.FC<MenuIconProps> = ({
  $size,
  $color,
  title = 'Menu icon',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <rect x="4" y="11" width="16" height="2" rx="1" />
    <rect x="4" y="5" width="16" height="2" rx="1" />
    <rect x="4" y="17" width="16" height="2" rx="1" />
  </Svg>
);
