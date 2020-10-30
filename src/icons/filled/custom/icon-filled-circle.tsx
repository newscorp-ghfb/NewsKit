import React from 'react';
import {Svg} from '../../svg';
import {transformCustomIcon} from '../../transform-custom-icon';

export const IconFilledCircle = transformCustomIcon(
  'IconFilledCircle',
  {size: 'iconSize040'},
  props => (
    <Svg {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" />
    </Svg>
  ),
);
