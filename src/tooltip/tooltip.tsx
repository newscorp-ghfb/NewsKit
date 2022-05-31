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
  offset,
} from '@floating-ui/react-dom-interactions';
import composeRefs from '@seznam/compose-react-refs';
import {useRef} from 'react';
import {TooltipProps} from './types';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledPointer, StyledTooltip} from './styled';
import defaults from './defaults';
import stylePresets from './style-presets';
import {useControlled} from '../utils/hooks';
import {useTheme} from '../theme';
import {getResponsiveSpace, ThemeProp} from '../utils';

const calculateDistance = <Props extends ThemeProp>(props: Props) => {
  const {distance} = getResponsiveSpace(
    'distance',
    'tooltip',
    'distance',
    'distance',
  )(props) as {distance: string};
  return parseInt(distance.replace('px', ''), 10);
};

const ThemelessTooltip: React.FC<TooltipProps> = ({
  children,
  title,
  placement = 'top',
  trigger = 'hover',
  open: openProp,
  defaultOpen,
  asLabel,
  overrides,
  showPointer = true,
  ...props
}) => {
  const [open, setOpen] = useControlled({
    controlledValue: openProp,
    defaultValue: Boolean(defaultOpen),
  });

  const theme = useTheme();
  const distance = calculateDistance({theme, overrides});
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
    middleware: showPointer
      ? [arrow({element: pointerRef}), offset(distance)]
      : [],
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

  const isTitleString = typeof title === 'string';

  const labelOrDescProps: {
    'aria-label'?: string | null;
    'aria-labelledby'?: string | null;
    'aria-describedby'?: string | null;
  } = {};

  // If tooltip is used as a label, add aria-label or aria-labelledby to childrenProps and id to StyledTooltip;
  // aria-label is used when title is string; aria-labelledby is used when it's not a string;
  // Because of above, 'aria-describedby' has different id for reference and floating, hence manually set below as well;
  if (asLabel) {
    labelOrDescProps['aria-label'] = isTitleString ? title : null;
    labelOrDescProps['aria-labelledby'] = open && !isTitleString ? id : null;
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
          as="div"
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
          overrides={overrides}
          {...props}
        >
          {showPointer && (
            <StyledPointer
              id="arrow"
              ref={pointerRef}
              placement={placement}
              x={pointerX}
              y={pointerY}
              overrides={overrides}
            />
          )}
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
