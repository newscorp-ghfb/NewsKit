import React from 'react';
import {TextFieldProps, TextFieldSize} from './types';
import {StyledInput} from './styled';
import {WithEnhancers} from '../with-enhancers/with-enhancers';

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      size = 'medium' as TextFieldSize,
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
        <WithEnhancers
          componentDefaultsPath={`textField.${size}`}
          isFocused={isFocused}
          overrides={overrides}
          state={state}
          startEnhancer={startEnhancer}
          endEnhancer={endEnhancer}
        >
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
        </WithEnhancers>
      </>
    );
  },
);
