import React from 'react';
import {EnhancerOverrides, CommonInputProps} from '../form/types';
import {MQ} from '../utils/style';

export type ButtonSelectSize = 'small' | 'medium' | 'large';

export interface SelectButtonOverrides extends EnhancerOverrides {
  width?: MQ<string>;
  height?: MQ<string>;
  minWidth?: MQ<string>;
  minHeight?: MQ<string>;
  maxWidth?: MQ<string>;
  stylePreset?: MQ<string>;
  spaceInset?: MQ<string>;
  spaceStack?: MQ<string>;
  spaceInline?: MQ<string>;
  typographyPreset?: MQ<string>;
  loadingIndicator?: {
    stylePreset?: MQ<string>;
  };
}

export interface SelectPanelOverrides {
  maxHeight?: MQ<string>;
  stylePreset?: MQ<string>;
  spaceInset?: MQ<string>;
  spaceStack?: MQ<string>;
}

export interface SelectProps extends CommonInputProps {
  loading?: boolean;
  children: Array<React.ReactElement<SelectOptionProps>>;
  validationIcon?: React.ReactNode;
  overrides?: {
    button?: SelectButtonOverrides;
    panel?: SelectPanelOverrides;
  };
}

export interface SelectOptionProps {
  value: string;
  children: React.ReactNode;
  selected?: boolean;
  defaultSelected?: boolean;
  selectedIcon?: React.ReactNode;
  selectedDisplay?: React.ReactNode;
  overrides?: {
    minHeight?: MQ<string>;
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    spaceInset?: MQ<string>;
    spaceInline?: MQ<string>;
  };
}
