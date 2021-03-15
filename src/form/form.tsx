import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {useForm, FormProvider} from 'react-hook-form/dist/index.ie11';
import {FormProps, FormRef, FormFieldsHadErrorObject} from './types';
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

  // Used for the reset validation logic. The form's values are stored
  // in fieldsValues before re-populating the form.
  const [fieldsValues, setFieldsValues] = useState<{[name: string]: string}>();

  const [isResettingValidation, setIsResettingValidation] = useState<boolean>(
    false,
  );

  const formContext = useForm({
    mode: validationMode,
    reValidateMode: reValidationMode,
    defaultValues,
  });

  const rePopulateForm = () => {
    if (fieldsValues) {
      Object.keys(fieldsValues).forEach(field => {
        formContext.setValue(field, fieldsValues[field]);
      });
    }
  };

  const addFieldsHadErrorObject = () => {
    const formFields = Object.keys(formContext.getValues());
    const fieldsHadErrorObject: FormFieldsHadErrorObject = {};

    formFields.forEach(field => {
      fieldsHadErrorObject[field] = {hadError: false};
    });
    Object.assign(formContext.formState, {
      fieldsHadError: fieldsHadErrorObject,
    });
  };

  const setAllFieldsHadErrorToFalse = () => {
    // @ts-ignore
    const hadErrorFields = Object.keys(formContext.formState.fieldsHadError);
    hadErrorFields.forEach(field => {
      // @ts-ignore
      formContext.formState.fieldsHadError[field].hadError = false;
    });
  };

  useEffect(() => {
    if (
      formContext.formState &&
      // @ts-ignore
      formContext.formState.fieldsHadError === undefined
    ) {
      // Adds a new object in the formState to keep track of which fields had an error.
      addFieldsHadErrorObject();
    }

    if (isResettingValidation) {
      rePopulateForm();
      formContext.formState.isSubmitSuccessful = false;
      setIsResettingValidation(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formContext.formState, isResettingValidation]);

  const formRef = useRef<HTMLFormElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      reset: formContext.reset,
      resetValidation: () => {
        setFieldsValues(formContext.getValues());
        setIsResettingValidation(true);
        setAllFieldsHadErrorToFalse();
        formContext.reset();
      },
      watch: formContext.watch,
      setError: formContext.setError,
      setValue: formContext.setValue,
      clearErrors: () => {
        setAllFieldsHadErrorToFalse();
        formContext.clearErrors();
      },
      getValues: formContext.getValues,
      trigger: formContext.trigger,
      element: formRef.current,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      // TODO Do I need to add resetValidation here? without seems working fine. Is having deps needed for this hook?
      formContext.reset,
      formContext.watch,
      formContext.clearErrors,
      formContext.setError,
      formContext.setValue,
      formContext.getValues,
      formContext.trigger,
    ],
  );

  return (
    <FormValidationContextProvider value={validationMode}>
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
