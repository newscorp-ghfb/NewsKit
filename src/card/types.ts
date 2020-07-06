import {ImageProps} from '../image/types';

export interface CardProps {
  href?: string;
  media?: ImageProps | React.ComponentType;
  overrides?: {
    media?: {
      stylePreset?: string;
    };
  };
}
