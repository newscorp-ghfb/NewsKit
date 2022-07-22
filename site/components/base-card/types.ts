import {CardProps} from 'newskit';

export interface BaseCardProps extends Omit<CardProps, 'children'> {
  children?: React.ReactNode;
  title?: string;
  description?: string | React.ReactNode;
}
