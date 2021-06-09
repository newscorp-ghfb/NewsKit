import {MQ} from '../utils/style';

export enum FlagSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface BaseFlagOverrides {
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  spaceInset?: MQ<string>;
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
