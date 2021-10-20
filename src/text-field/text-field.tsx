import React from 'react';
import {TextFieldProps, TextFieldSize} from './types';
import {StyledInput, StyledInputContainer, StyledEnhancer} from './styled';

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      size = TextFieldSize.Medium,
      overrides,
      state,
      startEnhancer,
      endEnhancer,
      onBlur,
      onFocus,
      onChange,
      ...restProps
    },
    inputRef,
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const onInputFocus = React.useCallback(
      event => {
        setIsFocused(true);
        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus],
    );
    const onInputBlur = React.useCallback(
      event => {
        if (onBlur) {
          onBlur(event);
        }
        setIsFocused(false);
      },
      [onBlur],
    );
    const onInputChange = React.useCallback(
      event => {
        if (onChange) {
          onChange(event);
        }
      },
      [onChange],
    );

    return (
      <>
        <StyledInputContainer
          size={size}
          overrides={overrides}
          state={state}
          focused={isFocused}
        >
          {startEnhancer && (
            <StyledEnhancer
              position="startEnhancer"
              size={size}
              overrides={overrides}
            >
              {startEnhancer}
            </StyledEnhancer>
          )}
          <StyledInput
            ref={inputRef}
            type="text"
            disabled={state === 'disabled'}
            $size={size}
            overrides={overrides}
            state={state}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
            onChange={onInputChange}
            {...restProps}
          />
          {endEnhancer && (
            <StyledEnhancer
              position="endEnhancer"
              size={size}
              overrides={overrides}
            >
              {endEnhancer}
            </StyledEnhancer>
          )}
        </StyledInputContainer>
      </>
    );
  },
);
