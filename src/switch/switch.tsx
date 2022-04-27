import React from 'react';
import {SwitchOverrides, SwitchProps} from './types';
import defaults from './defaults';
import stylePresets from './style-presets';
import {withOwnTheme} from '../utils/with-own-theme';
import {BaseSwitch} from '../base-switch';
import {StyledTrackColumn, StyledThumb, StyledSwitchContainer} from './styled';
import {BaseSwitchIconProps} from '../base-switch/types';

const SwitchSelector = ({
  size,
  checked,
  parentOverrides,
  children,
  isFocused,
  isHovered,
}: BaseSwitchIconProps & {children?: React.ReactNode}) => {
  const overrides = parentOverrides as SwitchOverrides;
  const {onIcon: OnIcon, offIcon: OffIcon} = overrides;
  return (
    <StyledSwitchContainer size={size} overrides={overrides}>
      <StyledTrackColumn
        size={size}
        overrides={overrides}
        justifyContent="start"
      >
        {OnIcon && <OnIcon />}
      </StyledTrackColumn>
      <StyledTrackColumn size={size} overrides={overrides} justifyContent="end">
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
    const ThumbIcon = overrides?.icon;

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
