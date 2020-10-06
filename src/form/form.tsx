import React from 'react';
import {useForm, FormProvider} from 'react-hook-form';
import {FormProps} from './types';
import {FormValidationContextProvider} from './context';

export const Form: React.FC<FormProps> = props => {
  const {
    children,
    onSubmit,
    validationMode = 'onSubmit',
    reValidationMode = 'onBlur',
  } = props;
  const methods = useForm({
    mode: validationMode,
    reValidateMode: reValidationMode,
  });

  return (
    <FormValidationContextProvider value={validationMode}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
      </FormProvider>
    </FormValidationContextProvider>
  );
};

Form.displayName = 'Form';
