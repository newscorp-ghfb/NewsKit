import {NewsKitIconProps} from '../../../icons';
import {MQ} from '../../../utils';
import {Override} from '../../../utils/overrides';
import {PaginationIconButtonProps2} from '../types';

export type PaginationLastItemProps = PaginationIconButtonProps2 & {
  children?: Exclude<React.ReactNode, 'undefined'>;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    icon?: Override<NewsKitIconProps>;
  };
};
