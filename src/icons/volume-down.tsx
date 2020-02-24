import React from 'react';

import {withTheme} from '../themes/emotion';
import {Svg} from './svg';
import {SvgProps} from './types';

const defaultIcon: React.FC<SvgProps> = ({
  $size,
  $color,
  title = 'Volume down',
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color}>
    <title>{title}</title>
    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </Svg>
);

export const VolumeDown = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.VolumeDown || defaultIcon;
  return <Icon {...props} />;
});
