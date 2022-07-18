import React, {AriaAttributes, AriaRole} from 'react';
import {
  Boundary,
  FloatingContext,
  Placement,
  useInteractions,
} from '@floating-ui/react-dom-interactions';
import {MQ} from '../utils';
import {LogicalPaddingProps} from '../utils/logical-properties';
import {TransitionToken} from '../theme';

export type TriggerType = 'click' | 'hover' | 'focus';
export type FallbackBehaviourType = 'flip' | 'shift';

export type BuildAriaAttributesFn = (args: {
  floating: {
    id: string;
    open?: boolean;
  };
  ref: {
    id: string;
  };
}) => AriaAttributes;

type ReferenceProps = ReturnType<
  ReturnType<typeof useInteractions>['getReferenceProps']
>;

export interface FloatingElementProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'defaultValue'> {
  children: React.ReactElement & {
    ref?: React.Ref<HTMLElement>;
  };
  trigger?: TriggerType | TriggerType[];
  content:
    | React.ReactNode
    | ((referenceProps: ReferenceProps) => React.ReactNode);
  open?: boolean;
  placement?: Placement;
  overrides?: {
    zIndex?: number;
    maxWidth?: MQ<string>;
    minWidth?: MQ<string>;
    distance?: string;
    stylePreset?: MQ<string>;
    panel?: {
      stylePreset?: MQ<string>;
      typographyPreset?: MQ<string>;
    } & LogicalPaddingProps;
    pointer?: {
      stylePreset?: MQ<string>;
      size?: MQ<string>;
      edgeOffset?: string;
    };
    transitionPreset?: TransitionToken | TransitionToken[];
  };
  className?: string;
  onDismiss?: () => void;
  fallbackBehaviour?: FallbackBehaviourType | FallbackBehaviourType[];
  boundary?: Boundary;
  hidePointer?: boolean;
  restoreFocusTo?: HTMLElement;
  focusElementRef?: React.RefObject<HTMLElement>;
}

export interface BaseFloatingElementProps extends FloatingElementProps {
  role?: AriaRole;
  useInteractions: (
    context: FloatingContext<HTMLElement>,
  ) => ReturnType<typeof useInteractions>;
  buildRefElAriaAttributes: BuildAriaAttributesFn;
  buildFloatingElAriaAttributes: BuildAriaAttributesFn;
  path: 'tooltip' | 'popover';
}
