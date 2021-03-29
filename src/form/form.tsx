import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {useForm, FormProvider} from 'react-hook-form/dist/index.ie11';
import {FormProps, FormRef, fieldsHadErrorObject} from './types';
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

  const [fieldsHadError, setFieldsHadError] = useState<fieldsHadErrorObject>(
    {},
  );

  const formContext = useForm({
    mode: validationMode,
    reValidateMode: reValidationMode,
    defaultValues,
  });

  const setAllFieldsHadErrorToFalse = useCallback(() => {
    const formFields = Object.keys(formContext.getValues());
    const newFieldsHadErrorObject: fieldsHadErrorObject = {};

    formFields.forEach(field => {
      newFieldsHadErrorObject[field] = {hadError: false};
    });

    setFieldsHadError(newFieldsHadErrorObject);
  }, [formContext]);

  useEffect(() => {
    if (Object.keys(fieldsHadError).length === 0 && formContext.formState) {
      // Populates the fieldsHadError state and sets the values to false
      setAllFieldsHadErrorToFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formContext.formState]);

  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      reset: ((values = defaultValues, omitResetState) => {
        setAllFieldsHadErrorToFalse();

        formContext.reset(values, omitResetState);
      }) as typeof formContext.reset,
      clearValidation: () => {
        setAllFieldsHadErrorToFalse();
        formContext.reset(formContext.getValues(), {
          // Don't reset these properties of the form context
          isSubmitted: true,
          touched: true,
          submitCount: true,
        });
      },
      watch: formContext.watch,
      setError: formContext.setError,
      setValue: formContext.setValue,
      getValues: formContext.getValues,
      trigger: formContext.trigger,
      element: formRef.current,
    }),
    [defaultValues, formContext, setAllFieldsHadErrorToFalse],
  );

  return (
    <FormValidationContextProvider
      value={{validationMode, fieldsHadError, setFieldsHadError}}
    >
      <FormProvider {...formContext}>
        <form
          ref={formRef}
          onSubmit={formContext.handleSubmit(onSubmit, onSubmitInvalid)}
        >
          {children}
        </form>
      </FormProvider>
    </FormValidationContextProvider>
  );
});

Form.displayName = 'Form';
