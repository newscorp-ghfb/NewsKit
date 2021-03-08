import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form/dist/index.ie11';
import {FormProps, FormRef, FormFieldsValidationObject} from './types';
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
  
  // TODO Fix the @ts-ignore. here, text-input, scenario.
  // TODO move error check into form.
  // TODO Add more scenarios? tests?
  // TODO valid const logic free in the file? move to useffect? function?

  // ** Only used for useForceUpdate() hook **
  const [value, setValue] = useState(0);

  // Used for the reset validation logic. The form's values are stored
  // in fieldsValues before re-populating the form.
  const [fieldsValues, setFieldsValues] = useState<{[name: string]: string;}>()

  const [isResettingValidation, setIsResettingValidation] = useState<boolean>(false)
    
  const formContext = useForm({
    mode: validationMode,
    reValidateMode: reValidationMode,
    defaultValues,
  });
  
  // Updates the State to force a render
  const useForceUpdate = () => {
    return setValue(value => value + 1); 
  }

  const setAllFieldsValid = () => {
    const newValidationState: FormFieldsValidationObject = {}
    // @ts-ignore
    Object.keys(formContext.formState.fieldsValidation).forEach(field => {
      newValidationState[field] = {valid: true}
    })

    Object.assign(formContext.formState, {fieldsValidation: newValidationState}) 
    // Forces the re-render of the form's children so they can look "valid"
    useForceUpdate()
  }

  const removeValidFromFields = () => {
    const newValidationState: FormFieldsValidationObject = {}
    // @ts-ignore
    Object.keys(formContext.formState.fieldsValidation).forEach(field => {
      newValidationState[field] = {valid: false}
    })
    Object.assign(formContext.formState, {fieldsValidation: newValidationState}) 
  }

  const rePopulateForm = () => {
    if (fieldsValues) {
      Object.keys(fieldsValues).forEach(field => {
        // @ts-ignore
        formContext.setValue(field, fieldsValues[field])
      })
    }
  }

  const addFieldsValidationObject = () => {
    const formFields = Object.keys(formContext.getValues())
    const fieldsValidationObject: FormFieldsValidationObject = {}
    
    formFields.forEach(field => {
      fieldsValidationObject[field] = {valid: false}
    })
    Object.assign(formContext.formState, {fieldsValidation: fieldsValidationObject}) 
  }

  useEffect(() => {
    // @ts-ignore
    if (formContext.formState.fieldsValidation === undefined) {
      addFieldsValidationObject()
    }
    // @ts-ignore
    if (formContext.formState.fieldsValidation !== undefined && 
        formContext.formState.isSubmitSuccessful === true) {
      setAllFieldsValid()
    }
    
    if (isResettingValidation) {
      rePopulateForm()
      removeValidFromFields()
      setIsResettingValidation(false)
    }
  },[formContext.formState.isSubmitSuccessful, isResettingValidation]);
  
  const formRef = useRef<HTMLFormElement>(null);
  useImperativeHandle(
    ref,
    () => ({
      reset: formContext.reset,
      resetValidation: () => {
        setFieldsValues(formContext.getValues())
        setIsResettingValidation(true)
        formContext.reset()
      },
      watch: formContext.watch,
      setError: formContext.setError,
      clearErrors: formContext.clearErrors,
      setValue: formContext.setValue,
      getValues: formContext.getValues,
      trigger: formContext.trigger,
      element: formRef.current,
    }),
    [
      // TODO what is this for? do I need to add resetValidation here?
      formContext.reset,
      formContext.watch,
      formContext.setError,
      formContext.clearErrors,
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
