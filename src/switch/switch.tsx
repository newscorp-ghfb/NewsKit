import React from 'react';
import {isValidElementType} from 'react-is';
import {SwitchProps, SwitchTrackContentsProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {BaseSwitch} from '../base-switch';
import {StyledSwitchContainer, StyledThumb, StyledTrackIcon} from './styled';
import {BaseSwitchIconProps} from '../base-switch/types';
import {Override} from '../utils/overrides';

const iconAsComponent = (OverridesValue?: Override<BaseSwitchIconProps>) => {
  if (OverridesValue && isValidElementType(OverridesValue)) {
    return OverridesValue as React.ComponentType<BaseSwitchIconProps>;
  }
  return null;
};

const SwitchTrackContents = (props: BaseSwitchIconProps) => {
  const {
    size,
    checked,
    parentOverrides: overrides,
    isFocused,
    isHovered,
    state,
  } = props as SwitchTrackContentsProps;
  const OnIcon = iconAsComponent(overrides!.onIcon);
  const OffIcon = iconAsComponent(overrides!.offIcon);
  const ThumbIcon = iconAsComponent(overrides!.thumbIcon);
  return (
    <StyledSwitchContainer size={size} overrides={overrides}>
      <StyledTrackIcon
        state={state}
        size={size}
        overrides={overrides}
        justifyContent="flex-start"
      >
        {OnIcon && <OnIcon />}
      </StyledTrackIcon>
      <StyledTrackIcon
        state={state}
        size={size}
        overrides={overrides}
        justifyContent="flex-end"
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
        {!!ThumbIcon && <ThumbIcon checked={checked} />}
      </StyledThumb>
    </StyledSwitchContainer>
  );
};

const ThemelessSwitch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({overrides = {}, eventOriginator = 'switch', ...rest}, inputRef) => (
    <BaseSwitch
      path="switch"
      ref={inputRef}
      type="checkbox"
      role="switch"
      overrides={overrides}
      eventOriginator={eventOriginator}
      {...rest}
      defaultSwitchSelectorComponent={SwitchTrackContents}
    />
  ),
);

export const Switch = withOwnTheme(ThemelessSwitch)({
  defaults,
  stylePresets,
});
