import {LogicalProps} from '../utils/logical-properties';
import {MQ} from '../utils/style';

export enum FlagSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface BaseFlagOverrides extends LogicalProps {
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `paddingBlock` and `paddingInline` instead.
   */
  spaceInset?: MQ<string>;
  /**
   * @deprecated This property is deprecated and will be removed in the next major release. Use `marginInline` instead.
   */
  spaceInline?: MQ<string>;
  width?: MQ<string>;
  height?: MQ<string>;
  minWidth?: MQ<string>;
  minHeight?: MQ<string>;
  maxWidth?: MQ<string>;
  maxHeight?: MQ<string>;
  iconSize?: MQ<string>;
}

export interface BaseFlagProps<TOverrides> {
  disabled?: boolean;
  loading?: boolean;
  overrides?: TOverrides;
  size?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
}

export interface FlagProps extends BaseFlagProps<BaseFlagOverrides> {}
