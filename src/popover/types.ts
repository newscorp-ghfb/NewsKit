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
  handleCloseButtonClick?: () => void;
  overrides?: FloatingElementProps['overrides'] & {
    header?: {
      stylePreset?: MQ<string>;
    } & LogicalPaddingProps;
    content?: {
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
