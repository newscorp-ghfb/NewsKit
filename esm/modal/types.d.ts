import { BaseDialogProps } from '../dialog/types';
import { MQ } from '../utils';
import { LogicalPaddingProps } from '../utils/logical-properties';
export type ModalProps = Omit<BaseDialogProps, 'placement'> & {
    overrides?: {
        panel?: {
            topOffset?: MQ<string>;
            width?: MQ<string>;
            height?: MQ<string>;
            minWidth?: MQ<string>;
            minHeight?: MQ<string>;
            maxHeight?: MQ<string>;
            maxWidth?: MQ<string>;
        } & LogicalPaddingProps;
    };
};
//# sourceMappingURL=types.d.ts.map