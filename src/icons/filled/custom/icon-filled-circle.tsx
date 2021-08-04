import React from 'react';
import {Svg} from '../../svg';
import {customToNewsKitIcon} from '../../custom-to-newskit-icon';

export const IconFilledCircle = customToNewsKitIcon(
  'IconFilledCircle',
  props => (
    <Svg {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" />
    </Svg>
  ),
);
