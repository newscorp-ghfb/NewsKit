import {CellProps, MQ} from 'newskit';
import {ImageProps} from '../../../src/image/types';

export interface SectionIntroductionProps {
  title: string;
  cellProps?: CellProps;
  image?: ImageProps;
  subHeadingSpaceStack?: MQ<string>;
  lastItem?: boolean;
}
