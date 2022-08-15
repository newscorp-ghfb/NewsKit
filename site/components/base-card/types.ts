import {CardProps} from 'newskit';

export interface BaseCardProps extends Omit<CardProps, 'children'> {
  title?: string;
  description?: string | React.ReactNode;
}
