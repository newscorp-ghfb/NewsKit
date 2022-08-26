import React, {useEffect, useContext} from 'react';
import {useFormContext} from 'react-hook-form';
import composeRefs from '@seznam/compose-react-refs';
import {TextInputProps} from './types';
import {useReactKeys} from '../utils/hooks';
import {FormValidationContext} from '../form/context';

import {
  StyledTextInputContainer,
  StyledInput,
  StyledAssistiveText,
  StyledLabel,
  InputIconContainer,
  IconContainer,
  StyledAssistiveTextContainer,
} from './styled';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {IconFilledCheckCircle, IconFilledError} from '../icons';
import {FieldsHadErrorObject} from '../form/types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessTextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      overrides = {},
      size = 'medium',
      label,
      disabled,
      icon,
      hideLabel = false,
      ariaLabel,
      placeholder,
      assistiveText,
      rules,
      name,
      spellCheck = false,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const {validationMode, setFieldsHadError, fieldsHadError} = useContext(
      FormValidationContext,
    );

    const formContext = useFormContext();
    const {register, formState} = formContext || {
      register: nameField => ({nameField}),
    };

    const {errors, isSubmitSuccessful} = formState || {};
    const {ref: inputRef, onBlur, onChange, ...rest} = register(name!, rules);

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

    const [id] = useReactKeys(1);
    const assistiveTextId =
      (errorText && `${id}-error-text`) ||
      (assistiveText && `${id}-assistive-text`);

    const validationIconSize = getToken(
      {theme, overrides},
      `textInput.${size}.input.validationIcon`,
      'input.validationIcon',
      'iconSize',
    );

    const valid = isSubmitSuccessful || (hadError && !errorText);

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
      // onBlur function passed in the props
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    const eventHandlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // RHF's onChange function
      if (onChange) {
        onChange(e);
      }
      // onChange function passed in the props
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <StyledTextInputContainer overrides={overrides}>
        {!hideLabel && (
          <StyledLabel
            $size={size}
            disabled={disabled}
            invalid={!!errorText}
            valid={valid}
            htmlFor={id}
            overrides={overrides}
          >
            {label}
          </StyledLabel>
        )}
        <InputIconContainer $size={size} overrides={overrides}>
          {icon && (
            <IconContainer $size={size} icon={icon}>
              {icon}
            </IconContainer>
          )}
          <StyledInput
            {...rest}
            ref={composeRefs(inputRef, ref)}
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
            onBlur={eventHandlerOnBlur}
            onChange={eventHandlerOnChange}
            hasIcon={!!icon}
            spellCheck={spellCheck}
          />
          {(!!errorText || valid) && (
            <IconContainer $size={size} valid={valid} invalid={!!errorText}>
              {(!!errorText && (
                <IconFilledError
                  data-testid="error-icon"
                  overrides={{
                    size: validationIconSize,
                    stylePreset: 'iconNegative',
                  }}
                />
              )) ||
                (valid && (
                  <IconFilledCheckCircle
                    data-testid="tick-icon"
                    overrides={{
                      size: validationIconSize,
                      stylePreset: 'iconPositive',
                    }}
                  />
                ))}
            </IconContainer>
          )}
        </InputIconContainer>
        <StyledAssistiveTextContainer $size={size} overrides={overrides}>
          {(assistiveText || errorText) && !valid && (
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
  },
);

ThemelessTextInput.displayName = 'TextInput';

/**
 * @deprecated This component has been deprecated and will be removed in a future release, use TextField instead
 */
export const TextInput = withOwnTheme(ThemelessTextInput)({
  defaults,
  stylePresets,
});
