import React from 'react';
import {TextInputProps, TextInputSize} from './types';
import {getSSRId} from '../utils/get-ssr-id';
import {
  StyledTextInputContainer,
  StyledInput,
  StyledAssistiveText,
  StyledLabel,
} from './styled';

export const TextInput: React.FC<TextInputProps> = ({
  overrides = {},
  size = TextInputSize.Medium,
  label,
  disabled,
  hideLabel = false,
  ariaLabel,
  placeholder = 'Placeholder',
  assistiveText,
  ...props
}) => {
  const id = getSSRId();
  const assistiveTextId = assistiveText ? `${id}-assistive-text` : undefined;

  return (
    <StyledTextInputContainer label={label} overrides={overrides}>
      <StyledLabel $size={size} htmlFor={id} overrides={overrides}>
        {!hideLabel && label}
      </StyledLabel>
      <StyledInput
        type="text"
        placeholder={placeholder}
        id={id}
        aria-describedby={assistiveTextId}
        disabled={disabled}
        aria-label={hideLabel === true ? label : ariaLabel}
        $size={size}
        {...props}
        overrides={overrides}
      />
      {assistiveText && (
        <StyledAssistiveText
          $size={size}
          id={assistiveTextId}
          disabled={disabled}
          overrides={overrides}
        >
          {assistiveText}
        </StyledAssistiveText>
      )}
    </StyledTextInputContainer>
  );
};

TextInput.displayName = 'TextInput';
