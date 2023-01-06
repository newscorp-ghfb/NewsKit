import * as React from 'react';
import {CSSTransition} from 'react-transition-group';
import {useEffect, useRef} from 'react';
import {
  arrow,
  autoUpdate,
  useFloating,
  useId,
  offset,
  shift,
  flip,
} from '@floating-ui/react-dom-interactions';
import composeRefs from '@seznam/compose-react-refs';
import {BaseFloatingElementProps, ReferenceProps} from './types';
import {StyledFloatingElement, StyledPanel, StyledPointer} from './styled';
import {useControlled} from '../utils/hooks';
import {useTheme} from '../theme';
import {showOverridePxWarnings, getOverridePxValue} from './utils';
import {getTransitionDuration} from '../utils';
import {getTransitionClassName} from '../utils/get-transition-class-name';

export const BaseFloatingElement = React.forwardRef<
  HTMLDivElement,
  BaseFloatingElementProps
>(
  (
    {
      children,
      content,
      placement = 'top',
      open: openProp,
      overrides,
      hidePointer = false,
      role,
      useInteractions,
      buildRefElAriaAttributes,
      buildFloatingElAriaAttributes,
      path,
      onDismiss,
      restoreFocusTo,
      focusElementRef,
      className,
      /* istanbul ignore next */
      fallbackBehaviour = ['flip', 'shift'],
      disableFocusManagement = false,
      dismissOnBlur = false,
      boundary,
    },
    ref,
  ) => {
    const [open, setOpen] = useControlled({
      controlledValue: openProp,
      defaultValue: false,
    });

    const theme = useTheme();
    const distance = getOverridePxValue(
      path,
      {theme, overrides},
      'distance',
      'distance',
    );

    const pointerPadding = getOverridePxValue(
      `${path}.pointer`,
      {theme, overrides},
      'pointer.edgeOffset',
      'edgeOffset',
    );

    useEffect(() => {
      showOverridePxWarnings(distance, 'distance');
      showOverridePxWarnings(pointerPadding, 'pointer.edgeOffset');
    }, [distance, pointerPadding]);

    const panelRef = useRef<HTMLDivElement>(null);
    const pointerRef = useRef(null);
    const {
      x,
      y,
      reference,
      floating,
      strategy,
      context,
      middlewareData: {arrow: {x: pointerX, y: pointerY} = {}},
      placement: statefulPlacement,
      refs,
    } = useFloating<HTMLElement>({
      placement,
      open,
      onOpenChange: isOpen => {
        // Clicking on the target icon button when controlled doesn't call this.
        if (!isOpen && onDismiss) {
          onDismiss();
        }
        setOpen(isOpen);
      },
      whileElementsMounted: autoUpdate,
      middleware: [
        ...(distance ? [offset(distance)] : []),
        ...(fallbackBehaviour.includes('flip')
          ? [flip({boundary})]
          : /* istanbul ignore next */ []),
        ...(fallbackBehaviour.includes('shift')
          ? [shift({boundary})]
          : /* istanbul ignore next */ []),
        ...(!hidePointer
          ? [arrow({element: pointerRef, padding: pointerPadding})]
          : []),
      ],
    });

    const defaultRefId = `ref-${useId()}`;
    const floatingId = `floating-${useId()}`;
    const ariaArgs = {
      floating: {id: floatingId, open},
      ref: {id: children.props.id || defaultRefId},
    };
    const refElAriaAttributes = buildRefElAriaAttributes(ariaArgs);
    const floatingElAriaAttributes = buildFloatingElAriaAttributes(ariaArgs);

    const contentIsString = typeof content === 'string';
    const {getReferenceProps, getFloatingProps} = useInteractions(context);

    // We need to handle changes to the value of 'open' in a useEffect because:
    // - We can't access context.refs in onOpenChange
    const isFirstRun = useRef(true);
    useEffect(() => {
      // Don't update focus on the first render.
      if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }

      // We can't use floating-ui's FloatingFocusManager to update the focus state
      // because this does not allow tabbing past the floating element without closing it.
      if (path === 'popover' && !disableFocusManagement) {
        if (open) {
          /* istanbul ignore next */
          if (focusElementRef?.current) {
            /* istanbul ignore next */
            focusElementRef.current.focus();
          } else {
            /* istanbul ignore next */
            panelRef?.current?.focus();
          }
        } else if (restoreFocusTo) {
          restoreFocusTo.focus();
          // focus should not return to reference element when dismissOnBlur is set to true
        } else if (!dismissOnBlur) {
          /* istanbul ignore next */
          refs.reference?.current?.focus();
        }
      }
    }, [
      open,
      path,
      refs.reference,
      panelRef,
      focusElementRef,
      openProp,
      restoreFocusTo,
      disableFocusManagement,
      dismissOnBlur,
    ]);

    if (!content) {
      return children;
    }

    // This object contains the event handlers that should be added to the reference
    // element (e.g. onClick, etc. if useClick is passed to useInteractions). It is
    // also passed to the content prop (if this is a function) to allow other elements
    // to trigger these handlers (e.g. the Popover's close button triggers the onClick
    // handler).
    const referenceProps = getReferenceProps() as ReferenceProps;

    const baseTransitionClassname = `nk-${path}`;

    return (
      <>
        {React.cloneElement(children, {
          ref: composeRefs<Element>(reference, children.ref),
          ...refElAriaAttributes,
          id:
            floatingElAriaAttributes['aria-labelledby'] && !children.props.id
              ? defaultRefId
              : undefined,
          ...referenceProps,
          // Overriding the referenceProps events and with the user's provided (if any) events.
          onClick: children.props.onClick || referenceProps.onClick,
          onKeyDown: children.props.onKeyDown || referenceProps.onKeyDown,
          onKeyUp: children.props.onKeyUp || referenceProps.onKeyUp,
          onPointerDown:
            children.props.onPointerDown || referenceProps.onPointerDown,
        })}
        <CSSTransition
          in={open}
          timeout={getTransitionDuration(path, '')({theme, overrides})}
          classNames={baseTransitionClassname}
          mountOnEnter
          unmountOnExit
          appear
        >
          {state => (
            <StyledFloatingElement
              ref={ref}
              {...getFloatingProps({
                ref: floating,
                id: floatingId,
              })}
              className={`${className || ''} ${getTransitionClassName(
                baseTransitionClassname,
                state,
              )}`}
              baseTransitionClassname={baseTransitionClassname}
              strategy={strategy}
              $x={x}
              $y={y}
              placement={statefulPlacement}
              overrides={overrides}
              hidePointer={hidePointer}
              role={role}
              {...floatingElAriaAttributes}
              path={path}
            >
              <StyledPanel
                tabIndex={-1}
                data-testid="floating-element-panel"
                as={contentIsString ? 'p' : 'div'}
                overrides={overrides}
                path={path}
                ref={panelRef}
              >
                {typeof content === 'function'
                  ? content(referenceProps, context)
                  : content}
              </StyledPanel>
              {!hidePointer && (
                <StyledPointer
                  path={path}
                  id={`${floatingId}-pointer`}
                  ref={pointerRef}
                  placement={statefulPlacement}
                  $x={pointerX}
                  $y={pointerY}
                  overrides={overrides}
                />
              )}
            </StyledFloatingElement>
          )}
        </CSSTransition>
      </>
    );
  },
);
