import React, {HTMLAttributes} from 'react';
import {MQ} from '../utils/style';

export interface BaseDialogOverridesProps {
  overlay?: {
    zIndex?: number;
    stylePreset?: MQ<string>;
  };
  panel?: {
    zIndex?: number;
    stylePreset?: MQ<string>;
  };
  header?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
  };
  content?: {
    spaceInset?: MQ<string>;
  };
  closeButton?: {
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;
  };
}

export interface BaseDialogViewProps extends HTMLAttributes<HTMLDivElement> {
  path: string;
  handleCloseButtonClick: () => void;

  closePosition?: 'left' | 'right';
  header?: React.ReactNode;
  children: Exclude<React.ReactNode, 'undefined'>;
  ariaDescribedby?: string;
  ariaLabelledby?: string;
  overrides?: BaseDialogOverridesProps;
}

export interface BaseDialogFunctionProps {
  children: (handleCloseButtonClick: () => void) => React.ReactNode;
  renderOverlay: (handleOverlayClick: () => void) => React.ReactNode;
  open: boolean;
  onDismiss: () => void;
  restoreFocusTo?: HTMLElement;
}
export interface BaseDialogProps
  extends Omit<
      BaseDialogViewProps,
      'className' | 'path' | 'handleCloseButtonClick'
    >,
    Omit<BaseDialogFunctionProps, 'children' | 'renderOverlay'>,
    React.AriaAttributes {}
