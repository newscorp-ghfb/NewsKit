import React from 'react';
import type { JSX } from 'react';
import { LogicalProps } from '../utils/logical-properties';
import { TransitionToken } from '../theme/types';
import { MQ } from '../utils/style';
export interface BlockProps extends React.HTMLAttributes<HTMLDivElement>, LogicalProps {
    as?: keyof JSX.IntrinsicElements;
    stylePreset?: MQ<string>;
    transitionPreset?: TransitionToken | TransitionToken[];
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `marginInlineEnd` instead.
     */
    spaceInline?: MQ<string>;
    /**
     * @deprecated This property is deprecated and will be removed in the next major release. Use `marginBlockEnd` instead.
     */
    spaceStack?: MQ<string>;
}
export declare const Block: React.ForwardRefExoticComponent<BlockProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=block.d.ts.map