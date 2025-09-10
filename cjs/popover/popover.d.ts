import * as React from 'react';
export declare const Popover: import("../utils").NewsKitReactComponents<Omit<import("../base-floating-element").FloatingElementProps, "overrides" | "content" | "trigger"> & {
    children: React.ReactNode;
    content: React.ReactNode;
    closePosition?: "none" | "left" | "right" | undefined;
    header?: React.ReactNode;
    handleCloseButtonClick?: (() => void) | undefined;
    enableDismiss?: boolean | undefined;
    overrides?: ({
        zIndex?: number | undefined;
        maxWidth?: import("../utils").MQ<string> | undefined;
        minWidth?: import("../utils").MQ<string> | undefined;
        offset?: string | undefined;
        stylePreset?: import("../utils").MQ<string> | undefined;
        panel?: ({
            stylePreset?: import("../utils").MQ<string> | undefined;
            typographyPreset?: import("../utils").MQ<string> | undefined;
        } & import("../utils/logical-properties").LogicalPaddingProps) | undefined;
        pointer?: {
            stylePreset?: import("../utils").MQ<string> | undefined;
            size?: import("../utils").MQ<string> | undefined;
            edgeOffset?: string | undefined;
        } | undefined;
        transitionPreset?: import("../theme").TransitionToken | import("../theme").TransitionToken[] | undefined;
    } & {
        header?: ({
            typographyPreset?: import("../utils").MQ<string> | undefined;
            stylePreset?: import("../utils").MQ<string> | undefined;
        } & import("../utils/logical-properties").LogicalProps) | undefined;
        content?: ({
            typographyPreset?: import("../utils").MQ<string> | undefined;
            stylePreset?: import("../utils").MQ<string> | undefined;
        } & import("../utils/logical-properties").LogicalProps) | undefined;
        closeButton?: {
            stylePreset?: import("../utils").MQ<string> | undefined;
        } | undefined;
        closeButtonContainer?: ({
            stylePreset?: import("../utils").MQ<string> | undefined;
        } & import("../utils/logical-properties").LogicalProps) | undefined;
    }) | undefined;
} & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=popover.d.ts.map