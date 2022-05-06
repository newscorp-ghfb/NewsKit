import React from 'react';
import {NewsKitIconProps} from '../icons';
import {TransitionToken} from '../theme/presets/types';
import {LogicalProps} from '../utils/logical-properties';
import {Override} from '../utils/overrides';
import {MQ} from '../utils/style/types';

export type BaseSwitchIconProps = NewsKitIconProps &
  Pick<BaseSwitchProps, 'checked' | 'state' | 'size'> & {
    iconSize?: string;
    parentOverrides?: BaseSwitchOverrides;
    isFocused?: boolean;
    isHovered?: boolean;
  };

export type BaseSwitchOverrides = {
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginBlockEnd` instead.
   */
  spaceStack?: MQ<string>;
  input?: {
    size?: MQ<string>;
    stylePreset?: MQ<string>;
    spaceInline?: MQ<string>; // Note: spaceInline is used as a gap. Should rename this instead of using logical props.
    transitionPreset?: TransitionToken | TransitionToken[];
    blockSize?: MQ<string>;
    inlineSize?: MQ<string>;
    spaceInset?: MQ<string>;
  };
  feedback?: {
    size?: MQ<string>;
    stylePreset?: MQ<string>;
    transitionPreset?: TransitionToken | TransitionToken[];
  };
  label?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  };
  thumb?: {
    size?: MQ<string>;
    stylePreset?: MQ<string>;
    transitionPreset?: TransitionToken | TransitionToken[];
  };
  icon?: Override<BaseSwitchIconProps>;
  onIcon?: Override<BaseSwitchIconProps>;
  offIcon?: Override<BaseSwitchIconProps>;
};

export type BaseSwitchSize = 'small' | 'medium' | 'large';

export type BaseSwitchState = 'valid' | 'invalid' | 'disabled';

export type BaseSwitchLabelPosition = 'start' | 'end';

export interface BaseSwitchProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'size' | 'disabled'
  > {
  overrides?: BaseSwitchOverrides & LogicalProps;
  size?: BaseSwitchSize;
  state?: BaseSwitchState;
  label?: React.ReactNode;
  labelAttributes?: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelPosition?: BaseSwitchLabelPosition;
  path: string;
  defaultSwitchSelectorComponent: React.ComponentType<BaseSwitchIconProps>;
}
