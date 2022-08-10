import React from 'react';
import {ButtonOverrides} from '../button';
import {MQ} from '../utils/style';
import {LogicalProps} from '../utils/logical-properties';

export interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  vertical?: boolean;
  controls?: 'hover' | 'static';
  stepDistance?: number;
  snapAlign?: 'start' | 'center' | 'end';
  scrollBar?: boolean;
  overrides?: {
    controls?: {
      offset?: MQ<string>;
      button?: ButtonOverrides;
    };
    overlays?: {
      stylePreset?: MQ<string>;
      size?: MQ<string>;
    };
  } & LogicalProps;
}
