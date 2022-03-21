import React from 'react';
import {FormProps, FormInputState} from './types';
import {IconFilledCheckCircle, IconFilledError} from '../icons';

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
