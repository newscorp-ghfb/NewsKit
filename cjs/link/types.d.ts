/// <reference types="react" />
import { MQ } from '../utils/style';
import { EventData } from '../instrumentation';
import { LogicalProps } from '../utils/logical-properties';
import { TransitionToken } from '../theme/types';
export interface BaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, EventData {
    href: string;
}
interface LinkOverrides extends LogicalProps {
    stylePreset?: MQ<string>;
    transitionPreset?: TransitionToken | TransitionToken[];
    typographyPreset?: MQ<string>;
    spaceInline?: MQ<string>;
    externalIcon?: {
        size?: string;
    };
}
export interface InternalLinkProps extends BaseLinkProps {
    external?: boolean;
    overrides?: LinkOverrides;
    noCrop?: boolean;
    textOnly?: boolean;
}
export interface LinkProps extends Omit<InternalLinkProps, 'noCrop'> {
}
export {};
//# sourceMappingURL=types.d.ts.map