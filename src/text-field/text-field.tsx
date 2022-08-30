import React from 'react';
import {TextFieldProps} from './types';
import {StyledInput} from './styled';
import {WithEnhancers} from '../with-enhancers/with-enhancers';
import {useTheme} from '../theme';
import {getToken} from '../utils/get-token';
import defaults from './defaults';
import {getSingleStylePreset} from '../utils/style/style-preset';
import {withOwnTheme} from '../utils/with-own-theme';
import {EventTrigger, useInstrumentation} from '../instrumentation';

const ThemelessTextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      size = 'medium',
      overrides,
      state,
      startEnhancer,
      endEnhancer,
      onBlur,
      onFocus,
      onChange,
      eventContext,
      eventOriginator = 'text field',
      resize,
      ...restProps
    },
    inputRef,
  ) => {
    const {fireEvent} = useInstrumentation();

    const theme = useTheme();
    const [isFocused, setIsFocused] = React.useState(false);

    const onInputFocus = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement, Element>) => {
        setIsFocused(true);
        fireEvent({
          originator: eventOriginator,
          trigger: EventTrigger.Focus,
          context: {
            ...eventContext,
          },
        });
        if (onFocus) {
          onFocus(event);
        }
      },
      [eventContext, eventOriginator, fireEvent, onFocus],
    );

    const onInputBlur = React.useCallback(
      (event: React.FocusEvent<HTMLInputElement, Element>) => {
        if (onBlur) {
          onBlur(event);
        }
        setIsFocused(false);
      },
      [onBlur],
    );

    const onInputChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event);
        }
      },
      [onChange],
    );

    // This is a fix to apply the placeholderColor to input
    const textFieldStylePreset = getToken(
      {theme, overrides},
      `textField.${size}`,
      '',
      'stylePreset',
    );

    const placeholderColor = getSingleStylePreset(
      theme,
      'base',
      'placeholderColor',
      textFieldStylePreset,
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
          resize={resize}
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
            placeholderColor={placeholderColor}
            {...restProps}
          />
        </WithEnhancers>
      </>
    );
  },
);

export const TextField = withOwnTheme(ThemelessTextField)({
  defaults,
});
