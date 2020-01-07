import React from 'react';
import {withTheme} from '../themes/emotion';
import {Svg, SvgLabels} from './svg';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface EmailIconProps extends SvgLabels {
  $size: IconSizeKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<EmailIconProps> = ({
  $size,
  $color,
  title = 'Email icon',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <path d="M20,4 L4,4 C2.9,4 2.01,4.9 2.01,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 L20,4 Z M20,8 L12,13 L4,8 L4,6 L12,11 L20,6 L20,8 L20,8 Z" />
  </Svg>
);

export const Email = withTheme<EmailIconProps>(props => {
  const Icon = props.theme.icons.Email || defaultIcon;
  return <Icon {...props} />;
});
