import {ButtonOverrides} from '../button';
import {MQ} from '../utils/style';

export interface ScrollProps {
  vertical?: boolean;
  controls?: 'hover' | 'static';
  stepDistance?: number;
  snapAlign?: 'start' | 'center' | 'end';
  scrollBar?: boolean;
  overrides?: {
    controls?: {
      offset?: MQ<string>;
      button?: ButtonOverrides;
    };
    overlays?: {
      stylePreset?: MQ<string>;
      size?: MQ<string>;
    };
  };
}
