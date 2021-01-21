import {MQ} from '../utils/style';

export interface ScrollProps {
  vertical?: boolean;
  arrows?: 'hover' | 'static';
  stepDistance?: number;
  overrides?: {
    arrows?: {
      stylePreset?: MQ<string>;
      spaceInset?: MQ<string>;
    };
  };
}
