import {CardProps} from 'newskit';

export interface BaseCardProps extends CardProps {
  title?: string;
  children: React.ReactNode;
}
