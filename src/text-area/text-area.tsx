import React from 'react';
import {TextAreaProps} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledTextArea} from './styled';
import {getSingleStylePreset} from '../utils';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';
import {EventTrigger, useInstrumentation} from '../instrumentation';

const ThemelessTextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      size = 'medium',
      resize = 'vertical',
      state,
      overrides,
      onFocus,
      eventContext,
      eventOriginator = 'text area',
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();

    // This is a fix to apply the placeholderColor to input
    const textFieldStylePreset = getToken(
      {theme, overrides},
      `textArea.${size}`,
      '',
      'stylePreset',
    );

    const placeholderColor = getSingleStylePreset(
      theme,
      'base',
      'placeholderColor',
      textFieldStylePreset,
    );

    const {fireEvent} = useInstrumentation();

    const onElementFocus = React.useCallback(
      (event: React.FocusEvent<HTMLTextAreaElement, Element>) => {
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

    return (
      <StyledTextArea
        $size={size}
        state={state}
        resize={resize}
        disabled={state === 'disabled'}
        placeholderColor={placeholderColor}
        overrides={overrides}
        ref={ref}
        onFocus={onElementFocus}
        {...props}
      />
    );
  },
);

export const TextArea = withOwnTheme(ThemelessTextArea)({
  defaults,
});
