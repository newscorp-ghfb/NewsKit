import React from 'react';
import {Svg} from './svg';
import {SvgLabels, SvgBase} from './types';
import {ColorKeys} from '../themes';
import {withTheme} from '../themes/emotion';

export interface PauseProps extends SvgLabels, SvgBase {
  $color?: ColorKeys;
}

const defaultIcon: React.FC<PauseProps> = ({
  $size,
  $color,
  title = 'Pause',
  ariaLabel,
}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color} aria-label={ariaLabel}>
    <title>{title}</title>
    <path d="M6,19 L10,19 L10,5 L6,5 L6,19 Z M14,5 L14,19 L18,19 L18,5 L14,5 Z" />
  </Svg>
);

export const Pause = withTheme<PauseProps>(props => {
  const Icon = props.theme.icons.Pause || defaultIcon;

  return <Icon {...props} />;
});
