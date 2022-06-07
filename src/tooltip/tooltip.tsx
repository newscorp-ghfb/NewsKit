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
  arrow,
} from '@floating-ui/react-dom-interactions';
import composeRefs from '@seznam/compose-react-refs';
import {useRef} from 'react';
import {TooltipProps} from './types';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledPanel, StyledPointer, StyledTooltip} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {useControlled} from '../utils/hooks';

const ThemelessTooltip: React.FC<TooltipProps> = ({
  children,
  content,
  placement = 'top',
  trigger = ['hover', 'focus'],
  open: openProp,
  defaultOpen,
  asLabel,
  overrides,
  hidePointer = false,
  ...props
}) => {
  const [open, setOpen] = useControlled({
    controlledValue: openProp,
    defaultValue: Boolean(defaultOpen),
  });

  const pointerRef = useRef(null);
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    context,
    middlewareData: {arrow: {x: pointerX, y: pointerY} = {}},
  } = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: !hidePointer ? [arrow({element: pointerRef})] : [],
  });

  const {getReferenceProps, getFloatingProps} = useInteractions([
    useHover(context, {
      enabled: trigger.includes('hover'),
    }),
    useFocus(context, {enabled: trigger.includes('focus')}),
    useRole(context, {enabled: !asLabel, role: 'tooltip'}),
    useDismiss(context),
  ]);

  const id = useId();

  const contentIsString = typeof content === 'string';

  const labelOrDescProps: {
    'aria-label'?: string | null;
    'aria-labelledby'?: string | null;
    'aria-describedby'?: string | null;
  } = {};

  // If tooltip is used as a label, add aria-label or aria-labelledby to childrenProps and id to StyledTooltip;
  // aria-label is used when content is string; aria-labelledby is used when it's not a string;
  // Because of above, 'aria-describedby' has different id for reference and floating, hence manually set below as well;
  if (asLabel) {
    labelOrDescProps['aria-label'] = contentIsString ? content : null;
    labelOrDescProps['aria-labelledby'] = open && !contentIsString ? id : null;
  } else {
    labelOrDescProps['aria-describedby'] = open ? id : null;
  }

  const childrenProps = {
    ...labelOrDescProps,
    ...children.props,
  };

  if (!content) {
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
          })}
          strategy={strategy}
          $x={x}
          $y={y}
          placement={placement}
          overrides={overrides}
          hidePointer={hidePointer}
          {...props}
        >
          <StyledPanel as={contentIsString ? 'p' : 'div'} overrides={overrides}>
            {content}
          </StyledPanel>
          {!hidePointer && (
            <StyledPointer
              id={`${id}-pointer`}
              ref={pointerRef}
              placement={placement}
              $x={pointerX}
              $y={pointerY}
              overrides={overrides}
            />
          )}
        </StyledTooltip>
      )}
    </>
  );
};

export const Tooltip = withOwnTheme(ThemelessTooltip)({
  defaults,
  stylePresets,
});
