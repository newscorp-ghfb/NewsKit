import {Flag, FlagProps} from 'newskit';
import React from 'react';

export const CircleFlag: React.FC<FlagProps> = props => (
  <Flag
    {...props}
    overrides={{
      spaceInset: 'space000',
      width: 'sizing050',
      height: 'sizing050',
    }}
    size="medium"
  />
);
