import React from 'react';
import {isValidElementType} from 'react-is';
import {SwitchProps, SwitchState} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {BaseSwitch} from '../base-switch';
import {StyledSwitchContainer, StyledThumb, StyledTrackColumn} from './styled';
import {BaseSwitchIconProps} from '../base-switch/types';
import {Override} from '../utils/overrides';

// TODO: Contains similar logic to getComponentOverrides to cast the override icon as a component. But why is this necessary?
const iconAsComponent = (OverridesValue?: Override<BaseSwitchIconProps>) => {
  if (OverridesValue && isValidElementType(OverridesValue)) {
    return OverridesValue as React.ComponentType<BaseSwitchIconProps>;
  }
  return null;
};

const SwitchSelector = ({
  size,
  checked,
  parentOverrides: overrides,
  children,
  isFocused,
  isHovered,
  state,
}: BaseSwitchIconProps & {children?: React.ReactNode}) => {
  const OnIcon = iconAsComponent(overrides!.onIcon);
  const OffIcon = iconAsComponent(overrides!.offIcon);
  return (
    <StyledSwitchContainer size={size} overrides={overrides}>
      <StyledTrackColumn
        state={state as SwitchState}
        size={size}
        overrides={overrides}
        justifyContent="start"
      >
        {OnIcon && <OnIcon />}
      </StyledTrackColumn>
      <StyledTrackColumn
        state={state as SwitchState}
        size={size}
        overrides={overrides}
        justifyContent="end"
      >
        {OffIcon && <OffIcon />}
      </StyledTrackColumn>
      <StyledThumb
        size={size}
        checked={checked}
        isFocused={isFocused}
        isHovered={isHovered}
        overrides={overrides}
      >
        {children}
      </StyledThumb>
    </StyledSwitchContainer>
  );
};

const ThemelessSwitch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({overrides, ...rest}, inputRef) => {
    const ThumbIcon = iconAsComponent(overrides?.icon);

    const SwitchSelectorWithIcon = (props: BaseSwitchIconProps) => (
      <SwitchSelector {...props}>
        {!!ThumbIcon && <ThumbIcon {...props} />}
      </SwitchSelector>
    );

    return (
      <BaseSwitch
        path="switch"
        ref={inputRef}
        type="checkbox"
        role="switch"
        overrides={{
          ...(overrides || {}),
          icon: undefined,
        }}
        {...rest}
        defaultSwitchSelectorComponent={SwitchSelectorWithIcon}
      />
    );
  },
);

export const Switch = withOwnTheme(ThemelessSwitch)({
  defaults,
  stylePresets,
});
