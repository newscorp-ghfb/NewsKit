import {MQ} from '../utils/style';

export interface DrawerProps {
  open: boolean;
  placement?: 'left' | 'right';
  overrides?: {
    panel?: {
      stylePreset?: MQ<string>;
      size?: MQ<string>;
      maxSize: MQ<string>;
      minSize: MQ<string>;
    };
  };
}
