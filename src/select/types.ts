import React from 'react';
import {EnhancerOverrides, CommonInputProps} from '../form/types';
import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';
import {Override} from '../utils/overrides';
import {ModalProps} from '../modal';
import {EventData} from '../instrumentation';
import {NewsKitIconProps} from '../icons';

export type ButtonSelectSize = 'small' | 'medium' | 'large';

export type SelectButtonIcon = NewsKitIconProps & {isOpen: boolean};

export interface SelectButtonOverrides extends EnhancerOverrides {
  width?: MQ<string>;
  height?: MQ<string>;
  minWidth?: MQ<string>;
  minHeight?: MQ<string>;
  maxWidth?: MQ<string>;
  stylePreset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingBlock` and `paddingInline` instead.
   */
  spaceInset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginBlock` instead.
   */
  spaceStack?: MQ<string>;
  spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
  typographyPreset?: MQ<string>;
  loadingIndicator?: {
    stylePreset?: MQ<string>;
  };
  indicatorIcon?: Override<SelectButtonIcon>;
}

export interface SelectPanelOverrides extends LogicalProps {
  maxHeight?: MQ<string>;
  stylePreset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingBlock` and `paddingInline` instead.
   */
  spaceInset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginBlock` instead.
   */
  spaceStack?: MQ<string>;
  zIndex?: 'layer' | string;
}

export type SelectPropsOverrides = {
  button?: SelectButtonOverrides;
  panel?: SelectPanelOverrides;
  modal?: Override<ModalProps>;
};

export interface SelectProps extends CommonInputProps, EventData {
  loading?: boolean;
  children: Array<React.ReactElement<SelectOptionProps>>;
  validationIcon?: React.ReactNode;
  useModal?: MQ<boolean>;
  overrides?: SelectPropsOverrides;
  virtualized?: number;
  onOpenChange?: (value: boolean) => void;
  // force select in controlled mode
  controlled?: boolean;
  labelId?: string;
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
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingBlock` and `paddingInline` instead.
     */
    spaceInset?: MQ<string>;
    // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
    spaceInline?: MQ<string>;
  } & LogicalProps;
}
