import React from 'react';
import {Placement} from '@floating-ui/react-dom-interactions';
import {MQ} from '../utils/style';
import {LogicalPaddingProps} from '../utils/logical-properties';

export type TriggerType = 'hover' | 'focus';

export interface TooltipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'defaultValue'> {
  children: React.ReactElement & {
    ref?: React.Ref<unknown>;
  };
  title: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  trigger?: TriggerType | TriggerType[];
  placement?: Placement;
  asLabel?: boolean;
  overrides?: {
    zIndex?: number;
    maxWidth?: MQ<string>;
    minWidth?: MQ<string>;
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  } & LogicalPaddingProps;
}
