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
  buttonOverrides?: ButtonProps['overrides'];
  overrides?: {
    title?: {
      typographyPreset?: MQ<string>;
    };
    description?: {
      typographyPreset?: MQ<string>;
      stylePreset?: MQ<string>;
    };
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
