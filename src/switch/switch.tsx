import React from 'react';
import {isValidElementType} from 'react-is';
import {SwitchIconProps, SwitchProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {BaseSwitch} from '../base-switch';
import {StyledSwitchContainer, StyledThumb, StyledTrackIcon} from './styled';
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
}: SwitchIconProps & {children?: React.ReactNode}) => {
  const OnIcon = iconAsComponent(overrides!.onIcon);
  const OffIcon = iconAsComponent(overrides!.offIcon);
  return (
    <StyledSwitchContainer size={size} overrides={overrides}>
      <StyledTrackIcon
        state={state}
        size={size}
        overrides={overrides}
        justifyContent="start"
      >
        {OnIcon && <OnIcon />}
      </StyledTrackIcon>
      <StyledTrackIcon
        state={state}
        size={size}
        overrides={overrides}
        justifyContent="end"
      >
        {OffIcon && <OffIcon />}
      </StyledTrackIcon>
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
    const ThumbIcon = iconAsComponent(overrides?.thumbIcon);

    const SwitchSelectorWithIcon = (props: BaseSwitchIconProps) => (
      <SwitchSelector {...(props as SwitchIconProps)}>
        {!!ThumbIcon && <ThumbIcon {...props} />}
      </SwitchSelector>
    );

    return (
      <BaseSwitch
        path="switch"
        ref={inputRef}
        type="checkbox"
        role="switch"
        overrides={overrides || {}}
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
