import {CellProps} from 'newskit';

export interface MediaListProps {
  cards: Array<MediaItem>;
  xsCard?: number;
  smCard?: number;
  mdCard?: number;
  lgCard?: number;
  xlCard?: number;
  spaceStack?: string;
  cellWrapperProps?: CellProps;
}

export interface MediaItem {
  title: string;
  subtitle?: string;
  description: string;
  media?: {
    src: string;
    alt: string;
  };
  href?: string;
}
