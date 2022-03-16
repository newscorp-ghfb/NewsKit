import {
  BaseSwitchIconProps,
  BaseSwitchProps,
  BaseSwitchSize,
  BaseSwitchState,
} from '../base-switch/types';

export type CheckboxIconProps = BaseSwitchIconProps;

export type CheckboxProps = Omit<
  BaseSwitchProps,
  'path' | 'defaultSwitchSelectorComponent' | 'type'
>;

export type CheckboxSize = BaseSwitchSize;

export type CheckboxState = BaseSwitchState;
