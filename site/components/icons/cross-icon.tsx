import React from 'react';
import {Flag, FlagProps, IconOutlinedClose} from 'newskit';

export const CrossIcon: React.FC<{size?: FlagProps['size']}> = ({size}) => (
  <Flag
    size={size}
    overrides={{
      stylePreset: 'crossIconContainer',
      spaceInset: 'spaceInset000',
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

CrossIcon.displayName = 'CrossIcon';
