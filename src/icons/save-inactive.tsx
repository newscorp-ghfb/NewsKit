import React from 'react';
import {withTheme} from '../themes/emotion';
import {Svg, SvgLabels} from './svg';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface SaveInactiveIconProps extends SvgLabels {
  $size: IconSizeKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<SaveInactiveIconProps> = ({
  $size,
  $color,
  title = 'Save inactive icon',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <path
      stroke="none"
      d="M22,9.24 L14.81,8.62 L12,2 L9.19,8.63 L2,9.24 L7.46,13.97 L5.82,21 L12,17.27 L18.18,21 L16.55,13.97 L22,9.24 L22,9.24 Z M12,15.4 L8.24,17.67 L9.24,13.39 L5.92,10.51 L10.3,10.13 L12,6.1 L13.71,10.14 L18.09,10.52 L14.77,13.4 L15.77,17.68 L12,15.4 L12,15.4 Z"
    />
  </Svg>
);

export const SaveInactive = withTheme<SaveInactiveIconProps>(props => {
  const Icon = props.theme.icons.SaveInactive || defaultIcon;
  return <Icon {...props} />;
});
