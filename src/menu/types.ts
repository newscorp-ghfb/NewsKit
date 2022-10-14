import {DividerOverrides} from '../divider';
import {BaseFlagOverrides, BaseFlagProps} from '../flag';
import {NewsKitIconProps} from '../icons';
import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';
import {Override} from '../utils/overrides';

export type MenuItemSize = 'small' | 'medium' | 'large';
export type MenuItemAlign = 'start' | 'end' | 'center';

export interface MenuProps extends React.AriaAttributes {
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

export type MenuSubIconProps = NewsKitIconProps & {expanded: boolean};
export interface MenuSubProps extends MenuItemProps {
  title?: React.ReactNode;
  onChange?: (event: boolean) => void;
  expanded?: boolean;
  defaultExpanded?: boolean;
  overrides?: {
    indicatorIcon?: Override<MenuSubIconProps>;
  } & MenuItemProps['overrides'];
}

export interface MenuDividerProps {
  overrides?: DividerOverrides & {
    spaceInline?: MQ<string>;
  };
}
