import React from 'react';
import {Svg} from '../../svg';
import {customToNewsKitIcon} from '../../custom-to-newskit-icon';
import {createTheme} from 'newskit';

export const IconOutlinedCustomClose = customToNewsKitIcon(
  'IconOutlinedCustomClose',
  props => (
    <Svg {...props} viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="12" />
    </Svg>
  ),
  {size: 'iconSize040'},
);


const theme = createTheme({
  name: 'newskit-override-icons',
  overrides: {
    typographyPresets: {
      icons: {
        IconOutlinedClose: IconOutlinedCustomClose,
      },
    },
  },
});
