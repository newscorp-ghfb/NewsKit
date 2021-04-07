import {MQ} from '../utils/style';

export interface BannerProps {
  children: Exclude<React.ReactNode, 'undefined'>;
  overrides?: {
    container?: {
      stylePreset?: MQ<string>;
      minHeight?: MQ<string>;
      spaceInset?: MQ<string>;
    };
    contentActionsContainer?: {
      maxWidth?: MQ<string>;
    };
  };
}
