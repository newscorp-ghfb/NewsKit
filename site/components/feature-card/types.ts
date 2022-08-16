import {CardProps, MQ} from 'newskit';
import {LogicalProps} from '../../../src/utils/logical-properties';

export interface FeatureCardProps
  extends Omit<CardProps, 'children' | 'layout' | 'overrides'> {
  title?: string;
  description?: string;
  stylePrefix?: string;
  layout?: 'vertical' | 'horizontal';
  buttonHref?: string;
  buttonLabel?: string;
  buttonLogicalProps?: LogicalProps;
  overrides?: {
    title?: {
      typographyPreset?: MQ<string>;
    };
    description?: {
      typographyPreset?: MQ<string>;
    };
  };
}

export type OptionalLinkWrapperProps = Pick<CardProps, 'href'>;
export type OptionalButtonLinkWrapperProps = Pick<CardProps, 'href'> & {
  buttonHref?: string;
};
