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

export enum MenuItemDistribution {
  Start = 'start',
  Grow = 'grow',
  Equal = 'equal',
}

export interface MenuProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  vertical?: boolean;
  size?: MenuItemSize;
  align?: MenuItemAlign;
  distribution?: MenuItemDistribution;
  overrides?: {
    spaceInline?: MQ<string>; // -> space between menuItems or menuItemsGroup
  };
}

type MenuItemOverrides = Omit<BaseFlagOverrides, 'width' | 'height'>;
export interface MenuItemProps
  extends Omit<BaseFlagProps<MenuItemOverrides>, 'loading'> {
  children: Exclude<React.ReactNode, 'undefined'>;
  href: string;
  selected?: boolean;
  onClick?: () => {};
}
