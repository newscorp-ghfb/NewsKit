import React from 'react';
import {createTheme, customToNewsKitIcon} from 'newskit';

import {Svg} from '../../svg';

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
    icons: {
      IconOutlinedClose: IconOutlinedCustomClose,
    },
  },
});
