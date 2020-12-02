import {MQ} from '../utils/style';

export enum FlagSize {
  Small = 'small',
  Large = 'large',
}

export interface BaseFlagOverrides {
  typographyPreset?: MQ<string>;
  stylePreset?: MQ<string>;
  spaceInset?: MQ<string>;
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  iconSize?: string;
  spaceInline?: MQ<string>;
}

export interface BaseFlagProps<T> {
  disabled?: boolean;
  loading?: boolean;
  overrides?: T;
}

export interface FlagProps extends BaseFlagProps<BaseFlagOverrides> {
  size?: FlagSize;
}
