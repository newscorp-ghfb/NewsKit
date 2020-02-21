import {BaseFlagProps} from '../base-flag/types';

export enum TagSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TagProps extends BaseFlagProps {
  $size?: TagSize;
  href?: string;
  disabled?: boolean;
}
