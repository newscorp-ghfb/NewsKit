import React from 'react';
import {Svg} from './svg';
import {SizingKeys, ColorKeys} from '../themes';
import {withTheme} from '../themes/emotion';

export interface PlayProps {
  $size: SizingKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<PlayProps> = ({$size, $color}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color}>
    <title>Play</title>
    <polygon points="8 5 8 19 19 12" />
  </Svg>
);

export const Play = withTheme<PlayProps>(props => {
  const Icon = props.theme.icons.Play || defaultIcon;

  return <Icon {...props} />;
});
