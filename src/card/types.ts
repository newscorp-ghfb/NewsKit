import {ImageProps} from '../image/types';

export interface CardProps {
  href?: string;
  media?: ImageProps | React.ComponentType;
  overrides?: {
    stylePreset?: string;
    media?: {
      stylePreset?: string;
    };
  };
}
