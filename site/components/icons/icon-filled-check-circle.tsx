import React from 'react';
import {Flag, FlagProps, toNewsKitIcon} from 'newskit';

import {Check as OutlinedCheck} from '@emotion-icons/material-outlined/Check';

const IconOutlinedCheck = toNewsKitIcon(OutlinedCheck);

export const IconFilledCheckCircle: React.FC<{size?: FlagProps['size']}> = ({
  size,
}) => (
  <Flag
    overrides={{
      stylePreset: 'checkIconContainer',
      spaceInset: 'spaceInsetSquish000',
      width: size === 'small' ? 'sizing050' : 'sizing060',
      height: size === 'small' ? 'sizing050' : 'sizing060',
    }}
  >
    <IconOutlinedCheck
      overrides={{
        size: size === 'small' ? undefined : 'iconSize020',
        stylePreset: 'iconPositive',
      }}
    />
  </Flag>
);

IconFilledCheckCircle.displayName = 'IconFilledCheckCircle';
