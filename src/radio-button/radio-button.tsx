import React from 'react';
import {IconFilledCircle} from '../icons';
import {RadioButtonProps, RadioButtonIconProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {SwitchBase} from '../switch-base';
import {useRadioGroup} from './radio-group';
import {composeEventHandlers} from '../utils/compose-event-handlers';

const DefaultIcon = ({checked, iconSize, overrides}: RadioButtonIconProps) =>
  checked ? (
    <IconFilledCircle
      overrides={{
        size: iconSize,
        ...overrides,
      }}
    />
  ) : null;

const ThemelessCheckbox = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      name: nameProp,
      onChange: onChangeProp,
      checked: checkedProp = false,
      ...props
    },
    inputRef,
  ) => {
    const radioGroup = useRadioGroup();

    const onChange = composeEventHandlers([
      onChangeProp,
      radioGroup && radioGroup.onChange,
    ]);

    let name = nameProp;
    let checked = checkedProp;

    if (radioGroup) {
      checked = radioGroup.value === props.value;

      if (typeof name === 'undefined') {
        name = radioGroup.name;
      }
    }

    return (
      <SwitchBase
        path="radioButton"
        type="radio"
        ref={inputRef}
        name={name}
        onChange={onChange}
        checked={checked}
        {...props}
        defaultSwitchComponent={DefaultIcon}
      />
    );
  },
);

export const RadioButton = withOwnTheme(ThemelessCheckbox)({
  defaults,
  stylePresets,
});
