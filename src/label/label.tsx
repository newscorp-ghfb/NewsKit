import React from 'react';
import {TextFieldSize} from '../text-field';
import {StyledLabel} from './styled';
import {LabelProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';

const ThemelessLabel = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({size = 'medium' as TextFieldSize, children, state, ...props}, ref) => (
    <StyledLabel
      ref={ref}
      aria-disabled={state === 'disabled' ? true : undefined}
      size={size}
      state={state}
      {...props}
    >
      {children}
    </StyledLabel>
  ),
);

export const Label = withOwnTheme(ThemelessLabel)({defaults, stylePresets});
