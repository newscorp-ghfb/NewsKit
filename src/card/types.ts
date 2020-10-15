import {ImageProps} from '../image/types';
import {MQ} from '../utils/style';

export interface CardProps {
  href?: string;
  media?: ImageProps | React.ComponentType;
  children: Exclude<React.ReactNode, 'undefined'>;
  actions?: React.ComponentType;

  overrides?: {
    stylePreset?: MQ<string>;
    mediaContainer?: {
      stylePreset?: MQ<string>;
      spaceInline?: MQ<string>;
    };
    teaserContainer?: {
      stylePreset?: MQ<string>;
      spaceInset?: MQ<string>;
    };
    actionsContainer?: {
      stylePreset?: MQ<string>;
      spaceInset?: MQ<string>;
      minHeight?: string;
    };
  };
}
