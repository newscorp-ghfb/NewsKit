import React, {useEffect, useContext } from 'react';
import {useFormContext} from 'react-hook-form/dist/index.ie11';
import composeRefs from '@seznam/compose-react-refs'
import {TextInputProps, TextInputSize} from './types';
import {getSSRId} from '../utils/get-ssr-id';
import {FormValidationContext} from '../form/context'

import {
  StyledTextInputContainer,
  StyledInput,
  StyledAssistiveText,
  StyledLabel,
  InputIconContainer,
  IconContainer,
  StyledAssistiveTextContainer
} from './styled';
import { getToken } from '../utils/get-token';
import { useTheme } from '../theme';
import { IconFilledCheckCircle, IconFilledError } from '../icons';
import { FieldsHadErrorObject } from '../form/types';

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(({
  overrides = {},
  size = TextInputSize.Medium,
  label,
  disabled,
  hideLabel = false,
  ariaLabel,
  placeholder,
  assistiveText,
  rules,
  name,
  spellCheck = false,
  ...props
}, ref) => {

  const theme = useTheme();
  const {validationMode, setFieldsHadError, fieldsHadError} = useContext(FormValidationContext);
  const formContext = useFormContext();

  const hadError = name ? fieldsHadError[name] && fieldsHadError[name].hadError : undefined
  const errorText =
    formContext &&
    formContext.errors &&
    name &&
    formContext.errors[name] &&
    formContext.errors[name].message;

  useEffect(() => {
    if (!hadError && errorText && name) {
      const updateForFieldsHadError: FieldsHadErrorObject = {}

      updateForFieldsHadError[name] = {hadError: true}

      setFieldsHadError({
        ...fieldsHadError,
        ...updateForFieldsHadError
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorText, hadError, name]);

  const id = getSSRId();
  const assistiveTextId = errorText && `${id}-error-text` || assistiveText && `${id}-assistive-text`

  const handleOnBlur = ({target: { value }}: {target: {value: string}}) => {
    if (validationMode === 'onBlur' && !hadError && name && (errorText || value)) {
        const updateForFieldsHadError: FieldsHadErrorObject = {}

        updateForFieldsHadError[name] = {hadError: true}
        setFieldsHadError(updateForFieldsHadError)
    }
  }

  const spaceInsetRight = getToken(
    {theme, overrides},
    `textInput.${size}.input`,
    'input',
    'spaceInsetRight',
  );

  const iconSpace = getToken(
    {theme, overrides},
    `textInput.${size}.input`,
    'input',
    'iconSpace',
  );

  const iconSize = getToken(
    {theme, overrides},
    `textInput.${size}.input`,
    'input',
    'iconSize',
  );

  const valid = formContext?.formState?.isSubmitSuccessful || (hadError && !errorText);

  return (
    <StyledTextInputContainer label={label} overrides={overrides}>
      <StyledLabel $size={size} htmlFor={id} overrides={overrides}>
        {!hideLabel && label}
      </StyledLabel>
      <InputIconContainer>
        <StyledInput
          ref={composeRefs(formContext?.register(rules), ref)}
          name={name}
          type="text"
          placeholder={placeholder}
          id={id}
          aria-describedby={assistiveTextId}
          disabled={disabled}
          aria-label={hideLabel === true ? label : ariaLabel}
          $size={size}
          {...props}
          overrides={overrides}
          invalid={!!errorText}
          valid={valid}
          aria-invalid={!!errorText}
          onBlur={handleOnBlur}
          spaceInsetRight={spaceInsetRight}
          spellCheck={spellCheck}
        />
        {(!!errorText || valid) && (
          <IconContainer iconSpace={iconSpace}>
            {
              !!errorText && <IconFilledError data-testid='error-icon' overrides={{ size: iconSize, stylePreset: 'iconNegative' }}  /> ||
              valid && <IconFilledCheckCircle data-testid='tick-icon' overrides={{ size: iconSize, stylePreset: 'iconPositive'}} />
            }
          </IconContainer>
        )}
      </InputIconContainer>
      <StyledAssistiveTextContainer $size={size}>
        {((assistiveText || errorText) && !valid) && (
          <StyledAssistiveText
            $size={size}
            id={assistiveTextId}
            disabled={disabled}
            overrides={overrides}
            invalid={!!errorText}
            valid={valid}
            role={errorText && 'alert'}
            aria-live={errorText && 'polite'}
          >
            {errorText || assistiveText}
          </StyledAssistiveText>
        )}
      </StyledAssistiveTextContainer>
    </StyledTextInputContainer>
  );
});

TextInput.displayName = 'TextInput';
