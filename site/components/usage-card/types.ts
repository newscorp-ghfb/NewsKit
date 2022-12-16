import {CardProps} from 'newskit';

export interface KindConfig {
  title?: string;
  heading: string;
  iconComponent: React.ComponentType;
  dividerStylePreset: string;
  headingStylePreset: string;
}

export interface UsageCardProps extends Omit<CardProps, 'children'> {
  description?: string | React.ReactElement;
  kind?: UsageKind;
}

export enum UsageKind {
  DO = 'do',
  DONT = 'dont',
}
