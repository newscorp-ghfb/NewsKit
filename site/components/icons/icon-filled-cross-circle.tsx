import React from 'react';
import {Flag, FlagProps, toNewsKitIcon} from 'newskit';

import {Close as OutlinedClose} from '@emotion-icons/material-outlined/Close';

const IconOutlinedClose = toNewsKitIcon(OutlinedClose);

export const IconFilledCrossCircle: React.FC<{size?: FlagProps['size']}> = ({
  size,
}) => (
  <Flag
    size={size}
    overrides={{
      stylePreset: 'crossIconContainer',
      paddingBlock: 'space000',
      paddingInline: 'space000',
      width: size === 'small' ? 'sizing050' : 'sizing060',
      height: size === 'small' ? 'sizing050' : 'sizing060',
    }}
  >
    <IconOutlinedClose
      overrides={{
        size: size === 'small' ? undefined : 'iconSize020',
        stylePreset: 'iconNegative',
      }}
    />
  </Flag>
);

IconFilledCrossCircle.displayName = 'IconFilledCrossCircle';
