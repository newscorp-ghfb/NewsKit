import React from 'react';
import {NewsKitIconProps} from '../icons';
import {TransitionToken} from '../theme/presets/types';
import {Override} from '../utils/overrides';
import {MQ} from '../utils/style/types';

export type SwitchBaseIconProps = NewsKitIconProps &
  Pick<SwitchBaseProps, 'checked' | 'state'> & {iconSize?: string};

type SwitchBaseOverrides = {
  spaceStack?: MQ<string>;
  input?: {
    size?: MQ<string>;
    stylePreset?: MQ<string>;
    spaceInline?: MQ<string>;
    transitionPreset?: TransitionToken | TransitionToken[];
  };
  feedback?: {
    size?: MQ<string>;
    stylePreset?: MQ<string>;
  };
  label?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  };
  icon?: Override<SwitchBaseIconProps>;
};

export type SwitchBaseSize = 'small' | 'medium' | 'large';

export type SwitchBaseState = 'valid' | 'invalid' | 'disabled';

export type SwitchBaseLabelPosition = 'start' | 'end';

export interface SwitchBaseProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'disabled'
  > {
  overrides?: SwitchBaseOverrides;
  size?: SwitchBaseSize;
  state?: SwitchBaseState;
  label?: React.ReactNode;
  labelAttributes?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelPosition?: SwitchBaseLabelPosition;
  path: string;
  defaultSwitchSelectorComponent: React.ComponentType<SwitchBaseIconProps>;
}
