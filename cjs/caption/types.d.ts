/// <reference types="react" />
import { LogicalProps } from '../utils/logical-properties';
import { MQ } from '../utils/style';
export interface CaptionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    creditText?: string;
    overrides?: {
        typographyPreset?: MQ<string>;
        stylePreset?: MQ<string>;
        spaceStack?: MQ<string>;
        credit?: {
            typographyPreset?: MQ<string>;
            stylePreset?: MQ<string>;
        };
    } & LogicalProps;
}
//# sourceMappingURL=types.d.ts.map