import React from 'react';
import {Svg} from './svg';
import {SizingKeys, ColorKeys} from '../themes';
import {withTheme} from '../themes/emotion';

export interface CircleProps {
  $size: SizingKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<CircleProps> = ({$size, $color}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color}>
    <title>Circle</title>
    <circle cx="12" cy="12" r="12" />
  </Svg>
);

export const Circle = withTheme<CircleProps>(props => {
  const Icon = props.theme.icons.Circle || defaultIcon;

  return <Icon {...props} />;
});
