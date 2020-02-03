import React from 'react';

import {withTheme} from '../themes/emotion';
import {Svg, SvgLabels} from './svg';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface SkipNextIconProps extends SvgLabels {
  $size: IconSizeKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<SkipNextIconProps> = ({
  $size,
  $color,
  title = 'SkipNext icon',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

export const SkipNext = withTheme<SkipNextIconProps>(props => {
  const Icon = props.theme.icons.SkipNext || defaultIcon;

  return <Icon {...props} />;
});
