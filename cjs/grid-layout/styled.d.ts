/// <reference types="react" />
export declare const StyledGridLayout: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & {
    rowGap?: import("../utils/style").MQ<string> | undefined;
    columnGap?: import("../utils/style").MQ<string> | undefined;
    rows?: import("../utils/style").MQ<string> | undefined;
    columns?: import("../utils/style").MQ<string> | undefined;
    justifyContent?: import("../utils/style").MQ<string> | undefined;
    alignContent?: import("../utils/style").MQ<string> | undefined;
    justifyItems?: import("../utils/style").MQ<string> | undefined;
    alignItems?: import("../utils/style").MQ<string> | undefined;
    areas?: import("../utils/style").MQ<string> | undefined;
    inline?: import("../utils/style").MQ<boolean> | undefined;
    autoColumns?: import("../utils/style").MQ<string> | undefined;
    autoRows?: import("../utils/style").MQ<string> | undefined;
    autoFlow?: import("../utils/style").MQ<string> | undefined;
    children?: import("react").ReactNode | import("./types").GridLayoutRenderProps;
    as?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
    overrides?: ({
        width?: import("../utils/style").MQ<string> | undefined;
        minWidth?: import("../utils/style").MQ<string> | undefined;
        maxWidth?: import("../utils/style").MQ<string> | undefined;
        height?: import("../utils/style").MQ<string> | undefined;
        minHeight?: import("../utils/style").MQ<string> | undefined;
        maxHeight?: import("../utils/style").MQ<string> | undefined;
    } & import("../utils/logical-properties").LogicalProps) | undefined;
} & Omit<import("react").HTMLAttributes<HTMLDivElement>, "children">, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
//# sourceMappingURL=styled.d.ts.map