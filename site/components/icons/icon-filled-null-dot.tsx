import {styled} from 'newskit';
import React from 'react';
import {IconFilledCircle} from './icon-filled-circle';

// Apply horizontal margin so dot is centered with cross and check icons.
const Icon = styled(IconFilledCircle)`
  margin: 0 ${({theme}) => parseInt(theme.spacePresets.space030, 10) / 2}px;
`;

export const IconFilledNullDot: React.FC = () => (
  <Icon
    overrides={{
      size: 'sizing030',
      stylePreset: 'nullDotIcon',
    }}
  />
);

IconFilledNullDot.displayName = 'IconFilledNullDot';
