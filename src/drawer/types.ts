import {MQ} from '../utils/style';

export interface DrawerProps {
  open: boolean;
  onDismiss: () => void;
  placement?: 'left' | 'right';
  children: Exclude<React.ReactNode, 'undefined'>;
  ariaDescribedby?: string;
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
