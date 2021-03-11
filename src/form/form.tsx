import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from 'react';
import {useForm, FormProvider} from 'react-hook-form/dist/index.ie11';
import {FormProps, FormRef, FormFieldsValidationObject, FormFieldsHadErrorObject} from './types';
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

  const changeFieldsValidToFalse = () => {
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

  const addFieldsHadErrorObject = () => {
    const formFields = Object.keys(formContext.getValues())
    const fieldsHadErrorObject: FormFieldsHadErrorObject = {}
    
    formFields.forEach(field => {
      fieldsHadErrorObject[field] = {hadError: false}
    })
    Object.assign(formContext.formState, {fieldsHadError: fieldsHadErrorObject}) 
  }

  useEffect(() => {
    if (formContext.formState) {
      // @ts-ignore
      if (formContext.formState.fieldsHadError === undefined) {
        // Adds a new object in the formState to keep track of which fields had an error.
        addFieldsHadErrorObject()
      }
  
      // @ts-ignore
      if (formContext.formState.fieldsValidation === undefined) {
        // Adds a new object in the FormState to keep track, singularly, of the form's fields.
        addFieldsValidationObject()
      }
      // @ts-ignore
      if (formContext.formState.fieldsValidation !== undefined && 
        formContext.formState.isSubmitSuccessful === true && 
        // @ts-ignore 
        Object.values(formContext.formState.fieldsValidation).some(field => field.valid === false)) {
          setAllFieldsValid()
      }
    }
    
    if (isResettingValidation) {
      rePopulateForm()
      changeFieldsValidToFalse()
      setIsResettingValidation(false)
    }
  },[formContext.formState, isResettingValidation]);
  
  const formRef = useRef<HTMLFormElement>(null);
  useImperativeHandle(
    ref,
    () => ({
      reset: () => {
        changeFieldsValidToFalse()
        formContext.reset()
      },
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