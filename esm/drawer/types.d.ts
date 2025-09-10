import { BaseDialogProps } from '../dialog/types';
import { MQ } from '../utils';
import { LogicalProps } from '../utils/logical-properties';
export type DrawerProps = BaseDialogProps & {
    placement?: 'left' | 'right' | 'top' | 'bottom';
    overrides?: {
        panel?: {
            size?: MQ<string>;
            maxSize?: MQ<string>;
            minSize?: MQ<string>;
        } & LogicalProps;
    };
};
//# sourceMappingURL=types.d.ts.map