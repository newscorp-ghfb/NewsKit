import {Flag} from 'newskit';
import React from 'react';
import {MonoProps} from './types';

export const Mono: React.FC<MonoProps> = ({overrides, children, ...props}) => (
  <Flag
    {...props}
    overrides={{
      typographyPreset: 'utilityCode020',
      stylePreset: 'flagSolidNeutral',
      ...overrides,
    }}
    size="small"
  >
    {children}
  </Flag>
);
