/// <reference types="react" />
export declare const InlineDrawer: import("react").FC<import("../dialog/types").BaseDialogProps & {
    placement?: "bottom" | "left" | "right" | "top" | undefined;
    overrides?: {
        panel?: ({
            size?: import("..").MQ<string> | undefined;
            maxSize?: import("..").MQ<string> | undefined;
            minSize?: import("..").MQ<string> | undefined;
        } & import("../utils/logical-properties").LogicalProps) | undefined;
    } | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=inline-drawer.d.ts.map