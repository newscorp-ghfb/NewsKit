import {DividerOverrides} from '../divider';
import {BaseFlagOverrides, BaseFlagProps} from '../flag';
import {EventData} from '../instrumentation';
import {NewsKitIconProps} from '../icons';
import {MQ} from '../utils';
import {LogicalPaddingProps, LogicalProps} from '../utils/logical-properties';
import {Override} from '../utils/overrides';

export type MenuItemSize = 'small' | 'medium' | 'large';
export type MenuItemAlign = 'start' | 'end' | 'center' | 'spaceBetween';

export interface MenuProps extends React.HTMLAttributes<HTMLElement> {
  children: Exclude<React.ReactNode, 'undefined'>;
  vertical?: boolean;
  size?: MenuItemSize;
  align?: MenuItemAlign;
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
    } & LogicalPaddingProps;
  };
}

type MenuItemOverrides = Omit<BaseFlagOverrides, 'width' | 'height'>;
export interface MenuItemProps
  extends Omit<BaseFlagProps<MenuItemOverrides>, 'loading'>,
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    EventData {
  children: Exclude<React.ReactNode, 'undefined'>;
  href: string;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export type MenuSubIconProps = NewsKitIconProps & {expanded: boolean};

export type MenuSubProps = Omit<
  MenuItemProps,
  'title' | 'overrides' | 'href'
> & {
  title?: React.ReactNode;
  href?: string;
  expanded?: boolean;
  defaultExpanded?: boolean;
  align?: MenuItemAlign;
  overrides?: {
    indicatorIcon?: Override<MenuSubIconProps>;
    list?: {
      stylePreset?: MQ<string>;
    } & LogicalProps;
  } & MenuItemProps['overrides'];
};

export interface MenuDividerProps {
  overrides?: DividerOverrides & {
    spaceInline?: MQ<string>;
  };
}
