import * as React from 'react';
import {SvgProps} from './types';
import {Theme} from '../theme';

export * from './filled/custom';
export * from './filled/material';
export * from './outlined/material';
export * from './types';
export * from './svg';
export * from './to-newskit-icon';

export type IconComponent = React.ComponentType<
  SvgProps & {
    theme?: Theme | undefined;
  }
>;
