import React from 'react';
import {BaseSwitchProps} from '../base-switch';
import {BaseSwitchOverrides, BaseSwitchState} from '../base-switch/types';

export type SwitchOverrides = {
  spaceStack?: BaseSwitchOverrides['spaceStack'];
  input?: Pick<
    NonNullable<BaseSwitchOverrides['input']>,
    | 'blockSize'
    | 'inlineSize'
    | 'stylePreset'
    | 'transitionPreset'
    | 'spaceInline'
    | 'spaceInset'
  >;
  thumb?: BaseSwitchOverrides['thumb'];
  feedback?: BaseSwitchOverrides['feedback'];
  label?: BaseSwitchOverrides['label'];
  onIcon?: BaseSwitchOverrides['onIcon'];
  offIcon?: BaseSwitchOverrides['offIcon'];
  icon?: BaseSwitchOverrides['icon'];
};

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
