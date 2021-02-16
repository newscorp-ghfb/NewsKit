import {MQ} from '../utils/style';

export interface ScrollProps {
  vertical?: boolean;
  arrows?: 'hover' | 'static';
  stepDistance?: number;
  snapAlign?: 'start' | 'center' | 'end';
  overrides?: {
    arrows?: {
      stylePreset?: MQ<string>;
      spaceInset?: MQ<string>;
    };
  };
}
