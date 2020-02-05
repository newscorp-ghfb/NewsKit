import React from 'react';

import {withTheme} from '../themes/emotion';
import {Svg, SvgLabels} from './svg';
import {IconSizeKeys, ColorKeys} from '../themes';

export interface PopoutIconProps extends SvgLabels {
  $size: IconSizeKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<PopoutIconProps> = ({
  $size,
  $color,
  title = 'Popout',
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color}>
    <title>{title}</title>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </Svg>
);

export const Popout = withTheme<PopoutIconProps>(props => {
  const Icon = props.theme.icons.Popout || defaultIcon;
  return <Icon {...props} />;
});
