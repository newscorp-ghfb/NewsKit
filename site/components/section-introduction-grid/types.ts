import {MQ} from 'newskit';
import {ImageProps} from '../../../src/image/types';

export interface SectionIntroductionGridProps {
  title: string;
  image?: ImageProps;
  subHeadingSpaceStack?: MQ<string>;
  lastItem?: boolean;
}
