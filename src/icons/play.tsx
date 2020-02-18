import React from 'react';
import {Svg} from './svg';
import {SvgLabels, SvgBase} from './types';
import {ColorKeys} from '../themes';
import {withTheme} from '../themes/emotion';

export interface PlayProps extends SvgLabels, SvgBase {
  $color?: ColorKeys;
}

const defaultIcon: React.FC<PlayProps> = ({
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

export const Play = withTheme<PlayProps>(props => {
  const Icon = props.theme.icons.Play || defaultIcon;

  return <Icon {...props} />;
});
