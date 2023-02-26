import {MQ, NewsKitIconProps} from '../../..';
import {Override} from '../../../utils/overrides';
import {PaginationIconButtonWithShortcuts} from '../types';

export type PaginationFirstItemProps = PaginationIconButtonWithShortcuts & {
  children?: Exclude<React.ReactNode, 'undefined'>;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    icon?: Override<NewsKitIconProps>;
  };
};
