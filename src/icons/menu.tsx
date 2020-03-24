import React from 'react';
import {withTheme} from '../themes';
import {Svg} from './svg';
import {SvgProps} from './types';

const defaultIcon: React.FC<SvgProps> = ({
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

export const Menu = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Menu || defaultIcon;
  return <Icon {...props} />;
});
