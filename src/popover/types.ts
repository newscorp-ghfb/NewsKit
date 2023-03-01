import React from 'react';
import {FloatingElementProps} from '../base-floating-element';
import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';

export type PopoverProps = Omit<
  FloatingElementProps,
  'trigger' | 'overrides' | 'content'
> & {
  children: React.ReactNode;
  content: React.ReactNode;
  closePosition?: 'left' | 'right' | 'none';
  header?: React.ReactNode;
  handleCloseButtonClick?: () => void;
  enableDismiss?: boolean;
  overrides?: FloatingElementProps['overrides'] & {
    header?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    } & LogicalProps;
    content?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    } & LogicalProps;
    closeButton?: {
      stylePreset?: MQ<string>;
    };
    closeButtonContainer?: {
      stylePreset?: MQ<string>;
    } & LogicalProps;
  };
};
