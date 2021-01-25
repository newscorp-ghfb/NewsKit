import {CellProps} from 'newskit';

export interface SectionIntroductionProps {
  title: string;
  cellProps?: CellProps;
  image?: {
    src: string;
    alt: string;
  };
}
