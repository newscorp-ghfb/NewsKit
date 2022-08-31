import React from 'react';
import {TextAreaProps} from './types';
import {useTheme} from '../theme';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {TextField} from '../text-field';
import {filterOutFalsyProperties} from '../utils/filter-object';

const ThemelessTextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({size = 'medium', overrides, ...props}, ref) => {
    const theme = useTheme();
    const textAreaOverrides: typeof overrides = {
      ...theme.componentDefaults.textArea[size],
      ...filterOutFalsyProperties(overrides),
    };

    return (
      <TextField
        as="textarea"
        overrides={textAreaOverrides}
        size={size}
        ref={ref}
        {...props}
      />
    );
  },
);

export const TextArea = withOwnTheme(ThemelessTextArea)({
  defaults,
});
