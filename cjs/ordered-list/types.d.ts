/// <reference types="react" />
import { MQ } from '../utils/style';
import { LogicalProps } from '../utils/logical-properties';
export interface OrderedListProps extends React.OlHTMLAttributes<HTMLOListElement> {
    children: React.ReactNode | Array<React.ReactNode>;
    overrides?: {
        spaceInline?: MQ<string>;
        content?: {
            stylePreset?: MQ<string>;
            typographyPreset?: MQ<string>;
        };
        counter?: {
            stylePreset?: MQ<string>;
            typographyPreset?: MQ<string>;
            minWidth?: MQ<string>;
        };
    } & LogicalProps;
}
export interface OrderedListItemProps extends Omit<OrderedListProps, 'children'> {
    children: React.ReactNode;
}
//# sourceMappingURL=types.d.ts.map