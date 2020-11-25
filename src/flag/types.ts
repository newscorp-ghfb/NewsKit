import {MQ} from '../utils/style';

export enum FlagSize {
  Small = 'small',
  Large = 'large',
}

export interface BaseFlagProps {
  disabled?: boolean;
  loading?: boolean;
  overrides?: {
    typographyPreset?: MQ<string>;
    stylePreset?: MQ<string>;
    spaceInset?: MQ<string>;

    width?: string;
    height?: string;
    minWidth?: string;
    minHeight?: string;

    iconSize?: string;
    spaceInline?: MQ<string>;
  };
}

export interface FlagProps extends BaseFlagProps {
  size?: FlagSize;
}
