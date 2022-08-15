import {CardProps} from 'newskit';

export interface BaseCardProps extends CardProps {
  title?: string;
  description?: string | React.ReactNode;
}
