import {CardProps} from '../card/types';

export interface CardMediaProps extends Pick<CardProps, 'href' | 'media'> {
  overrides?: {
    stylePreset?: string;
  };
}
