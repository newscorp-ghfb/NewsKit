import {BaseFlagOverrides, BaseFlagProps} from '../flag';
import {MQ} from '../utils';

export enum MenuItemAlign {
  Start = 'start',
  End = 'end',
  Center = 'center',
}

export enum MenuItemSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export interface MenuProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  vertical?: boolean;
  size?: MenuItemSize;
  align?: MenuItemAlign;
  ariaLabel?: string;
  overrides?: {
    spaceInline?: MQ<string>; // -> space between menuItems or menuItemsGroup
  };
}

type MenuItemOverrides = Omit<BaseFlagOverrides, 'width' | 'height'>;
export interface MenuItemProps
  extends Omit<BaseFlagProps<MenuItemOverrides>, 'loading'> {
  children: Exclude<React.ReactNode, 'undefined'>;
  ariaLabel?: string;
  href: string;
  selected?: boolean;
  onClick?: () => {};
}
