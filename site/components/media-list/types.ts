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
  xsCard?: number;
  smCard?: number;
  mdCard?: number;
  lgCard?: number;
  xlCard?: number;
  spaceStack?: string;
  gridProps?: GridProps;
  parentCellProps?: CellProps;
}

export type SpanLayoutList = Pick<MediaListProps, 'layout'>;
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
