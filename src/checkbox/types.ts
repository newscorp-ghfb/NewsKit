import {
  SwitchBaseIconProps,
  SwitchBaseProps,
  SwitchBaseSize,
  SwitchBaseState,
} from '../switch-base/types';

export type CheckboxIconProps = SwitchBaseIconProps;

export type CheckboxProps = Omit<
  SwitchBaseProps,
  'path' | 'defaultSwitchSelectorComponent' | 'type'
>;

export type CheckboxSize = SwitchBaseSize;

export type CheckboxState = SwitchBaseState;
