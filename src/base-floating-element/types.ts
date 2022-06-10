import React, {AriaAttributes, AriaRole} from 'react';
import {
  FloatingContext,
  Placement,
  useId,
  useInteractions,
} from '@floating-ui/react-dom-interactions';
import {MQ} from '../utils';
import {LogicalPaddingProps} from '../utils/logical-properties';

export type TriggerType = 'click' | 'hover' | 'focus';
export type FallbackBehaviourType = 'flip' | 'shift';

export type BuildAriaAttributesFn = (args: {
  floating: {
    id: ReturnType<typeof useId>;
    open?: boolean;
  };
}) => AriaAttributes;

export interface FloatingElementProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'defaultValue'> {
  children: React.ReactElement & {
    ref?: React.Ref<HTMLElement>;
  };
  trigger?: TriggerType | TriggerType[];
  content: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  placement?: Placement;
  overrides?: {
    zIndex?: number;
    maxWidth?: MQ<string>;
    minWidth?: MQ<string>;
    distance?: MQ<string>;
    stylePreset?: MQ<string>;
    panel?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    } & LogicalPaddingProps;
    pointer?: {
      stylePreset?: MQ<string>;
      size?: MQ<string>;
    };
  };
  className?: string;
  onDismiss?: () => void;
  fallbackBehaviour?: FallbackBehaviourType | FallbackBehaviourType[];
  boundary?: 'viewport' | 'window' | 'scrollParent' | Element;
  hidePointer?: boolean;
  // popover props
  restoreFocusTo?: HTMLElement;
}

export interface BaseFloatingElementProps extends FloatingElementProps {
  role?: AriaRole;
  useInteractions: (
    context: FloatingContext<HTMLElement>,
  ) => ReturnType<typeof useInteractions>;
  buildContextAriaAttributes: BuildAriaAttributesFn;
  buildFloatingElementAriaAttributes: BuildAriaAttributesFn;
  path: 'tooltip' | 'popover';
}
