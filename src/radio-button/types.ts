import {SwitchBaseIconProps, SwitchBaseProps} from '../switch-base/types';

export type RadioButtonIconProps = SwitchBaseIconProps;

export type RadioButtonProps = Omit<
  SwitchBaseProps,
  'path' | 'defaultSwitchComponent' | 'type'
>;
