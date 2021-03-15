import {GridProps, MQ, ImageProps, CellProps} from 'newskit';

export interface MediaListProps {
  cards: Array<MediaItem>;
  cardsLayout?: MQ<'horizontal' | 'vertical'>;
  xsCard?: number;
  smCard?: number;
  mdCard?: number;
  lgCard?: number;
  xlCard?: number;
  spaceStack?: string;
  gridProps?: GridProps;
  parentCellProps?: CellProps;
}

interface TextBlockPresets {
  stylePreset: MQ<string>;
  typographyPreset: MQ<string>;
}

export interface MediaItem {
  label: string;
  title?: string;
  description: string;
  media?: ImageProps;
  href?: string;
  styles?: {
    label?: TextBlockPresets;
    title?: TextBlockPresets;
    description?: TextBlockPresets;
  };
}
