import {ButtonProps, CardProps, MQ} from 'newskit';

export interface FeatureCardProps
  extends Omit<CardProps, 'children' | 'layout' | 'overrides'> {
  flagLabel?: string;
  title?: string;
  description?: string;
  stylePrefix?: string;
  layout?: 'vertical' | 'horizontal';
  buttonIcon?: React.ReactNode;
  buttonHref?: string;
  buttonLabel?: string;
  overrides?: {
    title?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    };
    description?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    };
    button?: ButtonProps['overrides'];
  };
}

export interface ArrowLinkProps {
  dataTestId?: string;
  icon?: React.ReactNode;
  href?: string;
  buttonHref?: string;
  overrides?: ButtonProps['overrides'];
  label?: string;
}

export type OptionalLinkWrapperProps = Pick<CardProps, 'href' | 'children'>;
