import React from 'react';

import {withTheme} from '../themes/emotion';
import {Svg} from './svg';
import {SizingKeys, ColorKeys} from '../themes';

export interface SaveActiveIconProps {
  $size: SizingKeys;
  $color?: ColorKeys;
}

const defaultIcon: React.FC<SaveActiveIconProps> = ({$size, $color}) => (
  <Svg viewBox="0 0 24 24" $size={$size} $color={$color}>
    <title>Save active icon</title>
    <polygon
      stroke="none"
      points="12 17.27 18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21"
    />
  </Svg>
);

export const SaveActive = withTheme<SaveActiveIconProps>(props => {
  const Icon = props.theme.icons.SaveActive || defaultIcon;
  return <Icon {...props} />;
});
