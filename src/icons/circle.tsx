import React from 'react';
import {Svg} from './svg';
import {SvgLabels, SvgBase} from './types';
import {ColorKeys} from '../themes';
import {withTheme} from '../themes/emotion';

export interface CircleProps extends SvgLabels, SvgBase {
  $color?: ColorKeys;
}

const defaultIcon: React.FC<CircleProps> = ({
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

export const Circle = withTheme<CircleProps>(props => {
  const Icon = props.theme.icons.Circle || defaultIcon;

  return <Icon {...props} />;
});
