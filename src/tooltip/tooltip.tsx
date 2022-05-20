import * as React from 'react';
import {
  autoUpdate,
  useFloating,
  useInteractions,
  useHover,
  useFocus,
  useRole,
  useDismiss,
  useId,
} from '@floating-ui/react-dom-interactions';
import composeRefs from '@seznam/compose-react-refs';
import {TooltipProps} from './types';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledTooltip} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {useControlled} from '../utils/hooks';

const ThemelessTooltip: React.FC<TooltipProps> = ({
  children,
  title,
  placement = 'top',
  trigger = 'hover',
  open: openProp,
  defaultOpen,
  asLabel,
  overrides,
  ...props
}) => {
  const [open, onOpenChange] = useControlled({
    controlledValue: openProp,
    defaultValue: Boolean(defaultOpen),
  });

  const {x, y, reference, floating, strategy, context} = useFloating({
    placement,
    open,
    onOpenChange,
    whileElementsMounted: autoUpdate,
  });

  const {getReferenceProps, getFloatingProps} = useInteractions([
    useHover(context, {
      enabled: trigger.includes('hover'),
    }),
    useFocus(context, {enabled: trigger.includes('focus')}),
    useRole(context, {enabled: !asLabel, role: 'tooltip'}),
    useDismiss(context),
  ]);

  // If tooltip is used as a label, add aria-labelledby to childrenProps and id to StyledTooltip;
  // Because of above, 'aria-describedby' has different id for reference and floating, hence manually set below as well;
  const id = useId();

  const labelOrDescProps = {} as {
    'aria-labelledby'?: string | null;
    'aria-describedby'?: string | null;
  };

  if (asLabel) {
    labelOrDescProps['aria-labelledby'] = open ? id : null;
  } else {
    labelOrDescProps['aria-describedby'] = open ? id : null;
  }

  const childrenProps = {
    ...labelOrDescProps,
    ...children.props,
  };

  if (!title) {
    return children;
  }

  return (
    <>
      {React.cloneElement(
        children,
        getReferenceProps({
          ref: composeRefs(reference, children.ref),
          ...childrenProps,
        }),
      )}
      {open && (
        <StyledTooltip
          {...getFloatingProps({
            ref: floating,
            id,
            className: 'Tooltip',
            style: {
              position: strategy,
              top: y ?? '',
              left: x ?? '',
            },
          })}
          data-testid="tooltip"
          overrides={overrides}
          {...props}
        >
          {title}
        </StyledTooltip>
      )}
    </>
  );
};

export const Tooltip = withOwnTheme(ThemelessTooltip)({
  defaults,
  stylePresets,
});
