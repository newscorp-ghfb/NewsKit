import {FlagProps} from '../flag';

export enum TagSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TagProps extends Omit<FlagProps, 'size'> {
  size?: TagSize;
  href?: string;
}
