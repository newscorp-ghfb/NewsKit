import {ButtonProps} from '../button';

export enum TabSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TabProps extends Omit<ButtonProps, 'loading' | 'size'> {
  size?: TabSize;
  selected?: boolean;
  ariaLabel?: string;
  tabKey?: number;
}
