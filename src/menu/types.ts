import {MouseEvent} from 'react';
import {DividerOverrides} from '../divider';
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
  overrides?: {
    spaceInline?: MQ<string>; // -> space between menuItems
  };
}

export interface MenuGroupProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  title?: React.ReactNode;
  overrides?: {
    spaceInline?: MQ<string>; // -> space between menuGroups
    stylePreset?: MQ<string>;
    title?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
      spaceInline?: MQ<string>;
      spaceInset?: MQ<string>;
    };
  };
}

type MenuItemOverrides = Omit<BaseFlagOverrides, 'width' | 'height'>;
export interface MenuItemProps
  extends Omit<BaseFlagProps<MenuItemOverrides>, 'loading'>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: Exclude<React.ReactNode, 'undefined'>;
  href: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface MenuDividerProps {
  overrides?: DividerOverrides & {
    spaceInline?: MQ<string>;
  };
}
