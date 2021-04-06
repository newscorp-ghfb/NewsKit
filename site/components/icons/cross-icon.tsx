import React from 'react';
import {Flag, FlagProps, IconOutlinedClose} from 'newskit';

export const CrossIcon: React.FC<{size?: FlagProps['size']}> = ({size}) => (
  <Flag
    size={size}
    overrides={{
      stylePreset: 'crossIconContainer',
      spaceInset: 'spaceInsetSquish000',
      width: size === 'small' ? 'sizing050' : undefined,
      height: size === 'small' ? 'sizing050' : undefined,
    }}
  >
    <IconOutlinedClose
      overrides={{
        size: size === 'small' ? undefined : 'iconSize030',
        stylePreset: 'iconNegative',
      }}
    />
  </Flag>
);

CrossIcon.displayName = 'CrossIcon';
