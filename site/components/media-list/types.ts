import {GridProps, MQ, ImageProps, CellProps} from 'newskit';

export interface MediaListProps {
  cards: Array<MediaItem>;
  cardsLayout?: MQ<'horizontal' | 'vertical'>;
  layout?:
    | '1-span'
    | '2-span'
    | '2-span-hero'
    | '3-span'
    | '3-span-hero'
    | '4-span';
  spaceStack?: string;
  gridProps?: GridProps;
  horizontalRatio?: string;
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
}
