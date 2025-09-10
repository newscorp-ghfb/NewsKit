import React from 'react';
import { MenuSubIconProps } from './types';
export declare const MenuSub: React.ForwardRefExoticComponent<Omit<import("./types").MenuItemProps, "overrides" | "title" | "href"> & {
    title?: React.ReactNode;
    href?: string | undefined;
    expanded?: boolean | undefined;
    defaultExpanded?: boolean | undefined;
    align?: import("./types").MenuItemAlign | undefined;
    overrides?: ({
        indicatorIcon?: import("../utils/overrides").Override<MenuSubIconProps>;
        list?: ({
            stylePreset?: import("..").MQ<string> | undefined;
        } & import("../utils/logical-properties").LogicalProps) | undefined;
    } & {
        maxHeight?: import("..").MQ<string> | undefined;
        marginBlockEnd?: import("..").MQ<string> | undefined;
        marginBlockStart?: import("..").MQ<string> | undefined;
        marginInlineEnd?: import("..").MQ<string> | undefined;
        marginInlineStart?: import("..").MQ<string> | undefined;
        maxWidth?: import("..").MQ<string> | undefined;
        minHeight?: import("..").MQ<string> | undefined;
        minWidth?: import("..").MQ<string> | undefined;
        paddingBlockEnd?: import("..").MQ<string> | undefined;
        paddingBlockStart?: import("..").MQ<string> | undefined;
        paddingInlineEnd?: import("..").MQ<string> | undefined;
        paddingInlineStart?: import("..").MQ<string> | undefined;
        marginBlock?: import("..").MQ<string> | undefined;
        marginInline?: import("..").MQ<string> | undefined;
        paddingBlock?: import("..").MQ<string> | undefined;
        paddingInline?: import("..").MQ<string> | undefined;
        typographyPreset?: import("..").MQ<string> | undefined;
        spaceInline?: import("..").MQ<string> | undefined;
        stylePreset?: import("..").MQ<string> | undefined;
        transitionPreset?: import("../theme").TransitionToken | import("../theme").TransitionToken[] | undefined;
        iconSize?: import("..").MQ<string> | undefined;
    }) | undefined;
} & React.RefAttributes<HTMLLIElement>>;
//# sourceMappingURL=menu-sub.d.ts.map