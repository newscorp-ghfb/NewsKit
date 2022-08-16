import React from 'react';
import {FloatingElementProps} from '../base-floating-element';
import {MQ} from '../utils';
import {LogicalPaddingProps} from '../utils/logical-properties';

export type PopoverProps = Omit<
  FloatingElementProps,
  'trigger' | 'overrides'
> & {
  closePosition?: 'left' | 'right' | 'none';
  header?: React.ReactNode;
  enableDismiss?: boolean;
  overrides?: FloatingElementProps['overrides'] & {
    header?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    } & LogicalPaddingProps;
    content?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    } & LogicalPaddingProps;
    closeButton?: {
      stylePreset?: MQ<string>;
    };
    closeButtonContainer?: {
      stylePreset?: MQ<string>;
    } & LogicalPaddingProps;
  };
};
