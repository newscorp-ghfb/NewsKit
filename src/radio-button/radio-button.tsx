import React from 'react';
import {IconFilledCircle} from '../icons';
import {RadioButtonProps, RadioButtonIconProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {BaseSwitch} from '../base-switch';
import {useRadioGroupContext} from './radio-group';
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

const ThemelessRadioButton = React.forwardRef<
  HTMLInputElement,
  RadioButtonProps
>(
  (
    {
      name: nameProp,
      onChange: onChangeProp,
      /* istanbul ignore next */
      checked: checkedProp = false,
      eventOriginator = 'radio-button',
      ...props
    },
    inputRef,
  ) => {
    const radioGroup = useRadioGroupContext();

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
      <BaseSwitch
        path="radioButton"
        type="radio"
        ref={inputRef}
        name={name}
        onChange={onChange}
        checked={checked}
        eventOriginator={eventOriginator}
        {...props}
        defaultSwitchSelectorComponent={DefaultIcon}
      />
    );
  },
);

export const RadioButton = withOwnTheme(ThemelessRadioButton)({
  defaults,
  stylePresets,
});
