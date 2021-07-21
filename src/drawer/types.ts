import {BaseDialogProps} from '../dialog/types';
import {MQ} from '../utils';

// Refactor into interface -> https://stackoverflow.com/questions/53636756/typescript-interface-extending-another-interface-with-nested-properties
export type DrawerProps = BaseDialogProps & {
  overrides?: {
    panel?: {
      size?: MQ<string>;
      maxSize?: MQ<string>;
      minSize?: MQ<string>;
    };
  };
};
