import {BaseDialogProps} from '../dialog/types';
import {MQ} from '../utils';

// Refactor into interface -> https://stackoverflow.com/questions/53636756/typescript-interface-extending-another-interface-with-nested-properties
export type ModalProps = Omit<BaseDialogProps, 'placement'> & {
  closePosition?: 'left' | 'right' | 'none';
  overrides?: {
    panel?: {
      topOffset?: MQ<string>;
      width?: MQ<string>;
      height?: MQ<string>;
      minWidth?: MQ<string>;
      minHeight?: MQ<string>;
      maxHeight?: MQ<string>;
      maxWidth?: MQ<string>;
    };
  };
};
