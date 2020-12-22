import React, {forwardRef, useImperativeHandle, useRef} from 'react';
import {useForm, FormProvider} from 'react-hook-form/dist/index.ie11';
import {FormProps, FormRef} from './types';
import {FormValidationContextProvider} from './context';

export const Form = forwardRef<FormRef, FormProps>((props, ref) => {
  const {
    children,
    onSubmit,
    onSubmitInvalid,
    validationMode = 'onSubmit',
    reValidationMode = 'onBlur',
    defaultValues = {},
  } = props;

  const methods = useForm({
    mode: validationMode,
    reValidateMode: reValidationMode,
    defaultValues,
  });

  const formRef = useRef<HTMLFormElement>(null);
  useImperativeHandle(
    ref,
    () => ({
      reset: methods.reset,
      watch: methods.watch,
      setError: methods.setError,
      clearErrors: methods.clearErrors,
      setValue: methods.setValue,
      getValues: methods.getValues,
      trigger: methods.trigger,
      element: formRef.current,
    }),
    [
      methods.reset,
      methods.watch,
      methods.setError,
      methods.clearErrors,
      methods.setValue,
      methods.getValues,
      methods.trigger,
    ],
  );

  return (
    <FormValidationContextProvider value={validationMode}>
      <FormProvider {...methods}>
        <form
          ref={formRef}
          onSubmit={methods.handleSubmit(onSubmit, onSubmitInvalid)}
        >
          {children}
        </form>
      </FormProvider>
    </FormValidationContextProvider>
  );
});

Form.displayName = 'Form';
