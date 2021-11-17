import React from 'react';
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
  feedback?: {
    size?: MQ<string>;
    stylePreset?: MQ<string>;
  };
  label?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  };
  icon?: Override<CheckboxIconProps>;
};

export type CheckboxSize = 'small' | 'medium' | 'large';

export type CheckboxState = 'valid' | 'invalid' | 'disabled';

export type CheckboxLabelPosition = 'start' | 'end';
export interface CheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'disabled'
  > {
  overrides?: CheckboxOverrides;
  size?: CheckboxSize;
  state?: CheckboxState;
  label?: React.ReactNode;
  labelAttributes?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelPosition?: CheckboxLabelPosition;
}
