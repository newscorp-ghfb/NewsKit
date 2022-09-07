import React from 'react';
import {TextAreaProps} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {StyledTextArea} from './styled';
import {getSingleStylePreset} from '../utils';
import {getToken} from '../utils/get-token';
import {useTheme} from '../theme';

const ThemelessTextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({size = 'medium', state, overrides, ...props}, ref) => {
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

    return (
      <StyledTextArea
        $size={size}
        state={state}
        disabled={state === 'disabled'}
        placeholderColor={placeholderColor}
        overrides={overrides}
        ref={ref}
        {...props}
      />
    );
  },
);

export const TextArea = withOwnTheme(ThemelessTextArea)({
  defaults,
});
