import {SwitchBaseIconProps, SwitchBaseProps} from '../switch-base/types';

export type RadioButtonIconProps = SwitchBaseIconProps;

export type RadioButtonProps = Omit<
  SwitchBaseProps,
  'path' | 'defaultSwitchComponent' | 'type' | 'defaultChecked' | 'defaultValue'
>;

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
