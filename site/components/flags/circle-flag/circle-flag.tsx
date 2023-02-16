import {Flag, FlagProps} from 'newskit';
import React from 'react';

export const CircleFlag: React.FC<FlagProps> = props => (
  <Flag
    {...props}
    overrides={{
      paddingBlock: 'space000',
      paddingInline: 'space000',
      width: 'sizing050',
      height: 'sizing050',
    }}
    size="medium"
  />
);
