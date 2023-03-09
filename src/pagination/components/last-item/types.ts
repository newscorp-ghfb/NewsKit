import {NewsKitIconProps} from '../../../icons';
import {MQ} from '../../../utils';
import {Override} from '../../../utils/overrides';
import {PaginationIconButtonWithShortcuts} from '../types';

export type PaginationLastItemProps = PaginationIconButtonWithShortcuts & {
  children?: Exclude<React.ReactNode, 'undefined'>;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    icon?: Override<NewsKitIconProps>;
  };
};
