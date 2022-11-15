import {MQ} from '../utils';
import {LogicalProps} from '../utils/logical-properties';
import {NewsKitIconProps} from '../icons';
import {Override} from '../utils/overrides';
import {EventData} from '../instrumentation';

export type BreadcrumbSize = 'small' | 'medium' | 'large';

export interface BreadcrumbsProps extends React.AriaAttributes {
  children: Exclude<React.ReactNode, 'undefined'>;
  size?: BreadcrumbSize;
  showTrailingSeparator?: boolean;
  overrides?: {
    stylePreset?: MQ<string>;
    separator?: Override<NewsKitIconProps>;
  } & LogicalProps;
}

export interface BreadcrumbItemProps extends React.AriaAttributes, EventData {
  children: Exclude<React.ReactNode, 'undefined'>;
  selected?: boolean;
  href: string;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
  } & LogicalProps;
}
