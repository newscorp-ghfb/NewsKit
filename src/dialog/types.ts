import React, {HTMLAttributes} from 'react';
import {TransitionToken} from '../theme';
import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export interface BaseDialogOverridesProps {
  overlay?: {
    zIndex?: number;
    stylePreset?: MQ<string>;
    transitionPreset?: MQ<TransitionToken> | MQ<TransitionToken[]>;
  };
  panel?: {
    zIndex?: number;
    stylePreset?: MQ<string>;
    transitionPreset?: MQ<TransitionToken> | MQ<TransitionToken[]>;
  };
  header?: {
    stylePreset?: MQ<string>;
  } & LogicalProps;
  content?: LogicalProps;
  closeButton?: {
    stylePreset?: MQ<string>;
  } & LogicalProps;
}

export interface BaseDialogViewProps extends HTMLAttributes<HTMLDivElement> {
  path: string;
  handleCloseButtonClick: () => void;

  closePosition?: 'left' | 'right' | 'none';
  header?: React.ReactNode;
  children: Exclude<React.ReactNode, 'undefined'>;
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  overrides?: BaseDialogOverridesProps;
  disableFocusTrap?: boolean;
  open?: boolean;
  inline?: boolean;
}

export interface BaseDialogFunctionProps {
  children: (handleCloseButtonClick: () => void) => React.ReactNode;
  renderOverlay: (handleOverlayClick: () => void) => React.ReactNode;
  open: boolean;
  onDismiss: () => void;
  restoreFocusTo?: HTMLElement;
  disableFocusTrap?: boolean;
  hideOverlay?: boolean;
  inline?: boolean;
}
export interface BaseDialogProps
  extends Omit<
      BaseDialogViewProps,
      'className' | 'path' | 'handleCloseButtonClick' | 'open'
    >,
    Omit<BaseDialogFunctionProps, 'children' | 'renderOverlay'>,
    React.AriaAttributes {}
