import {MQ} from '../utils/style';

export interface DrawerProps {
  open: boolean;
  onDismiss?: () => void;
  placement?: 'left' | 'right';
  /** Whether the drawer panel can be dismissed by clicking outside the drawer (on the overlay) */
  closeable?: boolean;
  overrides?: {
    overlay?: {
      stylePreset?: MQ<string>;
    };
    panel?: {
      stylePreset?: MQ<string>;
      size?: MQ<string>;
      maxSize: MQ<string>;
      minSize: MQ<string>;
    };
  };
}

export interface DrawerHeaderProps {
  onCloseButtonClick: () => void;
}
