import {NewsKitIconProps} from '..';
import {Override} from '../utils/overrides';
import {MQ} from '../utils/style/types';

export type CheckboxIconProps = NewsKitIconProps &
  Pick<CheckboxProps, 'checked' | 'state'>;

type CheckboxOverrides = {
  input?: {
    size?: MQ<string>;
    stylePreset?: MQ<string>;
    spaceInline?: MQ<string>;
  };
  ripple?: {
    size?: MQ<string>;
    stylePreset?: MQ<string>;
  };
  icon?: Override<CheckboxIconProps>;
};

export type CheckboxSize = 'small' | 'medium' | 'large';

export type CheckboxState = 'valid' | 'invalid' | 'disabled';

export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'disabled'
  > {
  overrides?: CheckboxOverrides;
  size?: CheckboxSize;
  state?: CheckboxState;
}
