export interface FeatureCardProps {
  title: string;
  description: string;
  stylePrefix: string;
  href?: string;
  layout?: 'vertical' | 'horizontal';
  buttonLabel?: string;
}
