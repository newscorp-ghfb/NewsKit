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
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
  iconSize?: string;
}

export interface BaseFlagProps<TOverrides> {
  disabled?: boolean;
  loading?: boolean;
  overrides?: TOverrides;
  size?: 'small' | 'medium' | 'large';
}

export interface FlagProps extends BaseFlagProps<BaseFlagOverrides> {}
