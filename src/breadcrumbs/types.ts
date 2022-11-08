import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';
import {NewsKitIconProps} from '../icons';
import {Override} from '../utils/overrides';

export type BreadcrumbItemSize = 'small' | 'medium' | 'large';

export interface BreadcrumbsProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  size?: BreadcrumbItemSize;
  separator?: Override<NewsKitIconProps>;
  showTrailingSeparator?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    separator?: {
      stylePreset?: MQ<string>;
      space?: MQ<string>;
      iconSize?: MQ<string>;
    };
  } & LogicalProps;
}

export interface BreadcrumbItemProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  selected?: boolean;
  href: string;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  } & LogicalProps;
}
