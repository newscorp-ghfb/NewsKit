import {ButtonProps} from '../button';

export enum TabSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface TabProps extends Omit<ButtonProps, 'isLoading' | 'size'> {
  size?: TabSize;
  isSelected?: boolean;
  ariaLabel?: string;
  tabKey?: number;
}
