import {GridProps, MQ} from 'newskit';
import {FeatureCardProps} from '../feature-card';
import {UsageCardProps} from '../usage-card';
import {BaseCardProps} from '../base-card';

export interface MediaListProps {
  cards: Array<MediaItem>;
  cardType?: 'base' | 'usage' | 'feature';
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
  notice?: string | React.ReactNode;
}
export type MediaItem = BaseCardProps | UsageCardProps | FeatureCardProps;
