import {MQ} from '../utils/style';

export interface DrawerProps {
  open: boolean;
  onDismiss: () => void;
  placement?: 'left' | 'right';
  header?: React.ReactNode;
  children: Exclude<React.ReactNode, 'undefined'>;
  ariaDescribedby?: string;
  ariaLabelledby?: string;

  overrides?: {
    overlay?: {
      stylePreset?: MQ<string>;
    };
    panel?: {
      stylePreset?: MQ<string>;
      spaceInset?: MQ<string>;
      size?: MQ<string>;
      maxSize: MQ<string>;
      minSize: MQ<string>;
    };
    header?: {
      stylePreset?: MQ<string>;
      spaceInset?: MQ<string>;
    };
    content?: {
      spaceInset?: MQ<string>;
    };
    closeButton?: {
      stylePreset?: MQ<string>;
      spaceInset?: MQ<string>;
    };
  };
}

export interface DrawerHeaderProps {
  onCloseButtonClick: () => void;
}
