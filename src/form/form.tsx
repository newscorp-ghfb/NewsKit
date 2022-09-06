import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {useForm, FormProvider, Control, FieldValues} from 'react-hook-form';
import {FormProps, FormRef, FieldsHadErrorObject} from './types';
import {FormValidationContextProvider} from './context';
import {excludeReactHookFormProps} from './utils';
import {logicalProps} from '../utils/logical-properties';
import {styled} from '../utils';

const StyledForm = styled.form`
  ${logicalProps()}
`;

export const Form = forwardRef<FormRef, FormProps>((props, ref) => {
  const {
    children,
    onSubmit,
    onSubmitInvalid,
    validationMode = 'onSubmit',
    reValidationMode = 'onBlur',
    defaultValues = {},
    resolver,
  } = props;

  const [fieldsHadError, setFieldsHadError] = useState<FieldsHadErrorObject>(
    {},
  );

  const formContext = useForm({
    mode: validationMode,
    reValidateMode: reValidationMode,
    defaultValues,
    resolver,
  });

  const setAllFieldsHadErrorToFalse = useCallback(() => {
    const formFields = Object.keys(formContext.getValues());
    const newFieldsHadErrorObject: FieldsHadErrorObject = {};

    if (formFields.length === 0) return;

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
        formContext.reset(
          {},
          {
            // Don't reset these properties of the form context
            keepValues: true,
            keepIsSubmitted: true,
            keepTouched: true,
            keepSubmitCount: true,
          },
        );
      },
      watch: formContext.watch,
      setError: formContext.setError,
      setValue: formContext.setValue,
      getValues: formContext.getValues,
      trigger: formContext.trigger,
      element: formRef.current,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      control: formContext.control as Control<FieldValues, any>,
    }),
    [defaultValues, formContext, setAllFieldsHadErrorToFalse],
  );

  return (
    <FormValidationContextProvider
      value={{validationMode, fieldsHadError, setFieldsHadError}}
    >
      <FormProvider {...formContext}>
        <StyledForm
          {...excludeReactHookFormProps(props)}
          ref={formRef}
          onSubmit={formContext.handleSubmit(onSubmit, onSubmitInvalid)}
          noValidate
        >
          {children}
        </StyledForm>
      </FormProvider>
    </FormValidationContextProvider>
  );
});
Form.displayName = 'Form';
