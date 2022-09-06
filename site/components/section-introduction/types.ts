import {CellProps, MQ} from 'newskit';
import {ImageProps} from '../../../src/image/types';

export interface SectionIntroductionProps {
  children?: React.ReactNode;
  title: string;
  cellProps?: CellProps;
  image?: ImageProps;
  subHeadingSpaceStack?: MQ<string>;
  lastItem?: boolean;
}
