import {MQ, NewsKitIconProps} from '../../..';
import {Override} from '../../../utils/overrides';
import {PaginationIconButtonWithoutClickProps} from '../types';

export type PaginationFirstItemProps = PaginationIconButtonWithoutClickProps & {
  children?: Exclude<React.ReactNode, 'undefined'>;
  overrides?: {
    stylePreset?: MQ<string>;
    typographyPreset?: MQ<string>;
    icon?: Override<NewsKitIconProps>;
  };
};
