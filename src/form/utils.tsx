import React from 'react';
import {FormProps, FormInputState} from './types';
import {IconFilledCheckCircle, IconFilledError} from '../icons';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const composeEventHandlers = (listeners: any[] = []) => (event: any) => {
  listeners.forEach(listener => {
    if (typeof listener === 'function') {
      listener(event);
    }
  });
};

export const getStatusIcon = ({
  state,
  validIcon,
  invalidIcon,
  iconSize,
}: {
  state?: FormInputState;
  validIcon?: React.ReactNode;
  invalidIcon?: React.ReactNode;
  iconSize: string;
}): React.ReactNode => {
  if (state === 'invalid') {
    return (
      invalidIcon || (
        <IconFilledError
          data-testid="error-icon"
          overrides={{
            size: iconSize,
            stylePreset: 'iconNegative',
          }}
        />
      )
    );
  }
  if (state === 'valid') {
    return (
      validIcon || (
        <IconFilledCheckCircle
          data-testid="tick-icon"
          overrides={{
            size: iconSize,
            stylePreset: 'iconPositive',
          }}
        />
      )
    );
  }

  return null;
};

export const excludeReactHookFormProps = (props: FormProps) => {
  const {
    resolver,
    defaultValues,
    reValidationMode,
    validationMode,
    ...rest
  } = props;

  return rest;
};
