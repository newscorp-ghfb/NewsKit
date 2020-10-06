import React, { useState, useEffect, useContext } from 'react';
import {useFormContext} from 'react-hook-form';
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


export const TextInput: React.FC<TextInputProps> = ({
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
}) => {
 
  const theme = useTheme();
  const validationMode = useContext(FormValidationContext);
  const formContext = useFormContext();

  const errorText =
    formContext &&
    formContext.errors &&
    name &&
    formContext.errors[name] &&
    formContext.errors[name].message;

  const [hadError, setHadError] = useState(errorText)
  
  useEffect(() => {
    if (!hadError && errorText) {
      setHadError(true)
    }
  }, [errorText, hadError]);

  const id = getSSRId();
  const assistiveTextId = errorText && `${id}-error-text` || assistiveText && `${id}-assistive-text`  
  
  const handleOnBlur = ({target: { value }}: {target: {value: string}}) => {
    if (validationMode === 'onBlur' && 
      !hadError && 
      (errorText || value)
      ) {
      setHadError(true)
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

  // eslint-disable-next-line no-undef, prettier/prettier
  const isValid = formContext?.formState?.isSubmitSuccessful || (hadError && !errorText);

  return (
    <StyledTextInputContainer label={label} overrides={overrides}>
      <StyledLabel $size={size} htmlFor={id} overrides={overrides}>
        {!hideLabel && label}
      </StyledLabel>
      <InputIconContainer>
        <StyledInput
            // eslint-disable-next-line no-undef
          ref={(formContext?.register(rules) as unknown) as string}
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
          isInvalid={!!errorText}
          isValid={isValid}
          aria-invalid={!!errorText}
          onBlur={handleOnBlur}
          spaceInsetRight={spaceInsetRight}
          spellCheck={spellCheck}
        />
        {(!!errorText || isValid) && (
        <IconContainer iconSpace={iconSpace}>
          {
              !!errorText && <IconFilledError overrides={{ size: iconSize, stylePreset: 'iconNegative' }}  /> ||
              isValid && <IconFilledCheckCircle data-testid='tick-icon' overrides={{ size: iconSize, stylePreset: 'iconPositive'}} />
            }
        </IconContainer>
)}
      </InputIconContainer>
      <StyledAssistiveTextContainer $size={size}>
        {((assistiveText || errorText) && !isValid) && (
          <StyledAssistiveText
            $size={size}
            id={assistiveTextId}
            disabled={disabled}
            overrides={overrides}
            isInvalid={!!errorText}
            isValid={isValid}
            role={errorText && 'alert'}
            aria-live={errorText && 'polite'}
          >
            {errorText || assistiveText}
          </StyledAssistiveText>
        )}
      </StyledAssistiveTextContainer>
    </StyledTextInputContainer>
  );
};

TextInput.displayName = 'TextInput';
