import * as React from 'react';
import {LegacySvgProps} from './types';
import {Theme} from '../theme';

export * from './filled/custom';
export * from './filled/material';
export * from './outlined/material';
export * from './types';
export * from './svg';

export type IconComponent = React.ComponentType<
  LegacySvgProps & {
    theme?: Theme | undefined;
  }
>;
