import {ButtonProps, CardProps, MQ} from 'newskit';

export interface FeatureCardProps
  extends Omit<CardProps, 'children' | 'layout' | 'overrides'> {
  title?: string;
  description?: string;
  stylePrefix?: string;
  layout?: 'vertical' | 'horizontal';
  buttonIcon?: React.ReactNode;
  buttonHref?: string;
  buttonLabel?: string;
  buttonOverrides?: ButtonProps['overrides'];
  overrides?: {
    title?: {
      typographyPreset?: MQ<string>;
    };
    description?: {
      typographyPreset?: MQ<string>;
    };
  };
}

export type OptionalLinkWrapperProps = Pick<CardProps, 'href' | 'children'>;

export type OptionalButtonLinkWrapperProps = Pick<
  CardProps,
  'href' | 'children'
> & {
  buttonHref?: string;
};
