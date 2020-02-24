import React from 'react';
import {Svg} from './svg';
import {SvgProps} from './types';

import {withTheme} from '../themes/emotion';

const defaultIcon: React.FC<SvgProps> = ({
  $size,
  $color,
  title = 'Play',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <polygon points="8 5 8 19 19 12" />
  </Svg>
);

export const Play = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Play || defaultIcon;

  return <Icon {...props} />;
});
