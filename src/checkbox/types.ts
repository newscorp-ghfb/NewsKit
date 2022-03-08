import {SwitchBaseIconProps, SwitchBaseProps} from '../switch-base/types';

export type CheckboxIconProps = SwitchBaseIconProps;

export type CheckboxProps = Omit<
  SwitchBaseProps,
  'path' | 'defaultSwitchComponent' | 'type'
>;
