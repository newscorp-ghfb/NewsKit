import {ImageProps} from '../../../src/image/types';

export interface KindConfig {
  heading: string;
  iconComponent: React.ComponentType;
  dividerStylePreset: string;
  headingStylePreset: string;
}

export interface UsageCardProps {
  description: string;
  kind: 'do' | 'dont';
  media: ImageProps;
}

export interface UsageProps {
  cards: Array<UsageCardProps>;
}
