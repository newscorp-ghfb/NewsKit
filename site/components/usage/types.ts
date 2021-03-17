import {ImageProps} from '../../../src/image/types';

export interface UsageProps {
  cards: Array<UsageCardProps>;
}

export interface UsageCardProps {
  description: string;
  kind: 'do' | 'dont';
  media: ImageProps;
}
