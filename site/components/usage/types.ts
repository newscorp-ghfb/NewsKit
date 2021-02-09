import {ImageProps} from '../../../src/image/types';

export interface UsageProps {
  cards: Array<UsageCardProps>;
}

export interface UsageCardProps {
  title: string;
  description: string;
  allowed: boolean;
  media: ImageProps;
}
