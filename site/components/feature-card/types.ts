import {CardProps} from 'newskit';

export interface FeatureCardProps
  extends Omit<CardProps, 'children' | 'layout'> {
  title: string;
  description: string;
  stylePrefix: string;
  layout?: 'vertical' | 'horizontal';
  buttonLabel?: string;
}
