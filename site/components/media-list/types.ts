import {GridProps, MQ, CellProps} from 'newskit';
import {UsageCardProps} from '../usage-card';
import {BaseCardProps} from '../base-card';

export interface MediaListProps {
  cards: Array<MediaItem>;
  cardType?: 'base' | 'usage';
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
export type MediaItem = BaseCardProps & UsageCardProps;
