import {NewsKitIconProps} from '../../../icons';
import {MQ} from '../../../utils';
import {Override} from '../../../utils/overrides';
import {PaginationIconButtonWithoutClickProps} from '../types';

export type PaginationNextItemProps = PaginationIconButtonWithoutClickProps & {
  children?: Exclude<React.ReactNode, 'undefined'>;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    icon?: Override<NewsKitIconProps>;
  };
};
