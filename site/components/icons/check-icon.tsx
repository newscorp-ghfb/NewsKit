import React from 'react';
import {Flag, FlagProps, IconOutlinedCheck} from 'newskit';

export const CheckIcon: React.FC<{size?: FlagProps['size']}> = ({size}) => (
  <Flag
    overrides={{
      stylePreset: 'checkIconContainer',
      spaceInset: 'spaceInsetSquish000',
      width: size === 'small' ? 'sizing050' : undefined,
      height: size === 'small' ? 'sizing050' : undefined,
    }}
  >
    <IconOutlinedCheck
      overrides={{
        size: size === 'small' ? undefined : 'iconSize030',
        stylePreset: 'iconPositive',
      }}
    />
  </Flag>
);

CheckIcon.displayName = 'CheckIcon';
