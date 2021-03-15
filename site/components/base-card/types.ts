import {CardProps} from 'newskit';

export interface BaseCardProps extends Omit<CardProps, 'overrides'> {
  title?: string;
  children: React.ReactNode;
}
