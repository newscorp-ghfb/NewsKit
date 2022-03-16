import {
  SwitchBaseIconProps,
  SwitchBaseProps,
  SwitchBaseState,
} from '../switch-base/types';

export type CheckboxIconProps = SwitchBaseIconProps;

export type CheckboxProps = Omit<
  SwitchBaseProps,
  'path' | 'defaultSwitchSelectorComponent' | 'type'
>;

export type CheckboxState = SwitchBaseState;
