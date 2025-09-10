import React from 'react';
import { ImageProps } from '../image/types';
import { EventData } from '../instrumentation';
import { BaseLinkProps } from '../link/types';
import { LogicalProps } from '../utils/logical-properties';
import { MQ } from '../utils/style';
export interface CardOverridesProps extends LogicalProps {
    stylePreset?: MQ<string>;
    horizontalRatio?: string;
    mediaContainer?: {
        stylePreset?: MQ<string>;
        spaceInline?: MQ<string>;
    } & LogicalProps;
    teaserContainer?: {
        stylePreset?: MQ<string>;
    } & LogicalProps;
    actionsContainer?: {
        stylePreset?: MQ<string>;
        minHeight?: string;
    } & LogicalProps;
}
export type HasHref = {
    hasHref?: boolean;
};
export type CardLayout = 'vertical' | 'horizontal' | 'horizontal-reverse';
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, EventData {
    href?: string | BaseLinkProps;
    layout?: MQ<CardLayout>;
    media?: ImageProps | React.ComponentType;
    mediaInteractive?: boolean;
    children: Exclude<React.ReactNode, 'undefined'>;
    actions?: React.ComponentType;
    overrides?: CardOverridesProps;
}
//# sourceMappingURL=types.d.ts.map