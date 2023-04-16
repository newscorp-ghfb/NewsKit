import hotToast, {useToaster} from 'react-hot-toast';
import React, {useEffect, useRef} from 'react';

import {
  ToastOptions,
  ToastID,
  ToastProviderProps,
  ToastAsFunction,
  Renderable,
} from './types';

import {StyledToastProvider, StyledToastBar} from './styled';

import {getVerticalPosition} from './utils';

export const ToastProvider = ({
  position = 'bottom-center',
  autoHideDuration = 6000,
  horizontalOffset = 'space040',
  verticalOffset = 'space040',
  zIndex = 1,
}: ToastProviderProps) => {
  const {toasts, handlers} = useToaster({duration: autoHideDuration});
  const {startPause, endPause, calculateOffset, updateHeight} = handlers;
  const toastContainerRef = useRef<HTMLDivElement>(null);

  // focus in and out are not supported by react
  // so we need to use the native way
  useEffect(() => {
    const toastContainerElement = toastContainerRef.current;

    /* istanbul ignore else */
    if (toastContainerElement) {
      toastContainerElement.addEventListener('focusin', startPause);
      toastContainerElement.addEventListener('focusout', endPause);
    }

    return () => {
      /* istanbul ignore else */
      if (toastContainerElement) {
        toastContainerElement.removeEventListener('focusin', startPause);
        toastContainerElement.removeEventListener('focusout', endPause);
      }
    };
  }, [startPause, endPause]);

  return (
    <StyledToastProvider
      ref={toastContainerRef}
      horizontalOffset={horizontalOffset}
      verticalOffset={verticalOffset}
      position={position}
      onMouseEnter={startPause}
      onMouseLeave={endPause}
      zIndex={zIndex}
    >
      {toasts.map(toast => {
        const offset = calculateOffset(toast.id, {
          reverseOrder: true,
          margin: 0,
        });
        const ref = (el: HTMLDivElement) => {
          if (el && !toast.height) {
            const height = el.offsetHeight;
            /* istanbul ignore next */
            if (height) {
              updateHeight(toast.id, height);
            }
          }
        };

        let node = toast.message;
        /* istanbul ignore else */
        if (typeof node === 'function') {
          node = node(toast);
        }

        return (
          <StyledToastBar
            style={{[getVerticalPosition(position)]: offset}}
            key={toast.id}
            position={position}
            ref={ref}
            visible={toast.visible}
          >
            {node}
          </StyledToastBar>
        );
      })}
    </StyledToastProvider>
  );
};

export const toast = (
  component: ToastAsFunction | Renderable,
  toastOptions?: ToastOptions,
): ToastID => {
  const options = {
    duration: toastOptions?.autoHideDuration,
  };

  return hotToast(e => {
    const onClose = () => hotToast.dismiss(e.id);

    if (typeof component === 'function') {
      return component({id: e.id, onClose});
    }
    return component;
  }, options);
};
