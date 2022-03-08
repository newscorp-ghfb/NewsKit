import React from 'react';
import {IconFilledCheck} from '../icons';
import {CheckboxProps, CheckboxIconProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {SwitchBase} from '../switch-base';

const DefaultCheckboxIcon = ({checked, overrides}: CheckboxIconProps) =>
  checked ? (
    <IconFilledCheck
      overrides={{
        size: 'iconSize020',
        ...overrides,
      }}
    />
  ) : null;

const ThemelessCheckbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, inputRef) => (
    <SwitchBase
      path="checkbox"
      ref={inputRef}
      type="checkbox"
      {...props}
      defaultSwitchComponent={DefaultCheckboxIcon}
    />
  ),
);

export const Checkbox = withOwnTheme(ThemelessCheckbox)({
  defaults,
  stylePresets,
});
