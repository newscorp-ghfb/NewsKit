import {BaseFlagOverrides, BaseFlagProps} from '../flag';

export enum TagSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TagProps extends BaseFlagProps<BaseFlagOverrides> {
  href?: string;
}
