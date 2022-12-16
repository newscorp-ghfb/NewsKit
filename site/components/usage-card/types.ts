import {CardProps} from 'newskit';

export interface KindConfig {
  heading: string;
  iconComponent: React.ComponentType;
  dividerStylePreset: string;
  headingStylePreset: string;
}

export interface UsageCardProps extends Omit<CardProps, 'children'> {
  title?: string;
  description?: string | React.ReactElement;
  kind?: UsageKind;
}

export enum UsageKind {
  DO = 'do',
  DONT = 'dont',
}
