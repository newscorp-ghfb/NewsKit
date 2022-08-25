import {DividerOverrides} from '../divider';
import {BaseFlagOverrides, BaseFlagProps} from '../flag';
import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';

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
export type MenutItemAlignTypes = MenuItemAlign | 'start' | 'end' | 'center';
type MenuSizeType = MenuItemSize | 'small' | 'medium' | 'large';
export interface MenuProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  vertical?: boolean;
  size?: MenuSizeType;
  align?: MenutItemAlignTypes;
  overrides?: {
    spaceInline?: MQ<string>; // LOGICAL_PROPS_TO_DO: Used as the gap between items. Should be renamed.
  } & LogicalProps;
}

export interface MenuGroupProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  title?: string | (() => React.ReactNode);
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
