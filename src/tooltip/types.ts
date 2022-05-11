import React from 'react';
import {MQ} from '../utils/style';

export type TooltipPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  children?: React.ReactNode;
  title?: React.ReactNode;
  trigger: ('click' | 'hover' | 'focus')[];
  placement?: TooltipPlacement;
  open?: boolean;
  onOpen?: (event: React.SyntheticEvent) => void;
  onDismiss?: (event: React.SyntheticEvent) => void;

  overrides?: {
    panel?: {
      maxWidth?: MQ<string>;
      minWidth?: MQ<string>;
      space?: MQ<string>;
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    };
    zIndex?: number;
  };
}
