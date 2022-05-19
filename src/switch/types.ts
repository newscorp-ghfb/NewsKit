import React from 'react';
import {BaseSwitchProps} from '../base-switch';
import {
  BaseSwitchIconProps,
  BaseSwitchOverrides,
  BaseSwitchState,
} from '../base-switch/types';
import {LogicalProps} from '../utils/logical-properties';

export type SwitchIconProps = Omit<
  BaseSwitchIconProps,
  'state' | 'parentOverrides'
> & {
  state: SwitchState;
  parentOverrides: SwitchOverrides;
};

export type SwitchOverrides = {
  spaceStack?: BaseSwitchOverrides['spaceStack'];
  input?: Pick<
    NonNullable<BaseSwitchOverrides['input']>,
    | 'blockSize'
    | 'inlineSize'
    | 'stylePreset'
    | 'transitionPreset'
    | 'spaceInline'
  > &
    LogicalProps;
  thumb?: BaseSwitchOverrides['thumb'];
  feedback?: BaseSwitchOverrides['feedback'];
  label?: BaseSwitchOverrides['label'];
  onIcon?: BaseSwitchOverrides['onIcon'];
  offIcon?: BaseSwitchOverrides['offIcon'];
  icon?: BaseSwitchOverrides['icon'];
} & LogicalProps;

export type SwitchState = Extract<BaseSwitchState, 'disabled'>;

export interface SwitchProps
  extends Omit<
    BaseSwitchProps,
    | 'path'
    | 'defaultSwitchSelectorComponent'
    | 'type'
    | 'CheckIconContainer'
    | 'overrides'
    | 'state'
    | 'label'
  > {
  overrides?: SwitchOverrides;
  state?: SwitchState;
  label: React.ReactNode;
}
