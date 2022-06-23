import {FloatingElementProps} from '../base-floating-element';

export type TriggerType = 'hover' | 'focus';

export type TooltipProps = Omit<
  FloatingElementProps,
  'trigger' | 'onDismiss' | 'restoreFocusTo'
> & {
  trigger?: TriggerType | TriggerType[];
  asLabel?: boolean;
};
