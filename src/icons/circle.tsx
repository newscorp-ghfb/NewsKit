import React from 'react';
import {Svg} from './svg';

import {SvgProps} from './types';
import {withTheme} from '../themes/emotion';

const defaultIcon: React.FC<SvgProps> = ({
  $size,
  $color,
  title = 'Circle',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <circle cx="12" cy="12" r="12" />
  </Svg>
);

export const Circle = withTheme<SvgProps>(props => {
  const Icon = props.theme.icons.Circle || defaultIcon;

  return <Icon {...props} />;
});
