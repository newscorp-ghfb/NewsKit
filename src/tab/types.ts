import {FlagProps} from '../flag';

export enum TabSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TabProps extends Omit<FlagProps, 'isLoading' | 'size'> {
  size?: TabSize;
  isSelected?: boolean;
  ariaLabel?: string;
}
