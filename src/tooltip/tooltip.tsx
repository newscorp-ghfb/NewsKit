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
import {TooltipProps} from './types';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledTooltip, StyledTooltipPanel} from './styled';
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
  labelTooltip,
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
    useRole(context, {enabled: !labelTooltip, role: 'tooltip'}),
    useDismiss(context),
  ]);

  // If tooltip is used as a label, add aria-labelledby to childrenProps and id to StyledTooltip
  const id = useId();
  const nameOrDescProps = {} as {
    'aria-labelledby': string | null;
  };

  if (labelTooltip) {
    nameOrDescProps['aria-labelledby'] = open ? id : null;
  }

  const childrenProps = {
    ...nameOrDescProps,
    ...children.props,
  };

  if (!title) {
    return children;
  }

  return (
    <>
      {React.cloneElement(
        children,
        getReferenceProps({ref: reference, ...childrenProps}),
      )}
      {open && (
        <StyledTooltip
          {...getFloatingProps({
            ref: floating,
            className: 'Tooltip',
            style: {
              position: strategy,
              top: y ?? '',
              left: x ?? '',
            },
          })}
          id={id}
          data-testid="tooltip"
          overrides={overrides}
          {...props}
        >
          <StyledTooltipPanel overrides={overrides}>{title}</StyledTooltipPanel>
        </StyledTooltip>
      )}
    </>
  );
};

export const Tooltip = withOwnTheme(ThemelessTooltip)({
  defaults,
  stylePresets,
});
