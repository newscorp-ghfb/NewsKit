import React, {useContext, useEffect, useRef, useState} from 'react';
import {useFormContext} from 'react-hook-form';
import {FormValidationContext} from './context';
import {FieldsHadErrorObject, FormInputState} from './types';
import {FormEntryProps} from '../text-field/types';

export const FormEntry = ({name, rules, children}: FormEntryProps) => {
  const [hasContent, setHasContent] = useState<boolean>(false);

  const {validationMode, setFieldsHadError, fieldsHadError} = useContext(
    FormValidationContext,
  );

  const formContext = useFormContext();
  const {register, formState} = formContext || {
    register: nameField => ({nameField}),
  };

  const {errors, isSubmitSuccessful} = formState || {};
  const {ref: inputRef, onBlur, onChange} = register(name!, rules);
  const refObject = useRef<HTMLInputElement | null>(null);

  const hadError = name ? fieldsHadError[name]?.hadError : undefined;

  const errorText = name && errors?.[name]?.message;

  useEffect(() => {
    if (!hadError && errorText && name) {
      const updateForFieldsHadError: FieldsHadErrorObject = {};

      updateForFieldsHadError[name] = {hadError: true};

      setFieldsHadError({
        ...fieldsHadError,
        ...updateForFieldsHadError,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorText, hadError, name]);

  const valid = Boolean(isSubmitSuccessful || (hadError && !errorText));
  const invalid = !!errorText;

  // eslint-disable-next-line no-undef-init
  let state: FormInputState = undefined;
  if (invalid) {
    state = 'invalid';
  } else if (valid) {
    state = 'valid';
  }

  const eventHandlerOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // RHF's onBlur function
    if (onBlur) {
      onBlur(e);
    }
    // custom onBlur function
    if (
      validationMode === 'onBlur' &&
      !hadError &&
      name &&
      (errorText || e.target.value)
    ) {
      const updateForFieldsHadError: FieldsHadErrorObject = {};

      updateForFieldsHadError[name] = {hadError: true};

      setFieldsHadError({
        ...fieldsHadError,
        ...updateForFieldsHadError,
      });
    }
  };

  const eventHandlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      setHasContent(true);
    } else if (hasContent) {
      setHasContent(false);
    }

    if (onChange) {
      onChange(e);
    }
  };

  // See https://react-hook-form.com/faqs#Howtosharerefusage
  const updateRef = (instance: HTMLInputElement) => {
    if (inputRef) {
      inputRef(instance);
    }
    refObject.current = instance;
  };

  return children({
    onBlur: eventHandlerOnBlur,
    onChange: eventHandlerOnChange,
    state,
    ref: updateRef,
    error: errorText as string | undefined,
    refObject,
    hasContent,
  });
};
