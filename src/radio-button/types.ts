import {
  BaseSwitchIconProps,
  BaseSwitchOverrides,
  BaseSwitchProps,
} from '../base-switch/types';
import {LogicalProps} from '../utils/logical-properties';

export type RadioButtonIconProps = BaseSwitchIconProps;

export type RadioButtonOverrides = {
  spaceStack?: BaseSwitchOverrides['spaceStack'];
  input?: Pick<
    NonNullable<BaseSwitchOverrides['input']>,
    'size' | 'stylePreset' | 'spaceInline' | 'transitionPreset'
  >;
  feedback?: Pick<
    NonNullable<BaseSwitchOverrides['feedback']>,
    'size' | 'stylePreset'
  >;
  label?: BaseSwitchOverrides['label'];
  icon?: BaseSwitchOverrides['icon'];
} & LogicalProps;

export type RadioButtonProps = Omit<
  BaseSwitchProps,
  | 'path'
  | 'defaultSwitchSelectorComponent'
  | 'type'
  | 'defaultChecked'
  | 'defaultValue'
  | 'overrides'
> & {overrides?: RadioButtonOverrides};

export type RadioGroupContextValue = {
  name: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  value: string | undefined;
};

export type RadioGroupProps = {
  defaultValue?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  children?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'value' | 'name'>;
